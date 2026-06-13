import { Mail, MessageSquare, Clock } from "lucide-react";

export const metadata = {
  title: "Contact — Seedaal",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Get in Touch</h1>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          Have a question about a product, need a custom Excel tool, or having trouble with a download? We're here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Info */}
        <div className="space-y-5">
          <h2 className="font-semibold text-gray-900 text-lg">How to reach us</h2>
          {[
            {
              icon: <Mail size={18} className="text-blue-500" />,
              title: "Email",
              value: "hello@seedaal.com",
              desc: "We reply to all emails within 24 hours.",
            },
            {
              icon: <Clock size={18} className="text-amber-500" />,
              title: "Response time",
              value: "Within 24 hours",
              desc: "Monday to Friday, 9am – 6pm.",
            },
            {
              icon: <MessageSquare size={18} className="text-emerald-500" />,
              title: "Custom tools",
              value: "We build custom sheets",
              desc: "Need a bespoke Excel solution? Contact us for a quote.",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-100">
                {item.icon}
              </div>
              <div>
                <div className="font-medium text-sm text-gray-900">{item.title}</div>
                <div className="text-sm text-gray-700 font-medium mt-0.5">{item.value}</div>
                <div className="text-xs text-gray-400 mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-white border border-gray-100 rounded-2xl p-7">
          <h2 className="font-semibold text-gray-900 mb-5">Send us a message</h2>
          <form action="mailto:hello@seedaal.com" method="post" className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Subject</label>
              <select
                name="subject"
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white"
              >
                <option>Question about a product</option>
                <option>Download issue</option>
                <option>Custom Excel tool request</option>
                <option>Billing question</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us how we can help..."
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
