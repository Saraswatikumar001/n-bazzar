export default function ShippingPolicy() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 
                        dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 
                        py-24 px-6">
      
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 
                      rounded-3xl shadow-2xl p-8 md:p-14">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold 
                         bg-gradient-to-r from-indigo-600 to-purple-600 
                         bg-clip-text text-transparent">
            Shipping Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Everything you need to know about how N-Bazar delivers your orders
            safely, quickly, and reliably.
          </p>
        </div>

        {/* CONTENT */}
        <div className="space-y-10 text-gray-700 dark:text-gray-300">

          {/* SECTION */}
          <div className="bg-indigo-50 dark:bg-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
              🚀 Shipping Coverage
            </h2>
            <p>
              We currently ship across most locations in India. Delivery
              availability may vary depending on your pin code and local
              courier services.
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
              ⏱ Estimated Delivery Time
            </h2>
            <p>
              Orders are usually delivered within <strong>3–7 business days</strong>.
              Delivery times may vary during sales, holidays, or due to
              unforeseen circumstances.
            </p>
          </div>

          <div className="bg-indigo-50 dark:bg-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
              💰 Shipping Charges
            </h2>
            <p>
              Shipping charges (if applicable) are calculated at checkout and
              depend on order value, location, and delivery method. We may offer
              free shipping on select orders or promotions.
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
              📦 Order Processing
            </h2>
            <p>
              Orders are processed within <strong>24–48 hours</strong> after
              confirmation. You will receive a notification once your order is
              shipped along with tracking details.
            </p>
          </div>

          <div className="bg-indigo-50 dark:bg-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
              🔍 Order Tracking
            </h2>
            <p>
              Once your order is dispatched, a tracking link will be shared via
              email or SMS so you can monitor your shipment in real time.
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
              ❗ Delivery Issues
            </h2>
            <p>
              If your order is delayed, lost, or arrives damaged, please contact
              our support team immediately so we can resolve the issue quickly.
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 
                          text-white rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">
              📞 Need Help?
            </h2>
            <p>
              For any shipping-related queries, reach out to us at  
              <span className="font-semibold"> support@n-bazar.com</span>.
            </p>
          </div>

        </div>

        {/* FOOTER */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-16 text-center">
          © {new Date().getFullYear()} N-Bazar. All rights reserved.
        </p>
      </div>
    </section>
  );
}
