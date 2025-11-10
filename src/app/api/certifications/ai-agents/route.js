import { google } from "googleapis";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { Name, Email, Phonenumber, Role } = body;

    // parallel-home-page@parallel-home-page-from.iam.gserviceaccount.com

    const credentials = {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    };
    // Authorize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    // const spreadsheetId = "1bMjc3HGGWfcVOTDvxNtbdIQLQAFgJ8wp1O68ce56iJo";
    const range = "AI Agents!A1:F1";

    // Append data
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      resource: {
        values: [[Name, Email, Phonenumber, Role]],
      },
    });

    // 3️⃣ Gmail SMTP setup using your app password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
        // user: "hello@paralleledu.com", // your Gmail address
        // pass: "ijht vrxe vrpu ewex", // your 16-char app password
      },
    });

    // 4️⃣ Email to the user
    await transporter.sendMail({
      from: "hello@paralleledu.com",
      to: Email,
      subject: "Thanks for contacting us!",
      html: `
        <p>Hi ${Name},</p>
        <p>Thank you for reaching out to <strong>Parallel Education</strong>.</p>
        <p>Our team will get back to you within <strong>24 hours</strong>.</p>
        <br/>
        <p>Best regards,<br/>Parallel Education Team</p>
      `,
    });

    // 5️⃣ Email to admin
    await transporter.sendMail({
      from: "hello@paralleledu.com",
      to: "hello@paralleledu.com",
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${Name}</p>
        <p><strong>Email:</strong> ${Email}</p>
        <p><strong>Phone:</strong> ${Phonenumber}</p>
        <p><strong>I am:</strong> ${Role}</p>

      `,
    });

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Error occurred:", error.message);
    return NextResponse.json(
      { success: false, message: "Failed to submit form" },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json(
    { success: false, message: "Method not allowed" },
    { status: 405 }
  );
}
