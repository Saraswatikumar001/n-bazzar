import { motion } from "framer-motion";
import {
    FiBox,
    FiShoppingCart,
    FiShield,
    FiTruck,
    FiMonitor,
    FiTrendingUp,
} from "react-icons/fi";

const features = [
    {
        title: "Smart Inventory Management",
        desc: "Monitor stock levels in real time and manage products efficiently with accurate data.",
        icon: FiBox,
    },
    {
        title: "Seamless Online Shopping",
        desc: "Enjoy a smooth browsing and checkout experience designed for all users.",
        icon: FiShoppingCart,
    },
    {
        title: "Secure Platform",
        desc: "Built with security-first practices to protect user data and transactions.",
        icon: FiShield,
    },
    {
        title: "Order & Delivery Tracking",
        desc: "Track orders and deliveries in real time with full transparency.",
        icon: FiTruck,
    },
    {
        title: "Responsive Dashboard",
        desc: "Access N-Bazar seamlessly across mobile, tablet, and desktop devices.",
        icon: FiMonitor,
    },
    {
        title: "Scalable Architecture",
        desc: "Designed to grow with your business using modern, scalable technologies.",
        icon: FiTrendingUp,
    },
];

const WhatWeOffer = () => {
    return (
        <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 px-6">
            {/* Decorative blur */}
            <div className="absolute -top-32 right-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full" />
            <div className="relative max-w-7xl mx-auto">
                {/* HEADER */}
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <span className="text-orange-500 font-semibold uppercase tracking-widest text-sm">
                        Our Services
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4">
                        What We Offer
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-6 leading-7">
                        N-Bazar provides smart inventory solutions combined with a seamless
                        and secure online shopping experience.
                    </p>
                </div>

                {/* FEATURE GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group bg-white dark:bg-gray-900 p-10 rounded-3xl
                         border border-gray-200 dark:border-gray-800
                         shadow-md hover:shadow-2xl transition-all
                         hover:-translate-y-2"
                        >
                            {/* ICON */}
                            <div className="w-14 h-14 flex items-center justify-center rounded-xl
                              bg-orange-100 dark:bg-orange-500/10
                              text-orange-500 mb-6">
                                <item.icon className="text-2xl" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 leading-7 text-sm">
                                {item.desc}
                            </p>

                            {/* Hover underline */}
                            <div className="mt-6 h-[2px] w-0 bg-orange-500
                              group-hover:w-16 transition-all"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;
