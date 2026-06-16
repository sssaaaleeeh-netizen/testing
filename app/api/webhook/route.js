import { NextResponse } from "next/server";
import crypto from "crypto";

// Paymob sends webhook events as POST requests
export async function POST(req) {
  try {
    const body = await req.json();

    // Verify HMAC signature from Paymob
    const hmacSecret = process.env.PAYMOB_HMAC_SECRET;
    if (hmacSecret) {
      const receivedHmac = body.hmac;
      const fields = [
        body.amount_cents, body.created_at, body.currency, body.error_occured,
        body.has_parent_transaction, body.obj?.id, body.obj?.integration_id,
        body.obj?.is_3d_secure, body.obj?.is_auth, body.obj?.is_capture,
        body.obj?.is_refunded, body.obj?.is_standalone_payment, body.obj?.is_voided,
        body.obj?.order?.id, body.obj?.owner, body.obj?.pending,
        body.obj?.source_data?.pan, body.obj?.source_data?.sub_type,
        body.obj?.source_data?.type, body.obj?.success,
      ];
      const message = fields.map((f) => (f === undefined || f === null ? "" : String(f))).join("");
      const expectedHmac = crypto.createHmac("sha512", hmacSecret).update(message).digest("hex");
      if (receivedHmac !== expectedHmac) {
        return NextResponse.json({ error: "Invalid HMAC" }, { status: 401 });
      }
    }

    const transaction = body.obj;
    if (transaction?.success) {
      const productIds = (transaction.order?.merchant_order_id || "").split(",").filter(Boolean);
      const customerEmail = transaction.billing_data?.email;
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
