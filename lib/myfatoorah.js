const BASE_URL = "https://api.myfatoorah.com";

async function mfPost(endpoint, body) {
  const token = process.env.MYFATOORAH_API_TOKEN;
  if (!token) throw new Error("MYFATOORAH_API_TOKEN غير مضبوط في متغيرات البيئة");

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!data.IsSuccess) {
    const msg =
      data.Message ||
      (data.ValidationErrors && JSON.stringify(data.ValidationErrors)) ||
      "MyFatoorah API error";
    console.error("MyFatoorah error response:", JSON.stringify(data));
    throw new Error(msg);
  }

  return data.Data;
}

// Create invoice and return the hosted payment page URL
export async function createCheckoutUrl({ amountSAR, productIds, callbackUrl }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://seedaal.store";

  const data = await mfPost("/v2/SendPayment", {
    NotificationOption: "LNK",
    CustomerName: "Customer",
    DisplayCurrencyIso: "SAR",
    InvoiceValue: Number(amountSAR),
    CallBackUrl: callbackUrl,
    ErrorUrl: `${baseUrl}/cart`,
    Language: "AR",
    UserDefinedField: productIds,
  });

  return data.InvoiceURL;
}

// Verify payment status by paymentId from MyFatoorah callback URL
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
