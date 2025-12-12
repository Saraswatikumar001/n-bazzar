import { useState } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-nbazar-orange text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide">
          N-Bazar
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center bg-white rounded-full px-3 py-2 w-80">
          <FiSearch className="text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search for products..."
            className="ml-2 outline-none text-black w-full"
          />
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6 text-xl">
          <Link to="/products" className="hover:text-gray-200">Products</Link>

          <Link to="/cart">
            <FiShoppingCart className="hover:text-gray-200" />
          </Link>

          <Link to="/login">
            <FiUser className="hover:text-gray-200" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-nbazar-orange text-white px-6 pb-4 animate-slideDown">

          {/* Mobile Search */}
          <div className="flex items-center bg-white rounded-full px-3 py-2 mt-2 mb-3">
            <FiSearch className="text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              className="ml-2 outline-none text-black w-full"
            />
          </div>

          <Link to="/" className="block py-2 border-b border-white/20">
            Home
          </Link>

          <Link to="/products" className="block py-2 border-b border-white/20">
            Products
          </Link>

          <Link to="/cart" className="block py-2 border-b border-white/20">
            Cart
          </Link>

          <Link to="/login" className="block py-2">
            Login
          </Link>

        </div>
      )}
    </nav>
  );
}
