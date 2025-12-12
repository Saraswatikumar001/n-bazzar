import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export default function DealOfTheDay() {
  const [timeLeft, setTimeLeft] = useState(5 * 60 * 60); // 5 hours

  // Countdown Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (t) => {
    const h = Math.floor(t / 3600);
    const m = Math.floor((t % 3600) / 60);
    const s = t % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const deal = {
    id: 1,
    name: "Women's Festive Embroidered Kurti",
    img: "https://www.lakshita.com/cdn/shop/articles/Celebrate_in_style_banner.jpg?v=1724929145&utm_source=chatgpt.com",
    price: "₹599",
    oldPrice: "₹1199",
    rating: 4.6,
    discount: "50% OFF",
  };

  return (
    <div className="py-14 px-6 md:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center inline-block relative mx-auto
        after:content-[''] after:block after:w-24 after:h-1.5 after:bg-[#FF6634] after:mx-auto after:mt-2">
        Deal of the Day
      </h2>

      <p className="text-center text-gray-600 mb-8">
        Hurry! Limited time offer ends soon.
      </p>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 md:flex gap-8">

        {/* Product Image */}
        <div className="w-full md:w-1/2 h-72 overflow-hidden rounded-xl">
          <img
            src={deal.img}
            alt={deal.name}
            className="w-full h-full object-cover hover:scale-110 transition duration-500"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-800">{deal.name}</h3>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500 mt-2">
            <FaStar size={18} />
            <span className="text-gray-700">{deal.rating}</span>
          </div>

          {/* Discount Badge */}
          <span className="mt-3 px-4 py-1 bg-[#FF6634] text-white text-sm rounded-full shadow">
            {deal.discount}
          </span>

          {/* Prices */}
          <div className="mt-4 flex items-center gap-4">
            <p className="text-3xl font-bold text-[#FF6634]">{deal.price}</p>
            <p className="text-gray-500 line-through text-lg">{deal.oldPrice}</p>
          </div>

          {/* Countdown Timer */}
          <div className="mt-4 inline-block px-4 py-2 bg-black bg-opacity-70 text-white rounded-lg">
            ⏳ Ends in: <span className="font-bold">{formatTime(timeLeft)}</span>
          </div>

          {/* Add to Cart */}
          <button className="mt-6 px-6 py-3 bg-[#FF6634] text-white font-semibold rounded-xl shadow-md hover:bg-orange-600 transition">
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}
