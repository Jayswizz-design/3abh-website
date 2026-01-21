import React from "react";
import { Link } from "react-router-dom";
import pricingImage from "../assets/business.webp"; // Replace with your image

export default function Pricing() {
  return (
    <section className="px-8 md:px-20 py-20 bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Pricing Plans</h1>

      {/* Back to Home */}
      <Link
        to="/"
        className="inline-block mb-6 text-orange-500 font-semibold hover:underline"
      >
        ← Back to Home
      </Link>

      <div className="space-y-6 text-gray-700 text-lg">
        <p>
          Our pricing plans are designed to suit businesses of all sizes. From startups
          to enterprises, we provide flexible options to scale with your needs.
        </p>

        <p>
          <span className="font-semibold">Basic Plan:</span> Perfect for small
          businesses and startups. Access essential features at an affordable price.
        </p>

        <p>
          <span className="font-semibold">Pro Plan:</span> For growing businesses
          that need advanced tools, analytics, and premium support.
        </p>

        <p>
          <span className="font-semibold">Enterprise Plan:</span> Tailored solutions
          for large organizations with custom workflows, dedicated support, and
          enhanced security.
        </p>

        <img
          src={pricingImage}
          alt="Pricing Example"
          className="w-full rounded-lg mt-4 shadow-lg"
        />
      </div>
    </section>
  );
}