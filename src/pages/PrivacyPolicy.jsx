export default function PrivacyPolicy() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 md:p-12">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
          Your privacy is important to us. This policy explains how N-Bazar
          collects, uses, and protects your personal information.
        </p>

        {/* SECTION */}
        <div className="space-y-8 text-gray-700 dark:text-gray-300">

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              1. Information We Collect
            </h2>
            <p>
              We may collect personal information such as your name, email
              address, phone number, shipping address, and payment details
              when you register, place an order, or contact us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              2. How We Use Your Information
            </h2>
            <p>
              Your information is used to process orders, manage your account,
              improve our services, communicate updates, and provide a smooth
              shopping experience.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              3. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              personal data from unauthorized access, alteration, or disclosure.
              However, no online system is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              4. Cookies
            </h2>
            <p>
              N-Bazar uses cookies to enhance user experience, analyze website
              traffic, and personalize content. You can control cookie settings
              through your browser.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              5. Third-Party Services
            </h2>
            <p>
              We may use trusted third-party services (such as payment gateways)
              to complete transactions. These providers have their own privacy
              policies governing your data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, update, or delete your personal
              information. If you have any concerns, please contact our support
              team.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              7. Policy Updates
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated effective date.
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
