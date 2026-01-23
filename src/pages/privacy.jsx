import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-20 text-gray-800">
      <div className="max-w-4xl mx-auto">

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Privacy Policy
        </h1>

        {/* Effective Date */}
        <p className="text-sm text-gray-500 mb-8">
          Effective Date: January 22, 2026
        </p>

        {/* Section 1: Information We Collect */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p className="mb-2">
            We may collect the following types of information from you:
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li><strong>Personal Information:</strong> Name, email, phone number, billing/shipping info, payment details.</li>
            <li><strong>Non-Personal Information:</strong> Browser type, IP address, pages visited, device info, analytics data.</li>
          </ul>
        </section>

        {/* Section 2: How We Use Your Information */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Provide and improve our services.</li>
            <li>Respond to inquiries or support requests.</li>
            <li>Send updates, newsletters, and marketing communications (with consent).</li>
            <li>Process payments and fulfill orders.</li>
            <li>Maintain website security and prevent fraud.</li>
          </ul>
        </section>

        {/* Section 3: Sharing Your Information */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Sharing Your Information</h2>
          <p className="text-gray-700">
            We respect your privacy and do <strong>not sell your personal data</strong>. We may share your information only with:
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Trusted service providers who support our operations.</li>
            <li>Authorities when required by law.</li>
            <li>To protect the rights, property, or safety of 3ABH or others.</li>
          </ul>
        </section>

        {/* Section 4: Cookies and Tracking */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Cookies and Tracking</h2>
          <p className="text-gray-700">
            We use cookies and similar technologies to enhance your experience, analyze site traffic, and deliver relevant content. You can manage cookie preferences in your browser settings.
          </p>
        </section>

        {/* Section 5: Data Security */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
          <p className="text-gray-700">
            We implement industry-standard security measures including encryption and restricted access. However, no method of transmission or storage is 100% secure.
          </p>
        </section>

        {/* Section 6: Your Rights */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
          <p className="text-gray-700">
            You may:
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Access, correct, or update your personal data.</li>
            <li>Request deletion of your personal data.</li>
            <li>Opt-out of marketing communications.</li>
            <li>Lodge complaints with us or the National Information Technology Development Agency (NITDA) in Nigeria.</li>
          </ul>
          <p className="mt-2 text-gray-700">
            Contact: <a href="mailto:3abhinvestment@gmail.com" className="text-orange-500 hover:underline">3abhinvestment@gmail.com</a>
          </p>
        </section>

        {/* Section 7: Children’s Privacy */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Children’s Privacy</h2>
          <p className="text-gray-700">
            3ABH is not intended for individuals under 13 years old. We do not knowingly collect personal data from children.
          </p>
        </section>

        {/* Section 8: Third-Party Links */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Third-Party Links</h2>
          <p className="text-gray-700">
            Our website may contain links to third-party websites. We are not responsible for their privacy practices. Please review their policies directly.
          </p>
        </section>

        {/* Section 9: Updates */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Updates to This Privacy Policy</h2>
          <p className="text-gray-700">
            We may update this policy occasionally. The "Effective Date" at the top reflects the latest version.
          </p>
        </section>

        {/* Section 10: Contact */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
          <p className="text-gray-700">
            Questions or concerns? Contact us at:
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Email: <a href="mailto:3abhinvestment@gmail.com" className="text-orange-500 hover:underline">3abhinvestment@gmail.com</a></li>
            <li>Address: 3ABH Office, Port Harcourt, Nigeria</li>
          </ul>
        </section>

      </div>
    </div>
  );
}