import { motion } from "framer-motion";

import img1 from "../../assets/vision1.avif";
import img2 from "../../assets/vision2.avif";
import img3 from "../../assets/vision3.avif";
import img4 from "../../assets/vision4.avif";

const sections = [
  {
    title: "Our Mission",
    text: "Our mission is to simplify inventory management while delivering a secure, smooth, and scalable online shopping experience for businesses and customers.",
    img: img1,
  },
  {
    title: "Our Vision",
    text: "We envision becoming a trusted digital marketplace that seamlessly connects inventory intelligence with modern e-commerce solutions.",
    img: img2,
  },
  {
    title: "Customer First",
    text: "We focus on user-friendly design, reliability, and performance to ensure a delightful experience for every customer.",
    img: img3,
  },
  {
    title: "Technology Driven",
    text: "Powered by modern technologies, N-Bazar is built to scale, adapt, and grow with your business needs.",
    img: img4,
  },
];

const MissionVision = () => {
  return (
    <section className="bg-white dark:bg-gray-950 py-28 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT – STICKY IMAGE */}
        <div className="relative">
          <div className="sticky top-28">
            <motion.img
              src={img1}
              alt="Mission Vision"
              className="rounded-3xl shadow-xl object-cover w-full h-[420px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>

        {/* RIGHT – SCROLLING CONTENT */}
        <div className="space-y-28">
          {sections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#FF6634] font-semibold uppercase tracking-widest text-sm">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-4 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-7 max-w-xl">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
