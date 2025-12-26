import { useEffect, useMemo, useState } from "react";
import { ShoppingCart, Heart, Eye, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

/* ---------------- MOCK API ---------------- */
const fetchOfficeProducts = async () => {
  return [
    {
      id: 1,
      name: "Formal Slim Fit Shirt",
      price: 1499,
      originalPrice: 1999,
      rating: 4.5,
      category: "Shirts",
      sizes: ["S", "M", "L"],
      colors: ["White", "Blue"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKpfB8wpMi4eIe-TwnuqgajvHnZQTmXy7Bw&s",
    },
    {
      id: 2,
      name: "Office Blazer",
      price: 3499,
      originalPrice: 4499,
      rating: 4.8,
      category: "Blazers",
      sizes: ["M", "L", "XL"],
      colors: ["Black", "Grey"],
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    },
    {
      id: 3,
      name: "Formal Trousers",
      price: 1999,
      originalPrice: 2499,
      rating: 4.3,
      category: "Pants",
      sizes: ["S", "M", "L"],
      colors: ["Black", "Navy"],
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    },
    {
      id: 4,
      name: "Corporate Shirt",
      price: 1699,
      originalPrice: 2199,
      rating: 4.6,
      category: "Shirts",
      sizes: ["M", "L"],
      colors: ["White", "Grey"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvSMup31emZF-YZbXqaJJGbMllhGbfKIBy0A&s",
    },
    {
      id: 5,
      name: "Corporate Shirt",
      price: 1699,
      originalPrice: 2199,
      rating: 4.6,
      category: "Shirts",
      sizes: ["M", "L"],
      colors: ["White", "Grey"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXv-4eV2qU4X8CQK0unpERSuJlJkUl3LFJDg&s",
    },
    {
      id: 6,
      name: "Corporate Shirt",
      price: 1699,
      originalPrice: 2199,
      rating: 4.6,
      category: "Shirts",
      sizes: ["M", "L"],
      colors: ["White", "Grey"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV8_Fs1f-bQ2vn7vhosTwLlt2FaTCX03FJNQ&s",
    },
  ];
};

/* ---------------- RATING STARS ---------------- */
const Stars = ({ rating }) => (
  <div className="flex justify-center gap-1">
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        className={
          i < Math.round(rating)
            ? "text-yellow-400"
            : "text-gray-300"
        }
      >
        ★
      </span>
    ))}
  </div>
);

/* ---------------- QUICK VIEW MODAL ---------------- */
const QuickViewModal = ({ product, onClose, addToCart }) => (
  <AnimatePresence>
    {product && (
      <motion.div
        className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full p-6 relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4"
          >
            <X />
          </button>

          <div className="grid md:grid-cols-2 gap-8">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl"
            />

            <div>
              <h3 className="text-2xl font-bold mb-2">
                {product.name}
              </h3>

              <Stars rating={product.rating} />

              <p className="mt-4">
                <span className="text-2xl font-bold text-indigo-600">
                  ₹{product.price}
                </span>
                <span className="line-through text-gray-400 ml-3">
                  ₹{product.originalPrice}
                </span>
              </p>

              <p className="mt-3 text-sm text-gray-500">
                Sizes: {product.sizes.join(", ")}
              </p>
              <p className="text-sm text-gray-500">
                Colors: {product.colors.join(", ")}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

/* ---------------- MAIN COMPONENT ---------------- */
export default function OfficeWearSection() {
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [quickView, setQuickView] = useState(null);

  useEffect(() => {
    fetchOfficeProducts().then(setProducts);
  }, []);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14 dark:text-white">
          Office Wear Collection
        </h2>

        {/* MOBILE CAROUSEL */}
        <div className="flex lg:grid lg:grid-cols-3 gap-8 overflow-x-auto pb-6">
          {products.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              className="min-w-[280px] lg:min-w-0 bg-white dark:bg-gray-800
                         rounded-3xl shadow-lg overflow-hidden relative"
            >
              <div className="relative h-[300px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />

                {/* DISCOUNT */}
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                  {Math.round(
                    ((item.originalPrice - item.price) /
                      item.originalPrice) *
                      100
                  )}
                  % OFF
                </span>

                {/* ICONS */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => toggleWishlist(item.id)}
                    className="bg-white p-2 rounded-full"
                  >
                    <Heart
                      className={
                        wishlist.includes(item.id)
                          ? "fill-red-500 text-red-500"
                          : ""
                      }
                      size={16}
                    />
                  </button>
                  <button
                    onClick={() => setQuickView(item)}
                    className="bg-white p-2 rounded-full"
                  >
                    <Eye size={16} />
                  </button>
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg dark:text-white">
                  {item.name}
                </h3>

                <Stars rating={item.rating} />

                <p className="mt-2">
                  <span className="font-bold text-indigo-600 text-xl">
                    ₹{item.price}
                  </span>
                  <span className="line-through text-gray-400 ml-2">
                    ₹{item.originalPrice}
                  </span>
                </p>

                <button
                  onClick={() => addToCart(item)}
                  className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-full flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* QUICK VIEW */}
      <QuickViewModal
        product={quickView}
        onClose={() => setQuickView(null)}
        addToCart={addToCart}
      />
    </section>
  );
}
