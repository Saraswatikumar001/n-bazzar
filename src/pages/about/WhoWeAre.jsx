import mallImg from "../../assets/shopping-mall.jpeg";

const WhoWeAre = () => {
  return (
    <section className="bg-gray-50 py-28 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="relative">
          <img
            src={mallImg}
            alt="N-Bazar Shopping Experience"
            className="rounded-2xl shadow-lg object-cover w-full h-[420px]"
          />

          {/* subtle badge */}
          <div className="absolute top-6 left-6 bg-blue-600 text-white px-5 py-2 rounded-full text-sm">
            Trusted Marketplace
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <span className="inline-block mb-4 text-orange-500 font-semibold uppercase tracking-widest text-sm">
            Who We Are
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Smart Inventory Management <br /> Meets Online Shopping
          </h2>

          <p className="text-gray-600 leading-7 mb-8 max-w-xl">
            N-Bazar is a modern digital marketplace focused on simplifying
            inventory workflows while delivering a secure and smooth shopping
            experience for customers and businesses.
          </p>

          {/* Minimal feature list (cleaner than cards) */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-10 mb-10 text-gray-700 text-sm">
            {[
              "Real-time inventory tracking",
              "Easy product discovery",
              "Secure & reliable platform",
              "Fast order & delivery updates",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-orange-500 font-bold">•</span>
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="inline-flex items-center gap-2 bg-[#FF6634] hover:bg-orange-600 
                             text-black px-8 py-3 rounded-lg font-semibold transition">
            Learn More
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
