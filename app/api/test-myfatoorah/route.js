import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.MYFATOORAH_API_TOKEN;

  if (!token) {
    return NextResponse.json({ error: "MYFATOORAH_API_TOKEN غير موجود في البيئة" }, { status: 500 });
  }

  const BASE_URL = "https://api-sa.myfatoorah.com";

  try {
    const res = await fetch(`${BASE_URL}/v2/InitiatePayment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ InvoiceAmount: 10, CurrencyIso: "SAR" }),
    });

    const data = await res.json();
    return NextResponse.json({ status: res.status, body: data });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
