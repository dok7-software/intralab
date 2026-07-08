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

  const textContent = `
Nueva inscripción de empresa para IntraLab 22@

Nombre de empresa: ${companyName}
Sector: ${sector}
Dirección: ${address}
Empresa socia 22@Network Barcelona: ${partnerStatus === "si" ? "Sí" : "No"}

Persona de contacto: ${contactName}
Cargo: ${role}
Mail: ${email}
Teléfono: ${phone}
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

