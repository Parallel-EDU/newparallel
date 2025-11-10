import { google } from "googleapis";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { Name, Email, Phonenumber, Role } = body;

    // parallel-home-page@parallel-home-page-from.iam.gserviceaccount.com

    const credentials = {
      client_email: "parallel@linen-adapter-410807.iam.gserviceaccount.com",
      private_key:
        `-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCLKYpS9b0K4mVG\nBikFJXlo5Xf+rqnAIofpsh8yNp8faSqGEJh5hBQU0BntDPHjAld64IKxTMwhA/mC\nPmf2d/Ou0rUQ59J1daoLvwaYMVv7JWN5RRqg3xWDxUpQpom02Gn38yEJ93p4fmE+\nRxpwfeMGyVNTkXM4vqkReJ+mq5kAyA78xcPFQD2diOTvZ2LdbsasivSc5WnmDxpB\nIa5+UAzHygzP9uBBAnx6A2FDM0pIuC1a1JWHOYm0kqIcnQe8uuJrB9PC3xnRxWr4\nx1wvIaZFsU8NxNaD1y9fGWRuf6W3i4cJHaIoHvS1Gf9YSpqh9f+X3K+lTjV4TZxM\nMFQTKY/rAgMBAAECggEAHa6iENjWVgx88mcc97qK/1s2cW2ayl7zI175NXIeFYqO\nZeMDSqPnzpqmdP/WVgepVg2uApgxT/dzkBq0fQcPxGGv+iegJaqPtwqrIuogRtyu\nL28UY2zBv4XkuHgVFiw0ygyjJueQyUOXhTuQQZ8wPcHSUphK/bb5A795OgkOzPIO\nb2xTNMKK4SJwpXbKVSLgV7D0TRgD51tTxRhPzZsXrl55JuSV4XD/R1Tfq4Kj1DaL\nPtuv90Knl6Tqf7qgi4Ow2E1XsJGUJMVeUQn7YNiRJiJBwSBKakht6dfS9Z53aEgO\niKCrSfvYBJnPoSOdY0f5k4uaP8j7SBozypGFrw4x4QKBgQC92xBbSw/j3D9hGR+f\nxk87E0tXdb+20OwCVrP1jYMegwUmGdBs005ASUmuaiDQ80xj8BXN/GYwo6gnr5Kt\nNo2oYkiSg1nS6fH1/G+EVh5dn8SnR5K69DSaK5vAYu586e8406YQ6y0r4bKKGzdn\n1AgtZ1HHa6VFp32F5BJygp3USwKBgQC7pTTVXFUvtAWoNcdsIzc3YZZZLiMpwjLZ\npBVqOrCJ/e2q3UX7eO7DGjSqt/3fs5ovhw9Fok+VIUd5KN1oC9qt/QXWKNoxwX6y\n7MCp9y09qlJMmdRixek3N/uD84NeW4HA+nJujIGqyG/xNLN7De3g7Dg0ofP3pK+Z\nyQTHAhWu4QKBgQChjv3/QgPWmgDRBskTdHTNx6BwX4Hx9x0u7EsdZPu0BjhmcMcd\nJD9Nk1AA/MzKIo/Z518Wt3baYxngE5cUkPzA0koBa4cPZQcClXrsOUCD2UZGNzDU\nqKTuoLdcYpOhdoycZfbGJOp+kgQVZA2k7Bi9UlOUCLVObbXyLt/H1ACsuwKBgQCp\nAYRTgyUKoRbTSRTDlfg+fjufOQncq5eHJN1Q32lv7/BnC4LjmylZOjojZTJYkHgX\nxIqByk3pYJ7yRlccRkkAmjruh772P3OxDcH9k64As24KpiZ/jAegf2CemO5CRyLX\nv/rfDNghDQSd+DyLYaFWCwwYg6Gr831hgoc2Au+qoQKBgQCCG19lw7+kFilKrKAB\nDWVMqd6FQHNRaBZsFRchwHgggkHoPKw4Sm2bLwIa/5ydleL7QhQniBq+LezdiYmI\ny1XBMXbYy/6rgGqNB6viBeqrcnAyaWaXRs3aFGu7B2dMP6cJO+pnlKsYL+cAkTfq\noZTEAvsrr5juwBJrBrokGJ4/cg==\n-----END PRIVATE KEY-----\n`.replace(
          /\\n/g,
          "\n"
        ),
    };

    // Authorize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = "1bMjc3HGGWfcVOTDvxNtbdIQLQAFgJ8wp1O68ce56iJo";
    const range = "Enroll now!A1:F1";

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
        user: "hello@paralleledu.com", // your Gmail address
        pass: "ijht vrxe vrpu ewex", // your 16-char app password
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
