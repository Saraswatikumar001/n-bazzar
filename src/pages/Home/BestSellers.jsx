import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

export default function BestSellers() {
  const bestSellers = [
    {
      id: 1,
      name: "Women's Embroidered Kurti",
      img: "https://voilastudio.in/voilastudio_myntra/images/female_ecomm/eCommerce_photography_womenmater3pcs_%2852%29.webp?utm_source=chatgpt.com",
      price: "₹799",
      rating: 4.7,
    },
    {
      id: 2,
      name: "Men’s Stylish Jacket",
      img: "https://www.travelandleisure.com/thmb/Ng-6v__CRNko0uixklLWhx5aDo0%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/tal-l-l-bean-mens-baxter-state-parka-joseph-raccuglia-21-1-7441b77b3e1e448c933c6c2b58144278.jpeg?utm_source=chatgpt.com",
      price: "₹1499",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Kids Floral Dress",
      img: "https://bentleyandlace.com/cdn/shop/files/Broadway_Sisters_Dream_Dress-003.jpg?v=1744313031&width=2732&utm_source=chatgpt.com",
      price: "₹699",
      rating: 4.5,
    },
    {
      id: 4,
      name: "Sports Running Shoes",
      img: "https://www.hollywoodreporter.com/wp-content/uploads/2024/08/On-Sneakers-Are-a-Celeb-Staple-MAIN.jpg?w=1296&utm_source=chatgpt.com",
      price: "₹999",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Wireless Earbuds",
      img: "https://www.weactionvideo.com/web/image/product.template/19/image_1024?unique=fc68f7a&utm_source=chatgpt.com",
      price: "₹1199",
      rating: 4.3,
    },
    {
      id: 6,
      name: "Home Decor Vase Set",
      img: "https://m.media-amazon.com/images/I/81d8G27QkFL._AC_UF894%2C1000_QL80_.jpg?utm_source=chatgpt.com",
      price: "₹499",
      rating: 4.4,
    },
  ];

  return (
    <div className="py-14 px-6 md:px-16 bg-white">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center relative inline-block mx-auto
        after:content-[''] after:block after:w-24 after:h-1.5 after:bg-[#FF6634] after:mx-auto after:mt-2">
        Best Sellers
      </h2>

      {/* Carousel */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-10"
      >
        {bestSellers.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 cursor-pointer hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="w-full h-48 overflow-hidden rounded-lg">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              {/* Product Name */}
              <h3 className="mt-3 text-lg font-semibold text-gray-800">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-500 mt-1">
                <FaStar size={16} />
                <span className="text-gray-700">{product.rating}</span>
              </div>

              {/* Price + Button */}
              <div className="mt-3 flex items-center justify-between">
                <p className="text-xl font-bold text-[#FF6634]">{product.price}</p>
                <button className="px-4 py-2 bg-[#FF6634] text-white text-sm rounded-lg shadow-md hover:bg-orange-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
