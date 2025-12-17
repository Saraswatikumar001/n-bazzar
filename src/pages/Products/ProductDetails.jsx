import { useParams, useNavigate, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { products } from "../../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  // 👉 Related products (same category, excluding current)
  const relatedProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-blue-500 hover:text-blue mb-6"
      >
        ← Back to Products
      </button>

      {/* ================= PRODUCT DETAILS ================= */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="bg-gray-100 rounded-lg p-6 flex justify-center">
          <img
            src={product.img}
            alt={product.name}
            className="h-80 object-contain"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex text-orange-400 mt-2">
            {Array.from({ length: product.rating }).map((_, i) => (
              <FaStar key={i} size={14} />
            ))}
          </div>

          {/* Price */}
          <p className="text-2xl font-bold mt-4 text-gray-900">
            {product.price}
          </p>

          {/* Description */}
          <p className="mt-4 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button onClick={() => navigate ("/cart")}  
            className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90">
              Add to Cart
            </button>
            <button className="border px-6 py-3 rounded-lg hover:bg-gray-100">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* ================= RELATED PRODUCTS GRID ================= */}
      {relatedProducts.length > 0 && (
        <div className="mt-20">

          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">
              Related Products
            </h2>

            {/* View All */}
            <Link
              to="/products"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              View All →
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="group border rounded-xl p-4 bg-white relative
                     hover:shadow-xl transition overflow-hidden"
              >
                {/* Image + Zoom */}
                <Link to={`/product/${item.id}`}>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-40 w-full object-contain 
                           transform group-hover:scale-110 transition duration-300"
                    />
                  </div>
                </Link>
                {/* Hover Actions */}
                <div
                  className="absolute inset-0 flex items-center justify-center gap-3
                       bg-black/40 opacity-0 group-hover:opacity-100
                       transition"
                >
                  <button className="bg-white px-4 py-2 text-sm rounded hover:bg-black hover:text-white">
                    Add to Cart
                  </button>
                  <button className="bg-white px-3 py-2 rounded hover:bg-red-500 hover:text-white">
                    ♥
                  </button>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-sm font-medium line-clamp-2">
                    {item.name}
                  </h3>

                  {/* Ratings */}
                  <div className="flex items-center gap-1 text-orange-400 mt-1">
                    {Array.from({ length: item.rating || 4 }).map((_, i) => (
                      <FaStar key={i} size={12} />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">
                      ({item.reviews || 120})
                    </span>
                  </div>

                  {/* Price */}
                  <p className="font-semibold mt-1">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}


      {/* ================= PRODUCT DESCRIPTION (FLIPKART STYLE) ================= */}
      <div className="mt-24 border-t pt-10">
        <h2 className="text-2xl font-semibold mb-6">
          Product Description
        </h2>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            This product is crafted with premium quality materials to deliver
            exceptional performance and durability. Designed to meet modern
            lifestyle needs, it offers both style and reliability.
          </p>

          <p>
            Similar products are widely available and trusted across popular
            e-commerce platforms such as <strong>Flipkart</strong> and
            <strong> Meesho</strong>, making this item a reliable choice for
            online shoppers.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>High-quality materials and premium finish</li>
            <li>Perfect for daily and long-term use</li>
            <li>Easy to maintain and clean</li>
            <li>Excellent value for money</li>
          </ul>

          <p>
            Whether you are browsing top marketplaces or comparing prices,
            this product stands out for its quality, performance, and
            customer satisfaction.
          </p>
        </div>
      </div>

    </div>
  );
}
