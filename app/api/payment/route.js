import { NextResponse } from "next/server";
import { getMoyasarAuthHeader } from "@/lib/moyasar";

// GET /api/payment?id=PAYMENT_ID
// Verifies the payment with Moyasar and returns the purchased product IDs
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "معرّف الدفع مطلوب" }, { status: 400 });
  }

  try {
    const response = await fetch(`https://api.moyasar.com/v1/payments/${id}`, {
      headers: { Authorization: getMoyasarAuthHeader() },
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json({ error: "لم يُعثر على الدفع" }, { status: 404 });
    }

    const payment = await response.json();

    if (payment.status !== "paid") {
      return NextResponse.json({ error: "الدفع غير مكتمل" }, { status: 402 });
    }

    // productIds was stored as a comma-separated string in metadata
    const productIds = (payment.metadata?.productIds || "").split(",").filter(Boolean);

    return NextResponse.json({ productIds, status: payment.status });
  } catch {
    return NextResponse.json({ error: "خطأ في التحقق من الدفع" }, { status: 500 });
  }
}
