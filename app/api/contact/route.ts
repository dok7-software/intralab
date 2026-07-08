import { NextRequest } from "next/server";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

export async function POST(request: NextRequest) {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "Missing BREVO_API_KEY on server" }),
      { status: 500 },
    );
  }

  const body = await request.json();

  const {
    companyName,
    sector,
    address,
    partnerStatus,
    contactName,
    role,
    email,
    phone,
  } = body ?? {};

  if (
    !companyName ||
    !sector ||
    !address ||
    !partnerStatus ||
    !contactName ||
    !role ||
    !email ||
    !phone
  ) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
    });
  }

  const subject = `Nueva inscripción de empresa – IntraLab 22@`;

  const escapeHtml = (value: unknown) => {
    const str = String(value ?? "");
    return str
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  };

  const sectorLabels: Record<string, string> = {
    technology: "Tecnología",
    industry: "Industria",
    services: "Servicios",
    commerce: "Comercio",
    health: "Salud",
    other: "Otro",
  };

  const partnerLabel = partnerStatus === "si" ? "Sí" : "No";
  const sectorLabel = sectorLabels[sector] ?? sector;

  const textContent = `
Nueva inscripción de empresa para IntraLab 22@

Nombre de empresa: ${companyName}
Sector: ${sectorLabel}
Dirección: ${address}
Empresa socia 22@Network Barcelona: ${partnerLabel}

Persona de contacto: ${contactName}
Cargo: ${role}
Mail: ${email}
Teléfono: ${phone}
`.trim();

  const htmlContent = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin:0;padding:0;background:#f5f6f8;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f6f8;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:600px;max-width:600px;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background:#171219;padding:24px 20px;">
                <div style="font-family:Arial, Helvetica, sans-serif;color:#ffffff;font-size:18px;font-weight:700;line-height:1.2;">
                  Nueva inscripción de empresa
                </div>
                <div style="font-family:Arial, Helvetica, sans-serif;color:#ffffff;opacity:0.8;font-size:12px;margin-top:8px;">
                  Enviado desde la web de IntraLab 22@
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:20px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">
                      <div style="font-family:Arial, Helvetica, sans-serif;font-size:12px;color:#6b7280;font-weight:700;">Nombre de empresa</div>
                      <div style="font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#111827;margin-top:4px;">${escapeHtml(companyName)}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">
                      <div style="font-family:Arial, Helvetica, sans-serif;font-size:12px;color:#6b7280;font-weight:700;">Sector</div>
                      <div style="font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#111827;margin-top:4px;">${escapeHtml(sectorLabel)}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">
                      <div style="font-family:Arial, Helvetica, sans-serif;font-size:12px;color:#6b7280;font-weight:700;">Dirección</div>
                      <div style="font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#111827;margin-top:4px;">${escapeHtml(address)}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">
                      <div style="font-family:Arial, Helvetica, sans-serif;font-size:12px;color:#6b7280;font-weight:700;">Empresa socia 22@Network Barcelona</div>
                      <div style="font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#111827;margin-top:4px;">${escapeHtml(partnerLabel)}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">
                      <div style="font-family:Arial, Helvetica, sans-serif;font-size:12px;color:#6b7280;font-weight:700;">Contacto</div>
                      <div style="font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#111827;margin-top:4px;">${escapeHtml(contactName)}</div>
                      <div style="font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#111827;margin-top:6px;">${escapeHtml(role)}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">
                      <div style="font-family:Arial, Helvetica, sans-serif;font-size:12px;color:#6b7280;font-weight:700;">Mail</div>
                      <div style="font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#111827;margin-top:4px;">${escapeHtml(email)}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;">
                      <div style="font-family:Arial, Helvetica, sans-serif;font-size:12px;color:#6b7280;font-weight:700;">Teléfono</div>
                      <div style="font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#111827;margin-top:4px;">${escapeHtml(phone)}</div>
                    </td>
                  </tr>
                </table>

                <div style="font-family:Arial, Helvetica, sans-serif;margin-top:16px;padding:14px 16px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;">
                  <div style="font-size:12px;color:#6b7280;font-weight:700;">Siguiente paso sugerido</div>
                  <div style="font-size:13px;color:#111827;margin-top:6px;line-height:1.4;">
                    Revisar la inscripción y contactar con la persona de contacto indicada.
                  </div>
                  <div style="font-size:12px;color:#1f55a0;font-weight:700;margin-top:10px;">
                    Email de respuesta: ${escapeHtml(email)}
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="background:#f5f6f8;padding:14px 20px;text-align:center;font-family:Arial, Helvetica, sans-serif;color:#6b7280;font-size:12px;">
                IntraLab 22@ · info@intralab.cat
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();

  const payload = {
    sender: {
      email: "no-reply@intralab.cat",
      name: "IntraLab 22@",
    },
    to: [
      {
        email: "info@intralab.cat",
      },
    ],
    subject,
    textContent,
    htmlContent,
  };

  const brevoResponse = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(payload),
  });

  if (!brevoResponse.ok) {
    const errorText = await brevoResponse.text();
    console.error("Brevo error:", errorText);
    return new Response(
      JSON.stringify({ error: "Failed to send email", details: errorText }),
      { status: 502 },
    );
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}

