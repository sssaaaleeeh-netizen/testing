import { NextResponse } from "next/server";
import { getPaymentStatus } from "@/lib/myfatoorah";

// GET /api/payment?id=PAYMENT_ID
// Verifies MyFatoorah payment and returns purchased product IDs
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "معرّف الدفع مطلوب" }, { status: 400 });
  }

  try {
    const payment = await getPaymentStatus(id);

    if (!payment) {
      return NextResponse.json({ error: "لم يُعثر على الدفعة" }, { status: 404 });
    }

    if (payment.InvoiceStatus !== "Paid") {
      return NextResponse.json({ error: "الدفع غير مكتمل" }, { status: 402 });
    }

    const productIds = (payment.UserDefinedField || "").split(",").filter(Boolean);
    return NextResponse.json({ productIds, status: "paid" });
  } catch {
    return NextResponse.json({ error: "خطأ في التحقق من الدفع" }, { status: 500 });
  }
}
