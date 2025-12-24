import { useState } from "react";
import RatingStars from "./RatingStars";
import { useCart } from "../context/CartContext";

export default function ProductModal({ product, onClose }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }

    addToCart({
      ...product,
      selectedSize,
      selectedColor,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl"
        >
          ✕
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover rounded"
        />

        <h2 className="text-xl font-bold mt-4">{product.name}</h2>
        <RatingStars rating={product.rating} />

        <p className="mt-2 text-gray-600">
          Comfortable casual wear designed for everyday use.
        </p>

        <p className="text-indigo-600 font-bold text-lg mt-3">
          ₹{product.price}
        </p>

        {/* SIZE */}
        <div className="mt-4">
          <p className="font-semibold mb-2">Select Size</p>
          <div className="flex gap-2 flex-wrap">
            {product.sizes?.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded ${
                  selectedSize === size
                    ? "bg-indigo-600 text-white"
                    : "hover:border-indigo-600"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* COLOR */}
        <div className="mt-4">
          <p className="font-semibold mb-2">Select Color</p>
          <div className="flex gap-2 flex-wrap">
            {product.colors?.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-2 border rounded ${
                  selectedColor === color
                    ? "bg-indigo-600 text-white"
                    : "hover:border-indigo-600"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-6 w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
