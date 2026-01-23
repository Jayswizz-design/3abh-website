import React from "react";
import { Link } from "react-router-dom";
import productImage from "../assets/produc.jpg";

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
  We help you take the hassle out of chicken rearing, piggery farming, 
  and building construction. Our solutions make your projects efficient, 
  cost-effective, and easier to manage from start to finish.
</p>

<p>
  With expert guidance, proven techniques, and safety-first practices, 
  we empower farmers and builders to boost productivity, reduce risks, 
  and achieve results faster.
</p>

<p>
  Whether you’re running a small farm, a large livestock operation, or a 
  construction project, our services scale to fit your goals and ensure 
  success every step of the way. <strong>Get started today and see the difference for yourself!</strong>
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