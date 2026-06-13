import { NextResponse } from "next/server";
import { createPayment } from "@/lib/moyasar";

export async function POST(req) {
  try {
    const { items } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "السلة فارغة" }, { status: 400 });
    }

    const totalSAR = items.reduce((sum, item) => sum + item.price, 0);
    const description = items.map((i) => i.name).join(" + ");
    const productIds = items.map((i) => i.id).join(",");
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const payment = await createPayment({
      amountSAR: totalSAR,
      description,
      callbackUrl: `${baseUrl}/success`,
      productIds,
    });

    // Moyasar returns the redirect URL in source.transaction_url
    const redirectUrl = payment?.source?.transaction_url;

    if (!redirectUrl) {
      console.error("Moyasar payment creation failed:", payment);
      return NextResponse.json({ error: "فشل إنشاء الدفع" }, { status: 500 });
    }

    return NextResponse.json({ url: redirectUrl });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json({ error: "حدث خطأ في الدفع" }, { status: 500 });
  }
}
