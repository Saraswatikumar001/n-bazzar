import React from "react";

export default function Categories() {
    const categories = [
        {
            id: 1,
            title: "Women Fashion",
            img: "https://pic.pikbest.com/18/08/96/97e888piC5Sk.jpg%21bw700?utm_source=chatgpt.com",
        },
        {
            id: 2,
            title: "Men Fashion",
            img: "https://indiater.com/wp-content/uploads/2019/05/1.jpg?utm_source=chatgpt.com",
        },
        {
            id: 3,
            title: "Kids Wear",
            img: "https://img.pikbest.com/origin/05/91/85/952pIkbEsTAYw.jpeg%21w700wp?utm_source=chatgpt.com",
        },
        {
            id: 4,
            title: "Electronics",
            img: "https://cdn.dribbble.com/userupload/8340917/file/original-f50a4ba99cb591623f4204c21f6f9f95.jpg?resize=400x300&utm_source=chatgpt.comhttps://img.pikbest.com/templates/20240731/earbuds-social-media-product-post-template_10690544.jpg%21w700wp?utm_source=chatgpt.com",
        },
        {
            id: 5,
            title: "Home & Kitchen",
            img: "https://img.pikbest.com/templates/20241029/modern-home-appliances-sale-instagram-post-banner-template_11023500.jpg%21w700wp?utm_source=chatgpt.com",
        },
        {
            id: 6,
            title: "Grocery",
            img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/d861b4166212737.6414408e44cdb.png?utm_source=chatgpt.com",
        },
    ];

    return (
        <div className="py-12 px-6 md:px-16 bg-gray-50">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 inline-block relative
                         after:content-[''] after:block after:w-20 after:h-1.5 after:bg-[#FF6634] after:mx-auto after:mt-2">
                    Shop by Categories
                </h2>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="
          bg-white rounded-2xl shadow-sm 
          hover:shadow-lg 
          transition-all duration-300 
          cursor-pointer 
          overflow-hidden 
          group 
          hover:-translate-y-2
        "
                    >
                        {/* Image */}
                        <div className="w-full h-36 md:h-44 lg:h-48 overflow-hidden rounded-t-2xl">
                            <img
                                src={cat.img}
                                alt={cat.title}
                                className="
              w-full h-full object-cover 
              transition-all duration-500 
              group-hover:scale-105 
              group-hover:brightness-105
            "
                            />
                        </div>

                        {/* Text */}
                        <div className="py-4 text-center">
                            <p
                                className="
              text-lg font-semibold text-gray-700 
              group-hover:text-pink-600 
              transition-all duration-300
            "
                            >
                                {cat.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
