import { NextResponse } from "next/server";
import { getPaymentStatus } from "@/lib/myfatoorah";
import { getProductById } from "@/lib/products";
import { readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

// GET /api/download?product=PRODUCT_ID&payment=PAYMENT_ID
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const productId = searchParams.get("product");
  const paymentId = searchParams.get("payment");

  if (!productId || !paymentId) {
    return new NextResponse("معاملات مفقودة", { status: 400 });
  }

  // 1. Verify payment via MyFatoorah
  let payment;
  try {
    payment = await getPaymentStatus(paymentId);
    if (!payment) return new NextResponse("الدفعة غير موجودة", { status: 403 });
  } catch {
    return new NextResponse("خطأ في التحقق من الدفع", { status: 500 });
  }

  if (payment.InvoiceStatus !== "Paid") {
    return new NextResponse("الدفع غير مكتمل", { status: 403 });
  }

  // 2. Verify this product was part of the paid invoice
  const paidIds = (payment.UserDefinedField || "").split(",").map((s) => s.trim());
  if (!paidIds.includes(productId)) {
    return new NextResponse("هذا المنتج غير مشمول في الدفع", { status: 403 });
  }

  // 3. Stream the file from private-downloads/
  const product = getProductById(productId);
  if (!product) return new NextResponse("المنتج غير موجود", { status: 404 });

  const filePath = path.join(process.cwd(), "private-downloads", `${productId}.xlsx`);

  try {
    const buffer = await readFile(filePath);
    const filename = encodeURIComponent(product.name + ".xlsx");

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename*=UTF-8''${filename}`,
        "Content-Length": buffer.length.toString(),
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return new NextResponse("الملف غير متاح حالياً", { status: 404 });
  }
}
