export const metadata = { title: "Refund Policy — Seedaal" };

export default function RefundPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Refund Policy</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: June 2025</p>

      <div className="prose prose-sm max-w-none text-gray-600 space-y-6">
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Digital Products Policy</h2>
          <p>Because our products are digital downloads that are immediately accessible upon purchase, we generally do not offer refunds. Once a file has been downloaded, we cannot verify that it has been deleted from your device.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">When We Do Offer Refunds</h2>
          <p>We will issue a full refund in the following cases:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>The file is corrupted and cannot be opened.</li>
            <li>The product significantly does not match its description.</li>
            <li>You were charged but never received your download link.</li>
            <li>A duplicate charge occurred due to a technical error.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">How to Request a Refund</h2>
          <p>Email us at <a href="mailto:hello@seedaal.com" className="text-gray-900 underline">hello@seedaal.com</a> within 7 days of purchase with your order reference and reason for the request. We aim to respond within 24 hours.</p>
        </section>
      </div>
    </div>
  );
}
