import React from "react";

export default function TrendingOffers() {
  const offers = [
    {
      id: 1,
      title: "Flat 50% OFF – Women Fashion",
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/christmas-sale-banner-50%25-off-design-template-2394b1e804b03eaef5a33c23c8b82916_screen.jpg?ts=1700741049&utm_source=chatgpt.com",
    },
    {
      id: 2,
      title: "Mega Sale – Electronics Upto 40% OFF",
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/electronic-sale-poster-design-template-af88186bc0dbab2557ee78709233e705_screen.jpg?ts=1692679379&utm_source=chatgpt.com",
    },
    {
      id: 3,
      title: "Grocery Deals – Save Upto 60%",
      img: "https://i.ytimg.com/vi/A3vhvEqZaYM/hq720.jpg?rs=AOn4CLDUGutZrBe0gMLArKXgyGk5rHHx9g&sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&utm_source=chatgpt.com",
    },
  ];

  return (
    <div className="py-12 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Trending Offers ✨
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer group"
          >
            <img
              src={offer.img}
              alt={offer.title}
              className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
            />
            <p className="text-lg font-semibold text-gray-700 p-4 group-hover:text-pink-600">
              {offer.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
