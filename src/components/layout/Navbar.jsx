import {
  FiMail,
  FiPhone,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export default function Navbar() {
  return (
    <header className="w-full shadow border-b">

      {/* 🔴 TOP BLACK BAR */}
      <div className="bg-[#1c1c1c] text-white text-sm py-2 px-6 flex justify-between items-center">

        {/* Left: Email + Phone */}
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <FiMail className="text-white" /> customercare@mbaazar.in
          </span>

          <span className="flex items-center gap-2">
            <FiPhone className="text-white" /> +91-9830640004
          </span>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-4 text-lg">
          <FiFacebook className="cursor-pointer hover:text-gray-300" />
          <FiTwitter className="cursor-pointer hover:text-gray-300" />
          <FiInstagram className="cursor-pointer hover:text-gray-300" />
          <FiYoutube className="cursor-pointer hover:text-gray-300" />
          <FiLinkedin className="cursor-pointer hover:text-gray-300" />
        </div>
      </div>

      {/* 🔴 MAIN NAVBAR */}
      <nav className="bg-[#f3efec] py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* LOGO */}
          <img
            src={logo}
            alt="logo"
            className="w-44 h-auto object-contain"
          />

          {/* MENU ITEMS */}
          <ul className="hidden md:flex gap-6 text-[14px] font-semibold tracking-wider text-black">

            <li className="relative group cursor-pointer">
              HOME
              <div className="absolute left-0 top-6 w-0 h-[3px] bg-red-600 transition-all duration-300 group-hover:w-full"></div>
            </li>

            <span>|</span>

            <li className="relative group cursor-pointer">
              ABOUT US
              <div className="absolute left-0 top-6 w-0 h-[3px] bg-red-600 transition-all duration-300 group-hover:w-full"></div>
            </li>

            <span>|</span>

            <li className="relative group cursor-pointer">
              OUR PRODUCTS
              <div className="absolute left-0 top-6 w-0 h-[3px] bg-red-600 transition-all duration-300 group-hover:w-full"></div>
            </li>

            <span>|</span>

            <li className="relative group cursor-pointer">
              OUTLETS
              <div className="absolute left-0 top-6 w-0 h-[3px] bg-red-600 transition-all duration-300 group-hover:w-full"></div>
            </li>

            <span>|</span>

            <li className="relative group cursor-pointer">
              BLOGS
              <div className="absolute left-0 top-6 w-0 h-[3px] bg-red-600 transition-all duration-300 group-hover:w-full"></div>
            </li>

            <span>|</span>

            <li className="relative group cursor-pointer">
              CAREERS
              <div className="absolute left-0 top-6 w-0 h-[3px] bg-red-600 transition-all duration-300 group-hover:w-full"></div>
            </li>

            <span>|</span>

            <li className="relative group cursor-pointer">
              CONTACT US
              <div className="absolute left-0 top-6 w-0 h-[3px] bg-red-600 transition-all duration-300 group-hover:w-full"></div>
            </li>
          </ul>
        </div>
      </nav>

    </header>
  );
}
