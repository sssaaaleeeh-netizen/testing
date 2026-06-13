import Link from "next/link";
import { ArrowRight, Target, Heart, Award } from "lucide-react";

export const metadata = {
  title: "About Us — Seedaal",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Seedaal</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          We build professional Excel tools that help businesses of all sizes save time, reduce errors, and make better decisions — without needing to know a single formula.
        </p>
      </div>

      {/* Mission */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          {
            icon: <Target size={22} className="text-blue-500" />,
            title: "Our Mission",
            desc: "To make business operations simpler and more efficient by providing ready-to-use, professionally designed Excel tools that anyone can pick up and use immediately.",
          },
          {
            icon: <Heart size={22} className="text-red-500" />,
            title: "Who We Serve",
            desc: "Small businesses, startups, large enterprises, freelancers, accountants, HR professionals — anyone who works with data and wants to work smarter.",
          },
          {
            icon: <Award size={22} className="text-amber-500" />,
            title: "Our Promise",
            desc: "Every tool is tested, every formula is verified, and every product is designed with the end user in mind. We stand behind what we sell.",
          },
        ].map((item) => (
          <div key={item.title} className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 border border-gray-100 shadow-sm">
              {item.icon}
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Story */}
      <div className="bg-white border border-gray-100 rounded-3xl p-10 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>
            Seedaal was born out of frustration. Running a business means drowning in spreadsheets — budget tracking, payroll, inventory, sales reports — and most people either build something messy from scratch or spend thousands on software they barely use.
          </p>
          <p>
            We started creating these tools for our own use. After sharing them with a few friends running their own businesses and seeing how much time it saved them, we decided to build a proper store and make them available to everyone.
          </p>
          <p>
            Every template in our catalog has been built with real business scenarios in mind. We've tested them in actual companies, refined them based on feedback, and made them polished enough to share with clients and senior management without embarrassment.
          </p>
          <p>
            Today, hundreds of businesses across different industries rely on Seedaal tools. We're proud of that, and we keep making them better.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors"
        >
          Browse Our Tools <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
