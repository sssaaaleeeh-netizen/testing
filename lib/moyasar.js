export function getMoyasarAuthHeader() {
  const secretKey = process.env.MOYASAR_SECRET_KEY;
  return "Basic " + Buffer.from(secretKey + ":").toString("base64");
}

export async function createPayment({ amountSAR, description, callbackUrl, productIds }) {
  const amountHalalas = Math.round(amountSAR * 100); // SAR → halalas (like cents)

  const response = await fetch("https://api.moyasar.com/v1/payments", {
    method: "POST",
    headers: {
      Authorization: getMoyasarAuthHeader(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: amountHalalas,
      currency: "SAR",
      description,
      callback_url: callbackUrl,
      source: { type: "creditcard" },
      metadata: { productIds },
    }),
  });

  return response.json();
}
