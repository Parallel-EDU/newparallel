import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, message: "Method not allowed" });
    return;
  }

  try {
    const { Name, Company_Name, Work_Email, Designation } = req.body;

    const credentials = {
      client_email: "parallel@linen-adapter-410807.iam.gserviceaccount.com",
      private_key:
        `-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCLKYpS9b0K4mVG\nBikFJXlo5Xf+rqnAIofpsh8yNp8faSqGEJh5hBQU0BntDPHjAld64IKxTMwhA/mC\nPmf2d/Ou0rUQ59J1daoLvwaYMVv7JWN5RRqg3xWDxUpQpom02Gn38yEJ93p4fmE+\nRxpwfeMGyVNTkXM4vqkReJ+mq5kAyA78xcPFQD2diOTvZ2LdbsasivSc5WnmDxpB\nIa5+UAzHygzP9uBBAnx6A2FDM0pIuC1a1JWHOYm0kqIcnQe8uuJrB9PC3xnRxWr4\nx1wvIaZFsU8NxNaD1y9fGWRuf6W3i4cJHaIoHvS1Gf9YSpqh9f+X3K+lTjV4TZxM\nMFQTKY/rAgMBAAECggEAHa6iENjWVgx88mcc97qK/1s2cW2ayl7zI175NXIeFYqO\nZeMDSqPnzpqmdP/WVgepVg2uApgxT/dzkBq0fQcPxGGv+iegJaqPtwqrIuogRtyu\nL28UY2zBv4XkuHgVFiw0ygyjJueQyUOXhTuQQZ8wPcHSUphK/bb5A795OgkOzPIO\nb2xTNMKK4SJwpXbKVSLgV7D0TRgD51tTxRhPzZsXrl55JuSV4XD/R1Tfq4Kj1DaL\nPtuv90Knl6Tqf7qgi4Ow2E1XsJGUJMVeUQn7YNiRJiJBwSBKakht6dfS9Z53aEgO\niKCrSfvYBJnPoSOdY0f5k4uaP8j7SBozypGFrw4x4QKBgQC92xBbSw/j3D9hGR+f\nxk87E0tXdb+20OwCVrP1jYMegwUmGdBs005ASUmuaiDQ80xj8BXN/GYwo6gnr5Kt\nNo2oYkiSg1nS6fH1/G+EVh5dn8SnR5K69DSaK5vAYu586e8406YQ6y0r4bKKGzdn\n1AgtZ1HHa6VFp32F5BJygp3USwKBgQC7pTTVXFUvtAWoNcdsIzc3YZZZLiMpwjLZ\npBVqOrCJ/e2q3UX7eO7DGjSqt/3fs5ovhw9Fok+VIUd5KN1oC9qt/QXWKNoxwX6y\n7MCp9y09qlJMmdRixek3N/uD84NeW4HA+nJujIGqyG/xNLN7De3g7Dg0ofP3pK+Z\nyQTHAhWu4QKBgQChjv3/QgPWmgDRBskTdHTNx6BwX4Hx9x0u7EsdZPu0BjhmcMcd\nJD9Nk1AA/MzKIo/Z518Wt3baYxngE5cUkPzA0koBa4cPZQcClXrsOUCD2UZGNzDU\nqKTuoLdcYpOhdoycZfbGJOp+kgQVZA2k7Bi9UlOUCLVObbXyLt/H1ACsuwKBgQCp\nAYRTgyUKoRbTSRTDlfg+fjufOQncq5eHJN1Q32lv7/BnC4LjmylZOjojZTJYkHgX\nxIqByk3pYJ7yRlccRkkAmjruh772P3OxDcH9k64As24KpiZ/jAegf2CemO5CRyLX\nv/rfDNghDQSd+DyLYaFWCwwYg6Gr831hgoc2Au+qoQKBgQCCG19lw7+kFilKrKAB\nDWVMqd6FQHNRaBZsFRchwHgggkHoPKw4Sm2bLwIa/5ydleL7QhQniBq+LezdiYmI\ny1XBMXbYy/6rgGqNB6viBeqrcnAyaWaXRs3aFGu7B2dMP6cJO+pnlKsYL+cAkTfq\noZTEAvsrr5juwBJrBrokGJ4/cg==\n-----END PRIVATE KEY-----\n`.replace(
          /\\n/g,
          "\n"
        ),
    };

    // Authorize the client
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = "1tNHfoFPjm3rRX64iREAtBobIqFQat3SIl9YyIWphz2k";
    const range = "Sheet1!A1:F1";

    // Append the data to the spreadsheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      resource: {
        values: [[Name, Company_Name, Work_Email, Designation]],
      },
    });

    res
      .status(200)
      .json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).json({ success: false, message: "Failed to submit form" });
  }
}
