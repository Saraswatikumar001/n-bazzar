import productImg from "../../assets/product.jpg";
export default function ProductsHero() {
    return (
        <section className="bg-[#f6f4f2] py-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Discover Your <br /> Style Today!
                    </h1>
                    <p className="text-gray-600 mt-5 max-w-md">
                        Explore our curated collection of premium fashion products designed
                        to match your lifestyle. Quality, comfort, and trend — all in one place.
                    </p>
                    <button className="mt-8 bg-[#c89b3c] hover:bg-[#b88b2e] text-white px-8 py-3 rounded-full font-semibold transition">
                        SHOP NOW
                    </button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative">
                    <img
                        src={productImg}
                        alt="Fashion Model"
                        className="w-full h-[420px] object-cover rounded-3xl"
                    />
                </div>
            </div>
        </section>
    );
}
