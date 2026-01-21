import React from "react";

export default function QuoteText() {
  return (
    <section className="px-8 md:px-20 py-20 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Get a Quote</h1>

      <p className="text-lg text-gray-700 mb-6">
        Fill out the form below and we will get back to you with a personalized quote tailored to your business needs.
      </p>

      <form className="flex flex-col gap-4 max-w-xl">
        <input
          type="text"
          placeholder="Full Name"
          className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="text"
          placeholder="Company Name"
          className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <textarea
          placeholder="Your Requirements"
          className="border border-gray-300 rounded-lg py-2 px-4 h-32 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-6 rounded-full font-bold hover:bg-orange-600"
        >
          Submit
        </button>
      </form>
    </section>
  );
}