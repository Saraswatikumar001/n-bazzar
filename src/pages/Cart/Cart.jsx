import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

export default function Cart() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Page Title */}
            <h1 className="text-3xl font-semibold mb-8">
                Shopping Cart
            </h1>
            <div className="grid lg:grid-cols-3 gap-10">
                {/* LEFT – CART ITEMS */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Cart Item */}
                    <div className="flex gap-6 border rounded-xl p-4 bg-white">
                        <img
                            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
                            alt="Product"
                            className="h-24 w-24 object-contain"
                        />

                        <div className="flex-1">
                            <h3 className="font-medium">
                                Apple MacBook Pro 13 M2
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                Category: Electronics
                            </p>

                            {/* Quantity */}
                            <div className="flex items-center gap-3 mt-3">
                                <button className="border px-3 py-1">−</button>
                                <span>1</span>
                                <button className="border px-3 py-1">+</button>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between items-end">
                            <p className="font-semibold">$1,200.00</p>
                            <button className="text-red-500 hover:text-red-700">
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT – ORDER SUMMARY */}
                <div className="border rounded-xl p-6 bg-gray-50 h-fit">
                    <h2 className="text-xl font-semibold mb-4">
                        Order Summary
                    </h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>$1,200.00</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="border-t my-4"></div>
                    <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>$1,200.00</span>
                    </div>

                    <button className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:opacity-90">
                        Proceed to Checkout
                    </button>

                    <Link
                        to="/products"
                        className="block text-center text-sm text-blue-600 mt-4"
                    >
                        Continue Shopping
                    </Link>
                </div>

            </div>
        </div>
    );
}
