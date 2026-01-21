import React from "react";
import { Link } from "react-router-dom";
import productImage from "../assets/product.jpg";

export default function Product() {
  return (
    <section className="px-8 md:px-20 py-20 bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Product</h1>

      <Link
        to="/"
        className="inline-block mb-6 text-orange-500 font-semibold hover:underline"
      >
        ← Back to Home
      </Link>

      <div className="space-y-6 text-gray-700 text-lg">
        <p>
          Our product is designed to simplify complex workflows and improve
          productivity for businesses of all sizes. It integrates seamlessly
          with your existing tools and provides actionable insights.
        </p>

        <p>
          With real-time analytics, customizable dashboards, and robust security,
          our solution empowers teams to work smarter and achieve better results.
        </p>

        <p>
          Whether you are a small startup or a large enterprise, our product scales
          to meet your needs.
        </p>

        <img
          src={productImage}
          alt="Product Example"
          className="w-full rounded-lg mt-4 shadow-lg"
        />
      </div>
    </section>
  );
}