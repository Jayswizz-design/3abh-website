import React, { useState } from "react";

const QuoteBox = () => {
  const initialState = {
    service: "",
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  const handleReset = () => {
    setFormData(initialState);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Request a Quote
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Dropdown */}
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a Service</option>
            <option value="web">Commercial Crop Production</option>
            <option value="mobile">Property Development</option>
            <option value="design">Agro-Processing & Value Addition</option>
            <option value="seo">Business Support & Consultancy</option>
            <option value="marketing">Property Sales & Leasing</option>
            <option value="cloud">Project Management & Outsourcing</option>
            <option value="consulting">Facility & Estate Management</option>
          </select>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Enter your message here..."
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          {/* Buttons */}
          <div className="flex justify-between gap-4 pt-2">
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteBox;