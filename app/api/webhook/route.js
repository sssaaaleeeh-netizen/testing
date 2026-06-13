import { NextResponse } from "next/server";

// Moyasar sends webhook events as POST requests
export async function POST(req) {
  try {
    const body = await req.json();

    const { type, data } = body;

    if (type === "payment_paid") {
      const payment = data;
      const productIds = payment.metadata?.productIds?.split(",") || [];
      const customerEmail = payment.source?.email || payment.billing?.email;

      // TODO: Send download links to customerEmail for productIds
      // Integrate with Resend, SendGrid, or any email provider
      console.log(`Payment paid — email: ${customerEmail}, products: ${productIds.join(", ")}`);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json({ error: "Webhook failed" }, { status: 400 });
  }
}
