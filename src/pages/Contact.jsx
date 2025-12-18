import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    alert("Thank you! We will contact you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Contact <span className="text-indigo-600">Us</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Have questions about products, orders, or support?  
            We’re always here to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 space-y-6 border border-indigo-100">
            <h3 className="text-xl font-semibold text-indigo-700">
              Get in Touch
            </h3>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-indigo-100 rounded-full">
                <MapPin className="text-indigo-600" />
              </div>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-800">
                  N-BAZAR Shopping Pvt Ltd
                </span>
                <br />
                Kolkata, West Bengal, India
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 bg-indigo-100 rounded-full">
                <Phone className="text-indigo-600" />
              </div>
              <p className="text-gray-700 font-medium">
                +91 98765 43210
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 bg-indigo-100 rounded-full">
                <Mail className="text-indigo-600" />
              </div>
              <p className="text-gray-700 font-medium">
                support@nbazar.com
              </p>
            </div>

            <p className="text-sm text-gray-500 pt-4 border-t">
              Our support team is available 24/7 to assist you.
            </p>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-10 border border-purple-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-600 to-purple-600
                text-white px-10 py-3 rounded-lg font-semibold
                hover:from-indigo-700 hover:to-purple-700
                shadow-lg hover:shadow-indigo-300/50 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
