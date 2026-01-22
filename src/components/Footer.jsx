import { Link } from "react-router-dom";
import logo from "../assets/3abh.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Logo + Socials */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img
            src={logo}
            alt="3abh logo"
            className="h-10 w-auto object-contain"
          />

          <div className="flex gap-5 text-xl">
            <i className="fab fa-facebook-f hover:text-orange-500 cursor-pointer transition"></i>
            <i className="fab fa-youtube hover:text-orange-500 cursor-pointer transition"></i>
            <i className="fab fa-twitter hover:text-orange-500 cursor-pointer transition"></i>
            <i className="fab fa-pinterest hover:text-orange-500 cursor-pointer transition"></i>
            <i className="fab fa-instagram hover:text-orange-500 cursor-pointer transition"></i>
          </div>
        </div>

        {/* Links */}
        {/* Links */}
<ul className="grid grid-cols-2 gap-x-12 gap-y-3 text-gray-400 text-sm text-center md:text-left">
  <li>
    <Link to="/" className="hover:text-white">
      Home
    </Link>
  </li>
  <li>
    <Link to="/careers" className="hover:text-white">
      Careers
    </Link>
  </li>
  <li>
    <Link to="/pricing" className="hover:text-white">
      Pricing
    </Link>
  </li>
  <li>
    <Link to="/community" className="hover:text-white">
      Community
    </Link>
  </li>
  <li>
    <Link to="/product" className="hover:text-white">
      Products
    </Link>
  </li>
  <li>
    <Link to="/company" className="hover:text-white">
      About Us
    </Link>
  </li>
  <li>
    <Link to="/privacy-policy" className="hover:text-white">
      Privacy Policy
    </Link>
  </li>
</ul>

        {/* Map */}
        <div className="w-full md:w-[300px] h-[200px] rounded-lg overflow-hidden">
          <iframe
            title="3ABH Location"
            src="https://www.google.com/maps?q=9.0765,7.3986&z=15&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Newsletter */}
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="Update your inbox..."
            className="px-5 py-3 rounded-full bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500"
          />

          <a
            href="mailto:Kings.abhulimen@gmail.com"
            className="bg-orange-500 px-5 py-3 rounded-full hover:bg-orange-600 transition"
          >
            Go
          </a>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-10">
        Copyright © 2026. All rights reserved.
      </p>
    </footer>
  );
}