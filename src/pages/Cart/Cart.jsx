import { Link, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQty } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.qty * Number(item.price.replace(/[^0-9]/g, "")),
    0
  );

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl">Your cart is empty</h2>
        <Link to="/products" className="text-blue-600">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-10">
      
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-6">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-6 border p-4 rounded-lg">
            <img src={item.img} className="h-24 w-24 object-contain" />

            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>

              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() =>
                    updateQty(item.id, Math.max(1, item.qty - 1))
                  }
                  className="border px-3"
                >
                  −
                </button>
                <span>{item.qty}</span>
                <button
                  onClick={() => updateQty(item.id, item.qty + 1)}
                  className="border px-3"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="border p-6 rounded-lg h-fit">
        <h2 className="text-xl font-semibold mb-4">
          Order Summary
        </h2>

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <button
          onClick={() => navigate("/checkout")}
          className="w-full bg-black text-white py-3 rounded-lg mt-6"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
