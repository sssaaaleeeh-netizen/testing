import { NextResponse } from "next/server";
import { createCheckoutUrl } from "@/lib/myfatoorah";
import { getProductById } from "@/lib/products";

export async function POST(req) {
  try {
    const { items } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "السلة فارغة" }, { status: 400 });
    }

    const totalSAR = items.reduce((sum, item) => sum + item.price, 0);
    const productIds = items.map((i) => i.id).join(",");
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://seedaal.store";

    const enrichedItems = items.map((item) => {
      const product = getProductById(item.id);
      return { name: product?.name || item.id, price: item.price };
    });

    const url = await createCheckoutUrl({
      amountSAR: totalSAR,
      productIds,
      items: enrichedItems,
      callbackUrl: `${baseUrl}/success`,
    });

    return NextResponse.json({ url });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json({ error: "حدث خطأ في الدفع" }, { status: 500 });
  }
}
