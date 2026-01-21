import React from "react";
import { Link } from "react-router-dom";
import careersImage from "../assets/career.jpg";

export default function Careers() {
  return (
    <section className="px-8 md:px-20 py-20 bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Careers</h1>

      <Link
        to="/"
        className="inline-block mb-6 text-orange-500 font-semibold hover:underline"
      >
        ← Back to Home
      </Link>

      <div className="space-y-6 text-gray-700 text-lg">
        <p>
          Join our growing team and build a fulfilling career in a collaborative,
          innovative environment. We value creativity, dedication, and teamwork.
        </p>

        <p>
          We offer opportunities in product development, design, marketing,
          customer support, and more. Our team enjoys flexible work arrangements
          and continuous professional growth.
        </p>

        <p>
          Become part of a company that makes an impact and helps shape the
          future of our industry.
        </p>

        <img
          src={careersImage}
          alt="Careers"
          className="w-full rounded-lg mt-4 shadow-lg"
        />
      </div>
    </section>
  );
}