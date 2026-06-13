export const metadata = { title: "Terms of Service — Seedaal" };

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: June 2025</p>
      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">License</h2>
          <p>When you purchase a product from Seedaal, you receive a single-user license. You may use the file for your personal or business use. You may not resell, redistribute, or share the file with others who have not purchased it.</p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Intellectual Property</h2>
          <p>All products, designs, and content on this site are owned by Seedaal. Unauthorized reproduction or distribution is prohibited.</p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Disclaimer</h2>
          <p>Our tools are provided as-is. While we make every effort to ensure accuracy, we are not liable for any financial or business decisions made based on data entered into our spreadsheets.</p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Contact</h2>
          <p>Questions? Email <a href="mailto:hello@seedaal.com" className="text-gray-900 underline">hello@seedaal.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
