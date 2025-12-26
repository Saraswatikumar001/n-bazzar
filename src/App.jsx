import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import AdminLogin from "./admin/AdminLogin";
import AdminLayout from "./admin/AdminLayout";
import ProtectedAdminRoute from "./admin/ProtectedAdminRoute";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";

/* LAZY LOADED PAGES */
const Home = lazy(() => import("./pages/Home/Home"));
const AboutUs = lazy(() => import("./pages/about/AboutUs"));
const Products = lazy(() => import("./pages/Products/Products"));
const ProductDetails = lazy(() => import("./pages/Products/ProductDetails"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const Blogs = lazy(() => import("./pages/blogs/BlogSection"));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/career/Careers"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const CasualWear = lazy(() => import("./pages/CasualWear"));
const Officewear = lazy(() => import("./pages/OfficeWear"));
const Wishlist = lazy(() => import("./pages/Wishlist"));



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/casual" element={<CasualWear />} />
          {/* ✅ WISHLIST ROUTE */}
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/officewear" element={<Officewear />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />

          {/* Admin Login */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/*"
            element={
              <ProtectedAdminRoute>
                <AdminLayout />
              </ProtectedAdminRoute>
            }
          />

        </Routes>
      </Suspense>

      <WhatsAppButton />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

/* SIMPLE LOADER */
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
      Loading...
    </div>
  );
}
