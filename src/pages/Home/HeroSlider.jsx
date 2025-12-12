import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  // Countdown Timer Logic (3 hours)
  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60);

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

  const slides = [
    {
      id: 1,
      img: "https://www.bollywoodhungama.com/wp-content/uploads/2023/10/Shraddha-Kapoor-radiates-elegance-in-pastel-lehenga-on-Dussehra-1.jpg",
      title: "Shine Through This Festive Season",
      subtitleList: [
        "50% OFF",
        "Mega Festive Deals",
        "Limited Time Offer",
      ],
      category: ["Women", "Ethnic Wear", "Festival Edit"],
    },
    {
      id: 2,
      img: "https://cdn.prod.website-files.com/605826c62e8de87de744596e/676384c5f1eae7a1e79ae861_676380db23e86f70bf858c21_screenshot-2024-12-18-at-72506-pm-6762d4985739c.webp?utm_source=chatgpt.com",
      title: "Big Savings On Your Favourite Products",
      subtitleList: ["FLASH SALE", "Buy 1 Get 1", "Extra ₹200 OFF"],
      category: ["Men", "Daily Wear", "Winter Sale"],
    },
    {
      id: 3,
      img: "https://assets.vogue.in/photos/66752833e2ea81f7cd1ebb03/3%3A4/w_2560%2Cc_limit/Snapinsta.app_448400448_852581560226547_7478098590589644407_n_1024.jpg",
      title: "Celebrating 200+ Stores Across India",
      subtitleList: ["New Collection", "Premium Styles", "Trending Now"],
      category: ["Women", "Western Wear", "New Arrivals"],
    },
  ];

  return (
    <div className="w-full relative">

      {/* Sparkles Effect (CSS only) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-30">
        <div className="animate-sparkle absolute top-10 left-20 w-3 h-3 bg-white rounded-full opacity-80"></div>
        <div className="animate-sparkle2 absolute top-1/2 left-1/3 w-2 h-2 bg-white rounded-full opacity-70"></div>
        <div className="animate-sparkle3 absolute bottom-10 right-20 w-4 h-4 bg-white rounded-full opacity-60"></div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{ delay: 4000 }}
        effect="fade"
        loop
        className="h-[80vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex items-center">

              {/* Background Image */}
              <img
                src={slide.img}
                className="w-full h-full object-cover brightness-[0.50]"
              />

              {/* LEFT TEXT */}
              <div className="absolute left-12 w-1/2 z-20">

                {/* Gradient Title */}
                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
                  {slide.title}
                </h1>

                {/* Sliding Offers */}
                <div className="mt-4 h-10 overflow-hidden text-2xl font-semibold text-white">
                  <div className="animate-slide-up">
                    {slide.subtitleList.map((s, i) => (
                      <p key={i}>{s}</p>
                    ))}
                  </div>
                </div>

                {/* Countdown Badge */}
                <div className="mt-4 inline-block px-4 py-2 bg-black bg-opacity-60 text-white rounded-lg shadow-lg">
                  ⏳ Ends in: <span className="font-bold">{formatTime(timeLeft)}</span>
                </div>

                {/* Category Buttons */}
                <div className="flex gap-3 mt-6">
                  {slide.category.map((cat, i) => (
                    <button
                      key={i}
                      className="px-4 py-2 bg-white text-gray-800 rounded-full shadow hover:bg-gray-100 transition"
                    >
                      {cat}
                    </button>
                  ))}
                </div>

              </div>

              {/* RIGHT IMAGE (Zoom-in Effect) */}
              <div className="absolute right-10 bottom-0 w-1/2 h-full flex items-end">
                <img
                  src={slide.img}
                  className="h-full object-contain scale-105 animate-zoom-slow drop-shadow-2xl"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows */}
      <button className="custom-prev absolute left-6 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 z-40">
        ❮
      </button>
      <button className="custom-next absolute right-6 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 z-40">
        ❯
      </button>
    </div>
  );
}
