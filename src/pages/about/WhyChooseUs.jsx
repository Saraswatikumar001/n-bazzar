import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiShield,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

import whyImg from "../../assets/vision5.avif"; // add a real image here

const reasons = [
  {
    title: "Reliable Inventory System",
    desc: "Real-time stock tracking to prevent shortages and over-selling.",
    icon: FiCheckCircle,
  },
  {
    title: "Secure & Trusted Platform",
    desc: "Strong security practices to protect data and transactions.",
    icon: FiShield,
  },
  {
    title: "Scalable for Growth",
    desc: "Built with modern architecture to grow with your business.",
    icon: FiTrendingUp,
  },
  {
    title: "Customer-Centric Approach",
    desc: "Focused on transparency, trust, and long-term satisfaction.",
    icon: FiUsers,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-28 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={whyImg}
            alt="Why choose N-Bazar"
            className="rounded-3xl shadow-xl object-cover w-full h-[420px]"
          />

          {/* Accent badge */}
          <div className="absolute top-6 left-6 bg-[#FF6634] text-white
                          px-5 py-2 rounded-full text-sm font-semibold shadow">
            Trusted Platform
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div>
          <span className="text-[#FF6634] font-semibold uppercase tracking-widest text-sm">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            What Makes N-Bazar <br /> The Right Choice
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-7 mb-10 max-w-xl">
            N-Bazar combines smart inventory solutions with a seamless online
            shopping experience, helping businesses operate efficiently
            and customers shop with confidence.
          </p>

          {/* FEATURES LIST */}
          <div className="space-y-6">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-11 h-11 flex items-center justify-center
                                rounded-xl bg-orange-100 dark:bg-orange-500/10
                                text-[#FF6634]">
                  <item.icon className="text-xl" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-6">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
