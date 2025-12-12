import { FiSearch } from "react-icons/fi";
import { useState } from "react";
export default function Hero() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Category buttons
  const categories = [
    "Women Wear",
    "Shoes",
    "Accessories",
    "Kids Wear",
    "Jackets",
  ];

  // Category-wise images (6 per category)
  const categoryImages = {
    "Women Wear": [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      "https://images.unsplash.com/photo-1519741497674-611481863552",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "https://images.unsplash.com/photo-1520975918319-247230bcb5f1",
      "https://images.unsplash.com/photo-1521714161819-15534968fc5c",
      "https://images.unsplash.com/photo-1618354691345-2e50a33b0810",
    ],

    Shoes: [
      "https://images.unsplash.com/photo-1584735174914-6b7a0bf67a66",
      "https://images.unsplash.com/photo-1595950653132-82f6d0a1a9c0",
      "https://images.unsplash.com/photo-1528701800489-20be3c2a73c7",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      "https://images.unsplash.com/photo-1584735174914-6b7a0bf67a66",
    ],

    Accessories: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "https://images.unsplash.com/photo-1520975918319-247230bcb5f1",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    ],

    "Kids Wear": [
      "https://images.unsplash.com/photo-1506466010722-395aa2bef877",
      "https://images.unsplash.com/photo-1507114845806-0347f6150324",
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8",
      "https://images.unsplash.com/photo-1527010154944-f2241763d806",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    ],

    Jackets: [
      "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab",
      "https://images.unsplash.com/photo-1618354691345-2e50a33b0810",
      "https://images.unsplash.com/photo-1521714161819-15534968fc5c",
      "https://images.unsplash.com/photo-1520975918319-247230bcb5f1",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    ],
  };

  return (
    <>
      {/* HERO BANNER */}
      <section
        className="w-full max-w-5xl mx-auto mt-10 rounded-3xl overflow-hidden relative"
        style={{
          backgroundImage:
            "url('https://marketplace.canva.com/EAFoEJMTGiI/1/0/1600w/canva-beige-aesthetic-new-arrival-fashion-banner-landscape-cNjAcBMeF9s.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white py-16 px-6">
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-semibold mb-6">
            Change your wardrobe. Find exciting goods.
          </h1>

          {/* Search Bar */}
          <div className="w-full max-w-xl mx-auto bg-white rounded-full flex items-center px-4 py-2 shadow-lg">
            <FiSearch className="text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full px-3 py-2 outline-none text-gray-700"
            />
            <button className="bg-[#3DC0A8] text-white px-5 py-2 rounded-full font-medium hover:bg-[#33a991] transition">
              Go
            </button>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mt-6 text-sm">
            {categories.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(item)}
                className={`px-4 py-1 rounded-full shadow-sm font-medium transition 
                ${
                  selectedCategory === item
                    ? "bg-white text-black"
                    : "bg-white/80 text-gray-800 hover:bg-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CARD SECTION */}
      {selectedCategory && (
        <div className="max-w-5xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            {selectedCategory}
          </h2>

          <p className="text-gray-600 mb-4">
            Explore the best {selectedCategory.toLowerCase()} products curated
            for you.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {categoryImages[selectedCategory].map((img, idx) => (
              <div
                key={idx}
                className="p-4 border rounded-xl shadow hover:shadow-2xl bg-white 
                transition-transform transform hover:-translate-y-2 duration-300"
              >
                {/* Product Image */}
                <img
                  src={img}
                  alt="product"
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />

                {/* Title */}
                <h3 className="font-semibold text-gray-800">
                  {selectedCategory} Product {idx + 1}
                </h3>

                {/* Price */}
                <p className="text-lg font-bold text-[#3DC0A8] mt-1">
                  $ {(idx + 1) * 10}.00
                </p>

                {/* Rating */}
                <div className="flex text-yellow-400 text-xl mt-1">★★★★☆</div>

                {/* Add to Cart */}
                <button
                  className="mt-3 w-full bg-[#3DC0A8] hover:bg-[#33a991] 
                  text-white py-2 rounded-lg font-medium transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}

          </div>
        </div>
      )}
    </>
  );
}
