import { Link } from "react-router-dom"; // <-- Import Link
import heroImage from "../assets/agro.jpg";
import heroImage1 from "../assets/business.webp";
import heroImage2 from "../assets/consumer.jpg";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 bg-white">
      
      {/* AVATARS */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        <div className="flex items-center justify-center">
          <img
            src={heroImage2}
            alt="avatar-richard"
            className="rounded-full shadow-lg w-32 h-32"
          />
        </div>

        <div className="flex items-center justify-center">
          <img
            src={heroImage1}
            alt="avatar-anisha"
            className="rounded-full shadow-lg w-32 h-32"
          />
        </div>

        <div className="flex items-center justify-center">
          <img
            src={heroImage}
            alt="avatar-ali"
            className="rounded-full shadow-lg w-32 h-32"
          />
        </div>
      </div>

      {/* MISSION & VISION */}
      <div
        className="
          max-w-lg 
          space-y-6 
          mt-16 md:mt-0
          text-center md:text-left
        "
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Mission & Vision
        </h1>

        <p className="text-gray-600">
          <span className="font-semibold text-gray-800">Mission:</span>{" "}
          ABH Investment Company Limited is dedicated to enhancing communities
          through sustainable real estate development, innovative agricultural
          practices, and exceptional support services, while delivering long-term
          value to our stakeholders.
        </p>

        <p className="text-gray-600">
          <span className="font-semibold text-gray-800">Vision:</span>{" "}
          To be a leading force in transforming industries and improving lives
          by fostering sustainable growth in real estate and agriculture,
          setting the standard for excellence in support service.
        </p>

        <div className="flex justify-center md:justify-start">
          {/* Link to /quote page */}
          <Link to="/quote" className="bg-orange-500 text-white py-3 px-8 rounded-full hover:bg-orange-600 font-bold">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}