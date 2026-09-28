import { NextResponse } from "next/server";
import { getTransaction } from "@/lib/paymob";

// GET /api/payment?id=TRANSACTION_ID
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "معرّف المعاملة مطلوب" }, { status: 400 });
  }

  try {
    const transaction = await getTransaction(id);

    if (!transaction) {
      return NextResponse.json({ error: "لم يُعثر على المعاملة" }, { status: 404 });
    }

    if (!transaction.success) {
      return NextResponse.json({ error: "الدفع غير مكتمل" }, { status: 402 });
    }

    const productIds = (transaction.order?.merchant_order_id || "").split(",").filter(Boolean);

    return NextResponse.json({ productIds, status: "paid" });
  } catch {
    return NextResponse.json({ error: "خطأ في التحقق من الدفع" }, { status: 500 });
  }
}
