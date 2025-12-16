import { FaStar, FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Apple iPhone 14 128GB White",
    price: "$899.00",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-iQH2wS4Mk8mTY2yz3PueOOw96JrPO5UMZQ&s",
    rating: 5,
  },
  {
    id: 2,
    name: "Headphones Apple AirPods 2 Pro",
    price: "$209.99",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfgGOqWWb6x7wV8I8N9MD1jx-dWc9OrKh8w&s",
    rating: 5,
  },
  {
    id: 3,
    name: "VR801 Virtual Reality Glasses",
    price: "$300.00",
    oldPrice: "$450.00",
    sale: true,
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
    rating: 5,
  },
  {
    id: 4,
    name: "Smart Watch Series 7, White",
    price: "$400.00",
    oldPrice: "$480.00",
    sale: true,
    img: "https://images.unsplash.com/photo-1544117519-31a4b719223d",
    rating: 5,
  },
  {
    id: 5,
    name: "Power Bank PBS 10000 mAh Black",
    price: "$400.00",
    oldPrice: "$499.99",
    sale: true,
    img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0",
    rating: 5,
  },
  {
    id: 6,
    name: "Laptop Apple MacBook Pro 13 M2",
    price: "$1,200.00",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    rating: 5,
  },
  {
    id: 7,
    name: "Wireless Bluetooth Headphones Sony",
    price: "$357.00",
    img: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    rating: 5,
  },
  {
    id: 8,
    name: "Tablet Apple iPad Air M1",
    price: "$899.00 – $1,200.00",
    img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
    rating: 5,
  },
];

export default function TrendingProducts() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-semibold text-gray-900">
          Trending products
        </h2>
        <button className="text-sm text-gray-500 hover:text-black">
          View all →
        </button>
      </div>

      <div className="border-b mb-10"></div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {products.map((product) => (
          <div key={product.id} className="relative group">
            
            {/* Sale badge */}
            {product.sale && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-lg px-2 py-0.5 rounded-full">
                Sale
              </span>
            )}

            {/* Image */}
            <div className="flex justify-center mb-4">
              <img
                src={product.img}
                alt={product.name}
                className="h-40 object-contain"
              />
            </div>

            {/* Rating */}
            <div className="flex text-orange-400 mb-1">
              {Array.from({ length: product.rating }).map((_, i) => (
                <FaStar key={i} size={12} />
              ))}
            </div>

            {/* Name */}
            <h3 className="text-sm text-gray-900 leading-snug">
              {product.name}
            </h3>

            {/* Price */}
            <div className="flex items-center gap-2 mt-1">
              <p className="font-semibold text-gray-900">
                {product.price}
              </p>
              {product.oldPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {product.oldPrice}
                </span>
              )}
            </div>

            {/* Cart Button */}
            <button
              className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100
              transition bg-gray-100 hover:bg-black hover:text-white p-2 rounded"
            >
              <FaShoppingCart size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
