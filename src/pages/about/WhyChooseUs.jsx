import { motion } from "framer-motion";

const reasons = [
  {
    title: "Reliable Inventory System",
    desc: "Accurate real-time stock management to avoid over-selling or stock shortages.",
  },
  {
    title: "User-Friendly Experience",
    desc: "Simple navigation and smooth workflows for customers and vendors alike.",
  },
  {
    title: "Secure & Scalable Platform",
    desc: "Built with modern technologies ensuring data safety and future growth.",
  },
  {
    title: "Fast Order Processing",
    desc: "Optimized order handling and delivery tracking for better efficiency.",
  },
  {
    title: "Responsive & Mobile Ready",
    desc: "Works seamlessly across mobile, tablet, and desktop devices.",
  },
  {
    title: "Customer-Centric Approach",
    desc: "Focused on trust, transparency, and long-term customer satisfaction.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <span className="text-[#FF6634] font-semibold uppercase tracking-widest text-sm">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            What Makes N-Bazar Different
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-7">
            We combine smart inventory solutions with a seamless shopping
            experience to deliver reliability, performance, and trust.
          </p>
        </div>

        {/* REASONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-200
                         dark:border-gray-800 shadow-sm hover:shadow-xl transition"
            >
              {/* Accent line */}
              <div className="w-10 h-1 bg-[#FF6634] mb-5 rounded-full"></div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-7 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
