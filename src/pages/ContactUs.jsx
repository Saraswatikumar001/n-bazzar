import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Moon, Sun } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactUs() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* 🌙 DARK MODE */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  /* ✅ VALIDATION */
  const validate = () => {
    const err = {};
    if (!form.name) err.name = "Name is required";
    if (!form.email) err.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(form.email))
      err.email = "Invalid email";
    if (!form.phone) err.phone = "Phone is required";
    if (form.message.length < 10)
      err.message = "Message must be at least 10 characters";
    return err;
  };

  /* 📩 SUBMIT */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      // 🔴 Replace with real backend endpoint
      await fetch("https://example.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-100 min-h-screen">
      <Toaster position="top-right" />

      {/* HEADER */}
      <section className="bg-indigo-600 text-white py-16 px-6 text-center relative">
        <button
          onClick={() => setDark(!dark)}
          className="absolute top-6 right-6"
        >
          {dark ? <Sun /> : <Moon />}
        </button>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact N-Bazar
        </h1>
        <p className="text-lg opacity-90">
          We’re here to help you 24×7
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* INFO */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Get in Touch</h2>

          <Info icon={<Phone />} title="Phone" value="+91 98765 43210" />
          <Info icon={<Mail />} title="Email" value="support@nbazar.com" />
          <Info
            icon={<MapPin />}
            title="Address"
            value="Salt Lake, Kolkata, India"
          />
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg space-y-5"
        >
          <Input
            placeholder="Your Name"
            value={form.name}
            error={errors.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <Input
            placeholder="Email Address"
            value={form.email}
            error={errors.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <Input
            placeholder="Phone Number"
            value={form.phone}
            error={errors.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 dark:bg-slate-700"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}

          <button
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      {/* 💬 WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600"
      >
        WhatsApp
      </a>
    </div>
  );
}

/* ================= COMPONENTS ================= */

const Info = ({ icon, title, value }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-gray-600 dark:text-gray-300">{value}</p>
    </div>
  </div>
);

const Input = ({ placeholder, value, onChange, error }) => (
  <div>
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 dark:bg-slate-700"
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);
