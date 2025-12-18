import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function Checkout() {
  
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

 

  /* ======================
     SAVE ADDRESS LIVE
  ====================== */
  useEffect(() => {
    localStorage.setItem("billingAddress", JSON.stringify(form));
  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  /* ======================
     VALIDATION + AUTO SCROLL
  ====================== */
  const validate = () => {
    const newErrors = {};

    if (!form.email) newErrors.email = "Email is required";
    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    if (!form.country) newErrors.country = "Country is required";
    if (!form.address) newErrors.address = "Street address is required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.state) newErrors.state = "State is required";
    if (!form.zip) newErrors.zip = "ZIP code is required";
    if (!form.phone) newErrors.phone = "Phone is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstField = document.querySelector(
        `[name="${Object.keys(newErrors)[0]}"]`
      );
      firstField?.scrollIntoView({ behavior: "smooth", block: "center" });
      firstField?.focus();
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    alert("Order placed successfully!");
  };

  /* ======================
     INPUT UI HELPER
  ====================== */
  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-md text-sm border focus:outline-none transition
    ${
      errors[field]
        ? "border-red-500 shake"
        : "border-gray-300 focus:border-black"
    }`;

  const FieldWrapper = ({ name, children }) => (
    <div className="relative">
      {children}

      {/* Green Check */}
      {form[name] && !errors[name] && (
        <FaCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" />
      )}

      {/* Error Icon */}
      {errors[name] && (
        <FaExclamationCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500" />
      )}

      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-10">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT FORM */}
        <div className="lg:col-span-2 space-y-10">
          {/* CONTACT */}
          <section>
            <h2 className="font-semibold mb-3">Contact information</h2>

            <FieldWrapper name="email">
              <input
                name="email"
                placeholder="Email address *"
                value={form.email}
                onChange={handleChange}
                className={inputClass("email")}
              />
            </FieldWrapper>

            <p className="text-sm text-gray-500 mt-2">
              You are currently checking out as a guest.
            </p>
          </section>

          {/* BILLING */}
          <section>
            <h2 className="font-semibold mb-4">Billing address</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FieldWrapper name="firstName">
                <input
                  name="firstName"
                  placeholder="First name *"
                  value={form.firstName}
                  onChange={handleChange}
                  className={inputClass("firstName")}
                />
              </FieldWrapper>

              <FieldWrapper name="lastName">
                <input
                  name="lastName"
                  placeholder="Last name *"
                  value={form.lastName}
                  onChange={handleChange}
                  className={inputClass("lastName")}
                />
              </FieldWrapper>
            </div>

            <FieldWrapper name="country">
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className={`${inputClass("country")} mt-4`}
              >
                <option value="">Country / Region *</option>
                <option>India</option>
                <option>USA</option>
              </select>
            </FieldWrapper>

            <FieldWrapper name="address">
              <input
                name="address"
                placeholder="Street address *"
                value={form.address}
                onChange={handleChange}
                className={`${inputClass("address")} mt-4`}
              />
            </FieldWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <FieldWrapper name="city">
                <input
                  name="city"
                  placeholder="Town / City *"
                  value={form.city}
                  onChange={handleChange}
                  className={inputClass("city")}
                />
              </FieldWrapper>

              <FieldWrapper name="state">
                <input
                  name="state"
                  placeholder="State / County *"
                  value={form.state}
                  onChange={handleChange}
                  className={inputClass("state")}
                />
              </FieldWrapper>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <FieldWrapper name="zip">
                <input
                  name="zip"
                  placeholder="Postcode / ZIP *"
                  value={form.zip}
                  onChange={handleChange}
                  className={inputClass("zip")}
                />
              </FieldWrapper>

              <FieldWrapper name="phone">
                <input
                  name="phone"
                  placeholder="Phone *"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass("phone")}
                />
              </FieldWrapper>
            </div>
          </section>

          {/* PAYMENT */}
          <section>
            <h2 className="font-semibold mb-3">Payment options</h2>
            <div className="border border-red-500 bg-red-50 text-red-600 p-4 rounded">
              There are no payment methods available. Please contact us for help
              placing your order.
            </div>
          </section>

          {/* SUBMIT */}
          <div className="flex justify-between items-center pt-6 border-t">
            <Link to="/cart" className="text-sm text-gray-600 hover:underline">
              ← Return to cart
            </Link>

            <button
              onClick={handleSubmit}
              className="bg-[#cfa34a] px-10 py-3 text-white font-semibold tracking-wide hover:opacity-90"
            >
              PLACE ORDER
            </button>
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="border p-6 rounded-lg h-fit space-y-6">
          <h2 className="font-semibold">Order summary</h2>

          <div className="flex justify-between border-b pb-4">
            <span>Custom Necklace</span>
            <span>$700.00</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>$700.00</span>
          </div>

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>$700.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
