import React from "react";
import { Link } from "react-router-dom";
import teamImage from "../assets/consumer.jpg";

export default function Team() {
  return (
    <section className="px-8 md:px-20 py-20 bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Team</h1>

      {/* Back to Home */}
      <Link
        to="/"
        className="inline-block mb-6 text-orange-500 font-semibold hover:underline"
      >
        ← Back to Home
      </Link>

      <div className="space-y-6 text-gray-700 text-lg">
        <p>
          Meet our dedicated team of professionals committed to delivering
          innovative solutions. Each team member brings unique skills and
          expertise to help you succeed.
        </p>

        <p>
          Our leadership team ensures projects are executed efficiently while
          maintaining a culture of collaboration and creativity.
        </p>

        <img
          src={teamImage}
          alt="Team"
          className="w-full rounded-lg mt-4 shadow-lg"
        />
      </div>
    </section>
  );
}