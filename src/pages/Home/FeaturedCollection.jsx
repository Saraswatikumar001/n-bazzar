import React from "react";

export default function FeaturedCollection() {
  const collections = [
    {
      id: 1,
      title: "Women's Premium Collection",
      img: "https://samyakkclothing.files.wordpress.com/2023/03/main-banner-lehenga01.jpg?utm_source=chatgpt.com",
      size: "large",
    },
    {
      id: 2,
      title: "Men’s Stylish Winter Wear",
      img: "https://image-marketing.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/10/01165535/Kurta-Pajama-Set-Banner-Imaga.png?utm_source=chatgpt.com",
      size: "small",
    },
    {
      id: 3,
      title: "Kids Trending Fashion",
      img: "https://templates.simplified.co/thumb/1ab2e0bd-3709-4fca-bd6e-1f32de87c771.jpg?utm_source=chatgpt.com",
      size: "small",
    },
  ];

  return (
    <div className="py-14 px-6 md:px-16 bg-white">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center relative inline-block mx-auto
        after:content-[''] after:block after:w-24 after:h-1.5 after:bg-[#FF6634] after:mx-auto after:mt-2">
        Featured Collections
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT SIDE — LARGE BANNER */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-[420px] group cursor-pointer">
          <img
            src={collections[0].img}
            alt={collections[0].title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition"></div>

          <h3 className="absolute bottom-5 left-5 text-white text-3xl font-bold drop-shadow-xl">
            {collections[0].title}
          </h3>
        </div>

        {/* RIGHT SIDE — TWO SMALL BANNERS STACKED */}
        <div className="flex flex-col gap-8">
          {collections.slice(1).map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden shadow-md h-[200px] group cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition"></div>

              <h3 className="absolute bottom-4 left-5 text-white text-2xl font-semibold drop-shadow-md">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
