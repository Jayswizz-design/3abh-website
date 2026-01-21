import React from "react";
import { Link } from "react-router-dom";
import missionImage from "../assets/mission.jpg";

export default function Mission() {
  return (
    <section className="px-8 md:px-20 py-20 bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Mission Leaders</h1>

      <Link
        to="/"
        className="inline-block mb-6 text-orange-500 font-semibold hover:underline"
      >
        ← Back to Home
      </Link>

      <div className="space-y-6 text-gray-700 text-lg">
        <p>
          Our mission leaders drive the strategic vision of the company. They
          are dedicated to innovation, excellence, and creating value for our
          clients and employees.
        </p>

        <p>
          With decades of combined experience, our leadership team ensures that
          every project aligns with our core values of integrity, collaboration,
          and social responsibility.
        </p>

        <p>
          Their guidance and mentorship help our teams achieve ambitious goals
          while fostering a culture of continuous learning.
        </p>

        <img
          src={missionImage}
          alt="Mission Leaders"
          className="w-full rounded-lg mt-4 shadow-lg"
        />
      </div>
    </section>
  );
}