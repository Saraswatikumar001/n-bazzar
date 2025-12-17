import { useCart } from "../../context/CartContext";

export default function Checkout() {
  const { cart } = useCart();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-6">
        Checkout
      </h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between border-b pb-2">
            <span>
              {item.name} × {item.qty}
            </span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>

      <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg">
        Place Order
      </button>
    </div>
  );
}
