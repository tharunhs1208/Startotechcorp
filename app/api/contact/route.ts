import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, budget, message, timeline, honeypot } = body;

    // Honeypot spam check
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Message received." }, { status: 200 });
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Log inquiry server-side (ready for Resend, Postmark, Slack/Discord Webhook)
    console.log("📥 New Project Inquiry Received:", {
      name,
      email,
      company: company || "Not specified",
      service: service || "General Inquiry",
      budget: budget || "Not specified",
      timeline: timeline || "Flexible",
      message,
      timestamp: new Date().toISOString(),
    });

    // Optional Webhook integration if env configured
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `🚀 **New Client Inquiry from ${name} (${company || "Individual"})**\n📧 Email: ${email}\n🛠 Service: ${service}\n💰 Budget: ${budget}\n⏱ Timeline: ${timeline}\n📝 Message:\n> ${message}`,
          }),
        });
      } catch (err) {
        console.error("Webhook notification error:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Our engineering lead will review your requirements and respond within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
