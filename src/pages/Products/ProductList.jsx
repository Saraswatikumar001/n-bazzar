export default function ProductList({ products }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
        >
          <img
            src={product.img}
            alt={product.name}
            className="h-48 w-full object-cover rounded-lg"
          />

          <h3 className="mt-3 font-semibold text-gray-900">
            {product.name}
          </h3>

          <p className="text-gray-600 mt-1">{product.price}</p>

          <button
            onClick={() => handleAddToCart(product)}
            className="mt-4 w-full bg-[#FF6634] hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
