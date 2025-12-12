import { FaStar } from "react-icons/fa";

export default function CustomerTestimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Aditi Sharma",
            image: "https://images.peopleimages.com/picture/202303/2803286-call-center-portrait-and-happy-woman-in-customer-service-for-telemarketing-while-isolated-on-a-transparent-png-background.-customer-support-help-desk-and-smiling-female-operator-face-box_175_175.jpg?utm_source=chatgpt.com",
            review:
                "Amazing shopping experience! The delivery was quick and the product quality is top-notch. I always shop from N-Baazar now.",
            rating: 5,
        },
        {
            id: 2,
            name: "Sneha Kapoor",
            image: "https://png.pngtree.com/thumb_back/fw800/background/20250323/pngtree-profile-of-a-happy-woman-using-a-mobile-phone-photo-photo-image_66505192.webp?utm_source=chatgpt.com",
            review:
                "Great deals and discounts compared to other sites. The return process was very smooth. Highly recommended!",
            rating: 4,
        },
        {
            id: 3,
            name: "Rahul Verma",
            image: "https://png.pngtree.com/png-clipart/20250111/original/pngtree-young-man-smiling-with-confidence-in-casual-attire-on-a-white-png-image_19050479.png?utm_source=chatgpt.com",
            review:
                "Loved the customer support! They helped me with size exchange immediately. Excellent service overall.",
            rating: 5,
        },
    ];

    return (
        <div className="py-14 px-6 md:px-16 bg-white">
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center relative inline-block mx-auto
        after:content-[''] after:block after:w-24 after:h-1.5 after:bg-[#FF6634] after:mx-auto after:mt-2">
                Customer Testimonials
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {testimonials.map((t) => (
                    <div
                        key={t.id}
                        className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                    >
                        {/* Avatar */}
                        <div className="flex justify-center mb-4">
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-20 h-20 rounded-full object-cover shadow-md"
                            />
                        </div>

                        {/* Name */}
                        <h3 className="text-lg font-bold text-gray-800 text-center mb-2">{t.name}</h3>

                        {/* Stars */}
                        <div className="flex justify-center gap-1 text-yellow-500 mb-3">
                            {[...Array(t.rating)].map((_, i) => (
                                <FaStar key={i} size={18} />
                            ))}
                        </div>

                        {/* Review */}
                        <p className="text-gray-600 text-center text-sm leading-relaxed">
                            “{t.review}”
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
