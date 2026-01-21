import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/3abh.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const [dropdowns, setDropdowns] = useState({
    pricing: false,
    product: false,
    about: false,
    careers: false,
    community: false,
  });

  const location = useLocation();
  const navRef = useRef(null);

  const isQuotePage = location.pathname === "/quote";

  // Dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdowns({
      pricing: false,
      product: false,
      about: false,
      careers: false,
      community: false,
    });
  }, [location.pathname]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
        setDropdowns({
          pricing: false,
          product: false,
          about: false,
          careers: false,
          community: false,
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle dropdown (close others)
  const toggleDropdown = (key) => {
    setDropdowns((prev) => {
      const reset = Object.keys(prev).reduce(
        (acc, k) => ({ ...acc, [k]: false }),
        {}
      );
      return { ...reset, [key]: !prev[key] };
    });
  };

  return (
    <nav
      ref={navRef}
      className="flex justify-between items-center py-5 px-8 md:px-20 bg-white dark:bg-gray-900 transition relative shadow-sm"
    >
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="3ABH Logo" className="h-11 w-auto" />
      </Link>

      {/* DESKTOP NAV LINKS */}
      <ul className="hidden md:flex gap-8 font-semibold text-gray-700 dark:text-gray-200 items-center">
        {/* Pricing */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown("pricing")}
            className="hover:text-orange-600 transition"
          >
            Pricing
          </button>
          {dropdowns.pricing && (
            <div className="absolute top-full mt-3 w-64 bg-white dark:bg-gray-900 shadow-xl rounded-lg py-2 z-50">
              <Link to="/pricing" className="block px-4 py-2 hover:text-orange-600">
                Pricing Plans
              </Link>
            </div>
          )}
        </li>

        {/* Product */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown("product")}
            className="hover:text-orange-600 transition"
          >
            Product
          </button>
          {dropdowns.product && (
            <div className="absolute top-full mt-3 w-64 bg-white dark:bg-gray-900 shadow-xl rounded-lg py-2 z-50">
              <Link to="/product" className="block px-4 py-2 hover:text-orange-600">
                Our Product
              </Link>
            </div>
          )}
        </li>

        {/* About Us */}
        <li
          className="relative"
          onMouseEnter={() => toggleDropdown("about")}
          onMouseLeave={() => setDropdowns((p) => ({ ...p, about: false }))}
        >
          <button
            onClick={() => toggleDropdown("about")}
            className="hover:text-orange-600 transition"
          >
            About Us
          </button>

          {dropdowns.about && (
            <div className="absolute top-full mt-3 w-64 bg-white dark:bg-gray-900 shadow-xl rounded-lg py-2 z-50">
              <Link to="/company" className="block px-4 py-2 hover:text-orange-600">
                Company
              </Link>
              <Link to="/team" className="block px-4 py-2 hover:text-orange-600">
                Team
              </Link>
              <Link to="/mission" className="block px-4 py-2 hover:text-orange-600">
                Mission
              </Link>
            </div>
          )}
        </li>

        {/* Careers */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown("careers")}
            className="hover:text-orange-600 transition"
          >
            Careers
          </button>
          {dropdowns.careers && (
            <div className="absolute top-full mt-3 w-64 bg-white dark:bg-gray-900 shadow-xl rounded-lg py-2 z-50">
              <Link to="/careers" className="block px-4 py-2 hover:text-orange-600">
                Join Us
              </Link>
            </div>
          )}
        </li>

        {/* Community */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown("community")}
            className="hover:text-orange-600 transition"
          >
            Community
          </button>
          {dropdowns.community && (
            <div className="absolute top-full mt-3 w-64 bg-white dark:bg-gray-900 shadow-xl rounded-lg py-2 z-50">
              <Link to="/community" className="block px-4 py-2 hover:text-orange-600">
                Our Community
              </Link>
            </div>
          )}
        </li>
      </ul>

      {/* DESKTOP ACTIONS */}
      <div className="hidden md:flex items-center gap-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl hover:opacity-80 transition"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {!isQuotePage ? (
          <Link
            to="/quote"
            className="bg-orange-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Get Started
          </Link>
        ) : (
          <Link
            to="/"
            className="text-orange-500 font-semibold hover:underline transition"
          >
            ← Return Home
          </Link>
        )}
      </div>

      {/* MOBILE HAMBURGER */}
      <button
        className="md:hidden text-2xl text-gray-700 dark:text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-24 right-8 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col gap-4 md:hidden z-50">
          <Link to="/pricing">Pricing</Link>
          <Link to="/product">Product</Link>
          <Link to="/company">Company</Link>
          <Link to="/team">Team</Link>
          <Link to="/mission">Mission</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/community">Community</Link>

          {!isQuotePage ? (
            <Link
              to="/quote"
              className="mt-4 bg-orange-500 text-white py-2 rounded-full text-center font-semibold"
            >
              Get Started
            </Link>
          ) : (
            <Link
              to="/"
              className="mt-4 text-center text-orange-500 font-semibold"
            >
              ← Return Home
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}