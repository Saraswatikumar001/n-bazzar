import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaStar, FaShoppingCart } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const banners = {
  All: {
    title: "New Arrivals",
    subtitle: "Latest trends across all categories",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    price: "From ₹999",
  },
  Women: {
    title: "Women Fashion",
    subtitle: "Elegant & trendy collections",
    img: "https://images.unsplash.com/photo-1520974735194-6c1a2f98a9e2",
    price: "From ₹799",
  },
  Kids: {
    title: "Kids Collection",
    subtitle: "Cute styles for little stars",
    img: "https://images.unsplash.com/photo-1542060748-10c28b62716f",
    price: "From ₹499",
  },
  Electronics: {
    title: "Electronics",
    subtitle: "Smart gadgets for modern life",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    price: "From ₹1,999",
  },
};

export default function NewArrivals() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");

  // 🔹 MOCK API CALL
  useEffect(() => {
    const fetchProducts = async () => {
      const data = [
        {
          id: 1,
          name: "Women Party Dress",
          category: "Women",
          price: "₹1,499",
          rating: 5,
          img: "https://images.unsplash.com/photo-1520974735194-6c1a2f98a9e2",
        },
        {
          id: 2,
          name: "Kids Casual Wear",
          category: "Kids",
          price: "₹899",
          rating: 4,
          img: "https://images.unsplash.com/photo-1542060748-10c28b62716f",
        },
        {
          id: 3,
          name: "Wireless Earbuds",
          category: "Electronics",
          price: "₹3,499",
          rating: 5,
          img: "https://images.unsplash.com/photo-1585386959984-a41552231693",
        },
        {
          id: 4,
          name: "Smart Watch",
          category: "Electronics",
          price: "₹4,999",
          rating: 4,
          img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        },
        {
          id: 5,
          name: "Kids Sneakers",
          category: "Kids",
          price: "₹1,599",
          rating: 5,
          img: "https://images.unsplash.com/photo-1519741497674-611481863552",
        },
      ];
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  const banner = banners[category];

  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      {/* CATEGORY FILTER */}
      <div className="flex gap-4 mb-10 flex-wrap">
        {["All", "Women", "Kids", "Electronics"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition
              ${
                category === cat
                  ? "bg-[#FF6634] text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT DYNAMIC BANNER */}
        <div className="relative rounded-3xl overflow-hidden p-10 text-white flex flex-col justify-end min-h-[420px]">
          <img
            src={banner.img}
            alt={banner.title}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />

          <div className="relative z-10">
            <h3 className="text-4xl font-extrabold mb-3">{banner.title}</h3>
            <p className="mb-6">{banner.subtitle}</p>
            <button className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-lg font-semibold">
              {banner.price} →
            </button>
          </div>
        </div>

        {/* RIGHT PRODUCT CAROUSEL */}
        <div className="lg:col-span-2">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {filteredProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="group bg-white border rounded-xl p-4 hover:shadow-lg transition relative">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />

                    {/* HOVER ADD TO CART */}
                    <button className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white gap-2 font-semibold">
                      <FaShoppingCart /> Add to Cart
                    </button>
                  </div>

                  {/* RATING */}
                  <div className="flex text-orange-400 mt-3">
                    {Array.from({ length: product.rating }).map((_, i) => (
                      <FaStar key={i} size={14} />
                    ))}
                  </div>

                  <h4 className="mt-2 font-semibold text-gray-900">
                    {product.name}
                  </h4>

                  <p className="font-bold text-gray-900 mt-1">
                    {product.price}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
