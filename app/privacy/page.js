export const metadata = { title: "Privacy Policy — Seedaal" };

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: June 2025</p>
      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Information We Collect</h2>
          <p>When you make a purchase, we collect your name, email address, and payment information. Payment data is handled entirely by Stripe — we never store your card details.</p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">How We Use Your Information</h2>
          <p>We use your email solely to send your purchase confirmation and download links. We do not sell, share, or rent your personal information to third parties.</p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Cookies</h2>
          <p>We use minimal cookies to keep your shopping cart working across page visits. No tracking or advertising cookies are used.</p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Contact</h2>
          <p>For any privacy concerns, email us at <a href="mailto:hello@seedaal.com" className="text-gray-900 underline">hello@seedaal.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
