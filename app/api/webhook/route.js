import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return NextResponse.json({ error: `Webhook error: ${err.message}` }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const productIds = session.metadata?.productIds?.split(",") || [];
    const customerEmail = session.customer_details?.email;

    // TODO: Send download links to customerEmail for productIds
    // You can integrate with SendGrid, Resend, or any email service here
    console.log(`Payment complete for ${customerEmail}: products ${productIds.join(", ")}`);
  }

  return NextResponse.json({ received: true });
}
