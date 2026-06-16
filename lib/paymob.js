async function getAuthToken() {
  const res = await fetch("https://accept.paymob.com/api/auth/tokens", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key: process.env.PAYMOB_API_KEY }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Paymob auth failed");
  const data = await res.json();
  return data.token;
}

export async function createCheckoutUrl({ amountSAR, productIds, callbackUrl }) {
  const amountCents = Math.round(amountSAR * 100);
  const authToken = await getAuthToken();

  // Step 1: Create order
  const orderRes = await fetch("https://accept.paymob.com/api/ecommerce/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      auth_token: authToken,
      delivery_needed: false,
      amount_cents: amountCents,
      currency: "SAR",
      merchant_order_id: productIds, // comma-separated product IDs stored here
      items: [],
    }),
    cache: "no-store",
  });
  const order = await orderRes.json();
  if (!order.id) throw new Error("Paymob order creation failed: " + JSON.stringify(order));

  // Step 2: Get payment key
  const keyRes = await fetch("https://accept.paymob.com/api/acceptance/payment_keys", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      auth_token: authToken,
      amount_cents: amountCents,
      expiration: 3600,
      order_id: order.id,
      billing_data: {
        apartment: "NA",
        email: "NA",
        floor: "NA",
        first_name: "Customer",
        street: "NA",
        building: "NA",
        phone_number: "NA",
        shipping_method: "NA",
        postal_code: "NA",
        city: "NA",
        country: "SA",
        last_name: "NA",
        state: "NA",
      },
      currency: "SAR",
      integration_id: parseInt(process.env.PAYMOB_INTEGRATION_ID),
      redirect_url: callbackUrl,
    }),
    cache: "no-store",
  });
  const keyData = await keyRes.json();
  if (!keyData.token) throw new Error("Paymob payment key failed: " + JSON.stringify(keyData));

  return `https://accept.paymob.com/api/acceptance/iframes/${process.env.PAYMOB_IFRAME_ID}?payment_token=${keyData.token}`;
}

export async function getTransaction(transactionId) {
  const authToken = await getAuthToken();
  const res = await fetch(`https://accept.paymob.com/api/acceptance/transactions/${transactionId}`, {
    headers: { Authorization: `Bearer ${authToken}` },
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}
