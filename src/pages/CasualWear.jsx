import { useState } from "react";
import { ShoppingCart, Eye, Heart } from "lucide-react";
import RatingStars from "../components/RatingStars";
import ProductModal from "../components/ProductModal";
import { useCart } from "../context/CartContext";

/* 🔹 Banner Image (you can change later) */
const BANNER_IMG =
  "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47";

const PRODUCTS = [
  {
    id: 1,
    name: "Casual Cotton T-Shirt",
    price: 899,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Blue"],
    rating: 4,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 1,
    name: "Casual Cotton T-Shirt",
    price: 899,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Blue"],
    rating: 4,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  },
  {
    id: 1,
    name: "Casual Cotton T-Shirt",
    price: 899,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Blue"],
    rating: 4,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
  {
    id: 1,
    name: "Casual Cotton T-Shirt",
    price: 899,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Blue"],
    rating: 4,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 1,
    name: "Casual Cotton T-Shirt",
    price: 899,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Blue"],
    rating: 4,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  },
  {
    id: 1,
    name: "Casual Cotton T-Shirt",
    price: 899,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Blue"],
    rating: 4,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
];

export default function CasualWear() {
  const { addToCart } = useCart();
  const [modal, setModal] = useState(null);

  return (
    <section className="bg-gray-50">

      {/* 🔥 BANNER */}
      <div
        className="h-[320px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${BANNER_IMG})` }}
      >
        <div className="bg-black/60 w-full h-full flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Casual Wear Collection
            </h1>
            <p className="text-lg opacity-90">
              Comfortable • Stylish • Everyday Fashion
            </p>
          </div>
        </div>
      </div>

      {/* 🛍️ PRODUCTS */}
      <div className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {PRODUCTS.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden group"
          >
            {/* IMAGE */}
            <div className="relative h-[320px] overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* BADGE */}
              <span className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {p.badge}
              </span>

              {/* WISHLIST */}
              <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <Heart size={16} />
              </button>

              {/* HOVER ACTIONS */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition">
                <button
                  onClick={() => setModal(p)}
                  className="bg-white p-3 rounded-full hover:bg-gray-200"
                >
                  <Eye size={18} />
                </button>
                <button
                  onClick={() => addToCart(p)}
                  className="bg-white p-3 rounded-full hover:bg-gray-200"
                >
                  <ShoppingCart size={18} />
                </button>
              </div>
            </div>

            {/* DETAILS */}
            <div className="p-6 space-y-2">
              <h3 className="font-semibold text-lg">
                {p.name}
              </h3>

              <div className="flex items-center gap-2">
                <RatingStars rating={p.rating} />
                <span className="text-sm text-gray-500">
                  ({p.reviews})
                </span>
              </div>

              <p className="text-xl font-bold text-indigo-600">
                ₹{p.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <ProductModal product={modal} onClose={() => setModal(null)} />
    </section>
  );
}
