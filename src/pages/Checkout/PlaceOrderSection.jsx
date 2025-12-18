import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

export default function PlaceOrderSection() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white max-w-3xl w-full rounded-2xl shadow-xl p-10 text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <FaCheckCircle className="text-green-600 text-5xl" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Order Placed Successfully!
        </h2>

        <p className="text-gray-600 mb-8">
          Thank you for shopping with{" "}
          <span className="font-semibold text-gray-900">N-BAZAR</span>.
          Your order has been confirmed and is being processed.
        </p>

        {/* Order Summary */}
        <div className="border rounded-xl p-6 text-left space-y-4 mb-8">
          <h3 className="font-semibold text-lg text-gray-800">
            Order Summary
          </h3>

          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Order ID</span>
            <span className="font-medium">NBZ-102345</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Product</span>
            <span className="font-medium">Custom Necklace</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Total Amount</span>
            <span className="font-semibold">$700.00</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Delivery</span>
            <span>3–5 Business Days</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="px-8 py-3 rounded-lg bg-[#cfa34a] text-white font-semibold hover:opacity-90"
          >
            Continue Shopping
          </Link>

          <Link
            to="/orders"
            className="px-8 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100"
          >
            View Orders
          </Link>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 mt-6">
          You will receive an order confirmation email shortly.
        </p>
      </div>
    </section>
  );
}
