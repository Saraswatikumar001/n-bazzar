export default function Footer() {
    return (
        <footer className="bg-black text-gray-400">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-14">

                {/* Brand Section */}
                <div>
                    <h1 className="text-4xl tracking-[0.6em] text-white font-serif mb-6">
                        N-BAZAR
                    </h1>

                    <p className="text-sm leading-6 max-w-sm">
                        IQELA blends timeless elegance with effortless style perfect for
                        beach days, brunches, and celebrations. Discover chic, comfortable
                        fashion crafted for the modern woman.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-6">
                        <SocialIcon>
                            <i className="fab fa-facebook-f" />
                        </SocialIcon>
                        <SocialIcon>
                            <i className="fab fa-instagram" />
                        </SocialIcon>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="md:pl-20">
                    <h3 className="text-white text-lg mb-6">Quick Links</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="hover:text-white cursor-pointer">Casual Wear</li>
                        <li className="hover:text-white cursor-pointer">Office Wear</li>
                        <li className="hover:text-white cursor-pointer">Party Wear</li>
                        <li className="hover:text-white cursor-pointer">Resort Wear</li>
                        <li className="hover:text-white cursor-pointer">New Arrivals</li>
                        <li className="hover:text-white cursor-pointer">Best Sellers</li>
                    </ul>
                </div>

                {/* Policy */}
                <div className="md:text-left">
                    <h3 className="text-white text-lg mb-6">Policy</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-white cursor-pointer">Refund Policy</li>
                        <li className="hover:text-white cursor-pointer">Shipping Policy</li>
                        <li className="hover:text-white cursor-pointer">Terms of Service</li>
                    </ul>
                </div>
            </div>

            <div className="relative border-t border-gray-800 py-6 px-6 max-w-7xl mx-auto text-sm flex items-center">

                {/* Center Text */}
                <span className="absolute left-1/2 -translate-x-1/2 text-center">
                    All Right Reserved © 2025 N-BAZAR
                </span>

                {/* Scroll to Top */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="ml-auto w-10 h-10 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-black transition"
                >
                    ↑
                </button>
            </div>

        </footer>
    );
}

/* Social Icon Component */
function SocialIcon({ children }) {
    return (
        <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:text-white cursor-pointer transition">
            {children}
        </div>
    );
}
