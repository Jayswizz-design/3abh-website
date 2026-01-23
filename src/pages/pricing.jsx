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
  Our pricing plans are designed to help farmers and livestock businesses of all sizes, 
  while ensuring customers get quality products. Whether you’re starting small or managing 
  a large farm, we offer flexible options that grow with your goals.
</p>

<p>
  <span className="font-semibold">Basic Plan:</span> Perfect for small poultry or pig farms. 
  Access essential farming tools, basic guidance, and resources to increase yield and reduce losses, all at an affordable price.
</p>

<p>
  <span className="font-semibold">Pro Plan:</span> Designed for growing farms. 
  Benefit from advanced farm management tools, detailed analytics, and expert support to optimize production and deliver higher-quality products to your customers.
</p>

<p>
  <span className="font-semibold">Enterprise Plan:</span> Tailored for large-scale livestock operations. 
  Get customized workflows, premium farm optimization services, and dedicated support to maximize efficiency, ensure consistent product quality, and scale your business successfully.
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