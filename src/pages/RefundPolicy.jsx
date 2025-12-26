export default function RefundPolicy() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 md:p-12">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Refund Policy
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
          At N-Bazar, customer satisfaction is our priority. Please read our
          refund policy carefully to understand how refunds are processed.
        </p>

        {/* CONTENT */}
        <div className="space-y-8 text-gray-700 dark:text-gray-300">

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              1. Eligibility for Refund
            </h2>
            <p>
              You may request a refund if the product you received is damaged,
              defective, incorrect, or not as described. Requests must be made
              within <strong>7 days</strong> of delivery.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              2. Non-Refundable Items
            </h2>
            <p>
              Certain items are not eligible for refunds, including clearance
              items, gift cards, and products damaged due to misuse or normal
              wear and tear.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              3. Refund Process
            </h2>
            <p>
              Once your refund request is approved, the amount will be processed
              back to your original payment method. Refunds typically take
              <strong> 5–10 business days</strong> to reflect in your account.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              4. Return Shipping
            </h2>
            <p>
              Customers may be required to return the product before a refund is
              issued. Return shipping costs may apply unless the return is due
              to our error.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              5. Order Cancellation
            </h2>
            <p>
              Orders can be cancelled before shipment for a full refund. Once
              an order has been shipped, cancellation is no longer possible and
              the return process must be followed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              6. Contact Us
            </h2>
            <p>
              If you have any questions regarding refunds or returns, please
              contact our support team at
              <span className="font-medium"> support@n-bazar.com</span>.
            </p>
          </div>

        </div>

        {/* FOOTER */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-12 text-center">
          © {new Date().getFullYear()} N-Bazar. All rights reserved.
        </p>

      </div>
    </section>
  );
}
