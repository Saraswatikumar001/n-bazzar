import React from "react";

export default function NewsletterSignup() {
  return (
    <div
      className="py-16 px-6 md:px-16 bg-cover bg-center rounded-3xl mt-14 shadow-lg"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518655048521-f130df041f66?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzayUyMGZsYXQlMjBsYXl8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000&utm_source=chatgpt.com')",
      }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-2xl p-10 max-w-3xl mx-auto shadow-xl">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Subscribe to Our Newsletter
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Get exclusive offers, new arrivals & updates directly in your inbox.
        </p>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-5 py-3 w-full sm:w-auto flex-1 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6634] transition"
          />
          <button className="px-6 py-3 bg-[#FF6634] text-white rounded-xl font-semibold hover:bg-orange-600 transition shadow-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
