import { Link } from "react-router-dom";

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
                <ul className="space-y-4 text-sm">
                    <FooterLink to="/casual">Casual Wear</FooterLink>
                    <FooterLink to="/officewear">Office Wear</FooterLink>
                    <FooterLink to="/partywear">Party Wear</FooterLink>
                    <FooterLink to="/products?category=resort">Resort Wear</FooterLink>
                    <FooterLink to="/products/new">New Arrivals</FooterLink>
                    <FooterLink to="/products/best-sellers">Best Sellers</FooterLink>
                </ul>


                {/* Policy */}
                <div>
                    <h3 className="text-white text-lg mb-6">Policy</h3>
                    <ul className="space-y-4 text-sm">
                        <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
                        <FooterLink to="/refund-policy">Refund Policy</FooterLink>
                        <FooterLink to="/shipping-policy">Shipping Policy</FooterLink>
                        <FooterLink to="/terms">Terms of Service</FooterLink>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative border-t border-gray-800 py-6 px-6 max-w-7xl mx-auto text-sm flex items-center">
                <span className="absolute left-1/2 -translate-x-1/2 text-center">
                    All Rights Reserved © 2025 N-BAZAR
                </span>

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

/* Reusable Footer Link */
function FooterLink({ to, children }) {
    return (
        <li>
            <Link
                to={to}
                className="hover:text-white transition cursor-pointer"
            >
                {children}
            </Link>
        </li>
    );
}

/* Social Icon */
function SocialIcon({ children }) {
    return (
        <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:text-white cursor-pointer transition">
            {children}
        </div>
    );
}
