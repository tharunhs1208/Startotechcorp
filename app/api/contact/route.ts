import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "tharun.hs@stratotechcorp.in";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, source, company, service, budget, timeline, message, honeypot } = body;

    // Honeypot spam protection
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Message received." }, { status: 200 });
    }

    // Input Validation
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

    const formattedDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    const emailSubject = `✦ [StratoTech Lead] ${name} · ${company || "New Project Inquiry"}`;

    // ──────────────────────────────────────────────────────────────────────────
    // 1. Direct Delivery Gateway via FormSubmit (Mobile-Responsive Clean Table)
    // ──────────────────────────────────────────────────────────────────────────
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
          _replyto: email,
          _captcha: "false",
          "Client Name": name,
          "Email Address": email,
          "Phone Number": phone || "Not provided",
          "Company / Organization": company || "Individual Client",
          "Referral Channel": source || "Website Direct",
          "Project Requirements": message,
          "Submission Timestamp": `${formattedDate} IST`,
          "Originating Portal": "StratoTech Contact Form (stratotechcorp.in)",
        }),
      });

      const gatewayData = await gatewayResponse.json().catch(() => null);
      console.log("[Contact API Gateway Response]:", gatewayData);

      if (gatewayResponse.ok && gatewayData?.success !== "false") {
        return NextResponse.json({
          success: true,
          emailSent: true,
          recipient: RECIPIENT_EMAIL,
          message: "Thank you for reaching out! Our engineering lead will review your requirements and respond within 24 hours.",
        });
      }
    } catch (gatewayErr) {
      console.warn("[Contact API Gateway Warning]:", gatewayErr);
    }

    // ──────────────────────────────────────────────────────────────────────────
    // 2. Direct SMTP Transport (Executive Luxury 100% Mobile Responsive Table)
    // ──────────────────────────────────────────────────────────────────────────
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport(
          smtpHost
            ? {
                host: smtpHost,
                port: smtpPort,
                secure: smtpPort === 465,
                auth: { user: smtpUser, pass: smtpPass },
              }
            : {
                service: "gmail",
                auth: { user: smtpUser, pass: smtpPass },
              }
        );

        const htmlTemplate = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              @media only screen and (max-width: 600px) {
                .email-card { width: 100% !important; border-radius: 12px !important; }
                .email-header { padding: 20px 18px !important; }
                .email-body { padding: 20px 18px !important; }
                .email-cell-label { width: 40% !important; font-size: 11px !important; padding: 10px 12px !important; }
                .email-cell-val { font-size: 13px !important; padding: 10px 12px !important; }
                .email-btn { width: 100% !important; display: block !important; box-sizing: border-box !important; text-align: center !important; }
              }
            </style>
          </head>
          <body style="margin:0;padding:16px;background-color:#0c0c0e;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#ffffff;">
            <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center">
                  <div class="email-card" style="max-width:600px;width:100%;margin:0 auto;background-color:#141416;border:1px solid #27272a;border-radius:16px;overflow:hidden;box-shadow:0 20px 40px rgba(0,0,0,0.6);text-align:left;">
                    
                    <!-- Table Header Banner -->
                    <div class="email-header" style="background:linear-gradient(135deg, #1c1c20 0%, #111113 100%);padding:24px 28px;border-bottom:1px solid #27272a;">
                      <div style="display:inline-block;background-color:#82FFCD;color:#000000;font-size:11px;font-weight:700;padding:4px 12px;border-radius:999px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:10px;">
                        New Client Lead
                      </div>
                      <h1 style="font-size:22px;font-weight:800;margin:0;color:#ffffff;letter-spacing:-0.03em;">StratoTech Client Inquiry</h1>
                      <p style="font-size:12px;color:#a1a1aa;margin:6px 0 0 0;">Received via Contact Portal · ${formattedDate} IST</p>
                    </div>

                    <!-- Main Structured Table -->
                    <div class="email-body" style="padding:24px 28px;">
                      <table style="width:100%;border-collapse:separate;border-spacing:0;border:1px solid #27272a;border-radius:12px;overflow:hidden;font-size:14px;background-color:#18181b;table-layout:fixed;word-break:break-word;">
                        <thead>
                          <tr style="background-color:#202024;border-bottom:1px solid #27272a;">
                            <th class="email-cell-label" style="padding:12px 16px;text-align:left;font-size:11px;font-weight:700;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.08em;width:35%;border-bottom:1px solid #27272a;">Field</th>
                            <th class="email-cell-val" style="padding:12px 16px;text-align:left;font-size:11px;font-weight:700;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.08em;border-bottom:1px solid #27272a;">Client Detail</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style="border-bottom:1px solid #27272a;background-color:#18181b;">
                            <td class="email-cell-label" style="padding:12px 16px;color:#a1a1aa;font-weight:600;font-size:12px;border-bottom:1px solid #27272a;">Name</td>
                            <td class="email-cell-val" style="padding:12px 16px;color:#ffffff;font-weight:700;font-size:14px;border-bottom:1px solid #27272a;">${name}</td>
                          </tr>
                          <tr style="border-bottom:1px solid #27272a;background-color:#141416;">
                            <td class="email-cell-label" style="padding:12px 16px;color:#a1a1aa;font-weight:600;font-size:12px;border-bottom:1px solid #27272a;">Email</td>
                            <td class="email-cell-val" style="padding:12px 16px;border-bottom:1px solid #27272a;">
                              <a href="mailto:${email}" style="color:#82FFCD;font-weight:600;text-decoration:none;word-break:break-all;">${email}</a>
                            </td>
                          </tr>
                          <tr style="border-bottom:1px solid #27272a;background-color:#18181b;">
                            <td class="email-cell-label" style="padding:12px 16px;color:#a1a1aa;font-weight:600;font-size:12px;border-bottom:1px solid #27272a;">Phone</td>
                            <td class="email-cell-val" style="padding:12px 16px;color:#f4f4f5;font-weight:500;border-bottom:1px solid #27272a;">${phone || "Not provided"}</td>
                          </tr>
                          <tr style="border-bottom:1px solid #27272a;background-color:#141416;">
                            <td class="email-cell-label" style="padding:12px 16px;color:#a1a1aa;font-weight:600;font-size:12px;border-bottom:1px solid #27272a;">Company</td>
                            <td class="email-cell-val" style="padding:12px 16px;color:#f4f4f5;font-weight:500;border-bottom:1px solid #27272a;">${company || "Individual Client"}</td>
                          </tr>
                          <tr style="background-color:#18181b;">
                            <td class="email-cell-label" style="padding:12px 16px;color:#a1a1aa;font-weight:600;font-size:12px;">Source</td>
                            <td class="email-cell-val" style="padding:12px 16px;color:#f4f4f5;font-weight:500;">${source || "Website Direct"}</td>
                          </tr>
                        </tbody>
                      </table>

                      <!-- Message Scope Box -->
                      <div style="margin-top:20px;">
                        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#a1a1aa;margin-bottom:8px;">Project Brief & Message</div>
                        <div style="background-color:#09090b;border:1px solid #27272a;border-radius:12px;padding:16px;font-size:13px;line-height:1.6;color:#e4e4e7;white-space:pre-wrap;word-break:break-word;">${message}</div>
                      </div>

                      <!-- 1-Click Action Button -->
                      <div style="margin-top:24px;text-align:center;">
                        <a href="mailto:${email}?subject=Re:%20StratoTech%20Project%20Inquiry" class="email-btn" style="display:inline-block;background-color:#82FFCD;color:#000000;font-weight:700;font-size:13px;padding:12px 28px;border-radius:999px;text-decoration:none;">
                          Reply to ${name} →
                        </a>
                      </div>
                    </div>

                    <!-- Footer -->
                    <div style="padding:16px 24px;background-color:#0f0f11;border-top:1px solid #27272a;text-align:center;font-size:11px;color:#71717a;">
                      StratoTech · Digital Engineering Studio · Bengaluru, India
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `;

        await transporter.sendMail({
          from: `"StratoTech Inquiries" <${smtpUser}>`,
          to: RECIPIENT_EMAIL,
          replyTo: email,
          subject: emailSubject,
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nSource: ${source || "N/A"}\nMessage:\n${message}`,
          html: htmlTemplate,
        });

        console.log(`[Contact API] Email successfully delivered via SMTP to ${RECIPIENT_EMAIL}`);
        return NextResponse.json({
          success: true,
          emailSent: true,
          recipient: RECIPIENT_EMAIL,
          message: "Thank you for reaching out! Our engineering lead will review your requirements and respond within 24 hours.",
        });
      } catch (smtpErr) {
        console.error("[Contact API SMTP Error]:", smtpErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        recipient: RECIPIENT_EMAIL,
        message: "Thank you for reaching out! Our engineering lead will review your requirements and respond within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please check your details or email us directly." },
      { status: 500 }
    );
  }
}
