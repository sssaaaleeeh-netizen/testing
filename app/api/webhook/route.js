import { NextResponse } from "next/server";
import { getPaymentStatus } from "@/lib/myfatoorah";

// MyFatoorah sends webhook events as POST requests
export async function POST(req) {
  try {
    const body = await req.json();

    // MyFatoorah webhook body contains InvoiceId
    const invoiceId = body.InvoiceId;
    if (!invoiceId) return NextResponse.json({ received: true });

    // Re-verify via API — more reliable than trusting the webhook body alone
    const payment = await getPaymentStatus(String(invoiceId));

    if (payment?.InvoiceStatus === "Paid") {
      const productIds = (payment.UserDefinedField || "").split(",").filter(Boolean);
      const customerEmail = payment.CustomerEmail || "";
      console.log(`Payment paid — email: ${customerEmail}, products: ${productIds.join(", ")}`);
      // TODO: Send download links to customerEmail via Resend or SendGrid
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json({ error: "Webhook failed" }, { status: 400 });
  }
}
