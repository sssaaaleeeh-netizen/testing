const BASE_URL = "https://api.myfatoorah.com";

async function mfPost(endpoint, body) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.MYFATOORAH_API_TOKEN}`,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  if (!data.IsSuccess) throw new Error(data.Message || "MyFatoorah API error");
  return data.Data;
}

// Create invoice and return the payment URL
export async function createCheckoutUrl({ amountSAR, productIds, items, callbackUrl }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://seedaal.store";

  const data = await mfPost("/v2/SendPayment", {
    NotificationOption: "Lnk",
    CustomerName: "عميل سيدال",
    DisplayCurrencyIso: "SAR",
    InvoiceValue: amountSAR,
    CallBackUrl: callbackUrl,
    ErrorUrl: `${baseUrl}/cart`,
    Language: "AR",
    UserDefinedField: productIds,
    InvoiceItems: items.map((item) => ({
      ItemName: item.name,
      Quantity: 1,
      UnitPrice: item.price,
    })),
  });

  return data.InvoiceURL;
}

// Verify payment status by paymentId from callback URL
export async function getPaymentStatus(paymentId) {
  try {
    const data = await mfPost("/v2/GetPaymentStatus", {
      Key: String(paymentId),
      KeyType: "PaymentId",
    });
    return data;
  } catch {
    return null;
  }
}
