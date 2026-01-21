import React from "react";
import { Link } from "react-router-dom";
import communityImage from "../assets/community.jpg";

export default function Community() {
  return (
    <section className="px-8 md:px-20 py-20 bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Community</h1>

      <Link
        to="/"
        className="inline-block mb-6 text-orange-500 font-semibold hover:underline"
      >
        ← Back to Home
      </Link>

      <div className="space-y-6 text-gray-700 text-lg">
        <p>
          Our community initiatives aim to make a positive impact in society. We
          collaborate with local organizations, NGOs, and educational programs
          to create meaningful change.
        </p>

        <p>
          Participate in workshops, mentorship programs, and volunteer events
          that help develop skills and contribute to local development.
        </p>

        <p>
          By engaging with our community, you not only grow personally but also
          help make the world a better place.
        </p>

        <img
          src={communityImage}
          alt="Community Programs"
          className="w-full rounded-lg mt-4 shadow-lg"
        />
      </div>
    </section>
  );
}