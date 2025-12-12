import React from "react";

export default function ExclusiveBrands() {
    const brands = [
        { name: "ASOS", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Walmart_logo_%282008%29.svg/2560px-Walmart_logo_%282008%29.svg.png?utm_source=chatgpt.com" },
        { name: "Etsy", img: "https://download.logo.wine/logo/ASOS_%28retailer%29/ASOS_%28retailer%29-Logo.wine.png?utm_source=chatgpt.com" },
        { name: "Walmart", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Etsy_logo.svg/2560px-Etsy_logo.svg.png?utm_source=chatgpt.com" },
        { name: "Wish", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Wish_logo.svg/2560px-Wish_logo.svg.png?utm_source=chatgpt.com" },
        { name: "Ikea", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png?utm_source=chatgpt.com" },
        { name: "Amazon", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/1024px-Ikea_logo.svg.png?utm_source=chatgpt.com" },
        { name: "eBay", img: "https://upload.wikimedia.org/wikipedia/commons/4/48/EBay_logo.png?utm_source=chatgpt.com" },
        { name: "BestBuy", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Best_Buy_Logo.svg/1280px-Best_Buy_Logo.svg.png?utm_source=chatgpt.com" },
        { name: "Target", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Target_logo.svg/1541px-Target_logo.svg.png?utm_source=chatgpt.com" },
        { name: "DeviantArt", img: "https://images.vexels.com/media/users/3/137250/isolated/preview/faeefae02621730a25cb072755c6483a-deviantart-icon-logo.png?utm_source=chatgpt.com" },
        { name: "Velasca", img: "https://popmenucloud.com/edwtsnrl/6fbf9d27-61bf-4f4a-b7c8-50653bd88f7c.png?utm_source=chatgpt.com" },
        { name: "DisplayRabbit", img: "https://uploads-ssl.webflow.com/5d8d43e58f129fe59ee3fd23/6307d59a21bff135e76db291_tentreeWordmarkLogo_ForestGreen__RGB.svg?utm_source=chatgpt.com" },
        { name: "Meow Meow Tweet", img: "https://artisaire.com/cdn/shop/files/ARTISAIRE_horizontal-Logo-black-01-cropped.png?v=1630517951&utm_source=chatgpt.com" },
        { name: "Naturisimo", img: "https://1000logos.net/wp-content/uploads/2023/09/Poshmark-Logo.jpg?utm_source=chatgpt.com" },
        { name: "iHerb", img: "https://1000logos.net/wp-content/uploads/2021/05/SUGAR-Cosmetics-logo.png?utm_source=chatgpt.com" },
        { name: "Kotn", img: "https://cdn.dribbble.com/userupload/42434746/file/original-833f0bc869edc7a08a34c31bd78b8100.jpg?utm_source=chatgpt.com" },
        { name: "PinkLily", img: "https://meowmeowtweet.com/cdn/shop/files/MMT_Logos_Primary_Logo_e0d772f6-be9c-4238-ae00-ed2bf1a2f03e.png?v=1655960410&utm_source=chatgpt.com" },
        { name: "Then I Met You", img: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg?utm_source=chatgpt.com" },
        { name: "Poshmark", img: "https://customers.seomanager.com/knowledgegraph/logo/kotn-ss15_myshopify_com_logo.jpg?utm_source=chatgpt.com" },
        { name: "Sugar", img: "https://www.citypng.com/public/uploads/preview/black-nike-logo-transparent-background-701751694777156f3ewilq1js.png?utm_source=chatgpt.com" },
        { name: "BLK & Bold", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Levi%27s_logo.svg/2560px-Levi%27s_logo.svg.png?utm_source=chatgpt.com" },
        { name: "Suta", img: "https://www.pngall.com/wp-content/uploads/15/New-Balance-Logo-PNG-Cutout.png?utm_source=chatgpt.com" },
        { name: "Artisaire", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png?utm_source=chatgpt.com" },
        { name: "Tentree", img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg?utm_source=chatgpt.com" },
    ];

    return (
        <div className="py-14 px-6 md:px-16 bg-white">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center relative inline-block mx-auto
        after:content-[''] after:block after:w-24 after:h-1.5 after:bg-[#FF6634] after:mx-auto after:mt-2">
                Our Exclusive Brands
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-center">
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer hover:-translate-y-1"
                    >
                        <img
                            src={brand.img}
                            alt={brand.name}
                            className="w-28 h-12 object-contain opacity-80 hover:opacity-100 transition"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
