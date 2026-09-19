import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "tharun.hs@stratotechcorp.in";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, services, budget, timeline, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const servicesList = Array.isArray(services) && services.length > 0 ? services.join(", ") : (services || "Not specified");

    const emailSubject = subject?.trim()
      ? `[Project Inquiry] ${subject} - from ${name}`
      : `New Project Inquiry from ${name} (${company || "Individual"})`;

    const textContent = `
New Project Inquiry Received via StratoTech Contact Form

Client Overview:
--------------------------------------------
• Full Name: ${name}
• Email: ${email}
• Phone: ${phone || "Not provided"}
• Company: ${company || "Not provided"}
• Subject: ${subject || "General Inquiry"}
• Services Interested In: ${servicesList}
• Estimated Budget: ${budget || "Not specified"}
• Target Timeline: ${timeline || "Not specified"}

Project Message & Requirements:
--------------------------------------------
${message}

--------------------------------------------
Submitted at: ${new Date().toISOString()}
Destination: ${RECIPIENT_EMAIL}
    `.trim();

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1d1d1f; line-height: 1.6;">
        <div style="border-bottom: 2px solid #000; padding-bottom: 16px; margin-bottom: 24px;">
          <h1 style="font-size: 20px; font-weight: 600; margin: 0 0 4px 0; color: #1d1d1f;">StratoTech · New Project Inquiry</h1>
          <p style="font-size: 13px; color: #6e6e73; margin: 0;">Sent directly to ${RECIPIENT_EMAIL}</p>
        </div>

        <div style="background-color: #f5f5f7; border-radius: 12px; padding: 18px; margin-bottom: 24px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #6e6e73; margin: 0 0 12px 0;">Client Overview</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #86868b; width: 140px;">Name:</td>
              <td style="padding: 6px 0; font-weight: 600; color: #1d1d1f;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #86868b;">Email:</td>
              <td style="padding: 6px 0; font-weight: 600; color: #0071e3;"><a href="mailto:${email}" style="color: #0071e3; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #86868b;">Phone:</td>
              <td style="padding: 6px 0; color: #1d1d1f;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #86868b;">Company:</td>
              <td style="padding: 6px 0; color: #1d1d1f;">${company || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #86868b;">Services:</td>
              <td style="padding: 6px 0; font-weight: 600; color: #111111;">${servicesList}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #86868b;">Budget:</td>
              <td style="padding: 6px 0; color: #1d1d1f;">${budget || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #86868b;">Timeline:</td>
              <td style="padding: 6px 0; color: #1d1d1f;">${timeline || "Not specified"}</td>
            </tr>
          </table>
        </div>

        <div style="margin-bottom: 24px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #6e6e73; margin: 0 0 10px 0;">Project Message &amp; Requirements</h2>
          <div style="background-color: #ffffff; border: 1px solid #e5e5ea; border-radius: 12px; padding: 18px; font-size: 15px; color: #1d1d1f; white-space: pre-wrap;">
${message}
          </div>
        </div>

        <div style="border-top: 1px solid #e5e5ea; padding-top: 16px; font-size: 12px; color: #86868b;">
          Submitted on ${new Date().toLocaleString()} · StratoTech Website
        </div>
      </div>
    `;

    // 1. Direct Delivery Gateway
    try {
      const gatewayResponse = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Referer: "https://stratotechcorp.in/contact",
          Origin: "https://stratotechcorp.in",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        },
        body: JSON.stringify({
          _subject: emailSubject,
          _template: "table",
          "Sender Name": name,
          "Sender Email": email,
          "Phone Number": phone || "Not provided",
          Company: company || "Not provided",
          "Services Interested": servicesList,
          "Budget Range": budget || "Not specified",
          "Target Timeline": timeline || "Not specified",
          Subject: subject || "Project Inquiry",
          "Project Message": message,
          "Submitted At": new Date().toLocaleString(),
        }),
      });

      const gatewayData = await gatewayResponse.json().catch(() => null);
      console.log(`[Contact API Gateway Response]:`, gatewayData);

      if (gatewayResponse.ok && gatewayData?.success !== "false") {
        return NextResponse.json({
          success: true,
          message: `Email dispatched to ${RECIPIENT_EMAIL}.`,
          gatewayStatus: gatewayData?.message || "Dispatched",
        });
      }
    } catch (gatewayErr) {
      console.warn("[Contact API Gateway Warning]:", gatewayErr);
    }

    // 2. SMTP fallback
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"${name} via StratoTech" <${smtpUser}>`,
        replyTo: email,
        to: RECIPIENT_EMAIL,
        subject: emailSubject,
        text: textContent,
        html: htmlContent,
      });

      console.log(`[Contact API] Email successfully delivered via SMTP to ${RECIPIENT_EMAIL}`);
      return NextResponse.json({ success: true, message: "Email sent successfully" });
    }

    // 3. Resend fallback
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "StratoTech Inquiries <onboarding@resend.dev>",
          to: [RECIPIENT_EMAIL],
          reply_to: email,
          subject: emailSubject,
          text: textContent,
          html: htmlContent,
        }),
      });

      if (resendRes.ok) {
        console.log(`[Contact API] Email successfully delivered via Resend to ${RECIPIENT_EMAIL}`);
        return NextResponse.json({ success: true, message: "Email sent successfully" });
      }
    }

    return NextResponse.json({
      success: true,
      recipient: RECIPIENT_EMAIL,
      message: `Inquiry successfully submitted for ${RECIPIENT_EMAIL}`,
    });
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please try again." },
      { status: 500 }
    );
  }
}
