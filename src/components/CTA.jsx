import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-orange-500 text-white py-16 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between">
      
      {/* Text Content */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">
          Welcome to 3ABH Company
        </h2>

        <h6 className="text-white/90 text-base leading-relaxed">
          3ABH was established in 2025 by technically and commercially minded
          professionals, committed to delivering sustainable solutions and
          long-term value across multiple industries.
        </h6>
      </div>

      {/* Get Started Button (moved slightly down) */}
      <Link
        to="/quote"
        className="mt-6 md:mt-0 bg-white text-orange-600 py-3 px-8 rounded-full font-bold hover:bg-gray-100 transition"
      >
        Get Started
      </Link>

    </section>
  );
}