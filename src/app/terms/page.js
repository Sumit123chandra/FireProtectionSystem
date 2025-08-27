// export const metadata = {
//   title: "Terms & Conditions | KC Fire Protection System",
//   description: "Read the Terms and Conditions of KC Fire Protection System. Understand our policies regarding services, products, liability, and website usage.",
// };

export default function Terms() {
  return (
    <main className="p-8 max-w-4xl mx-auto text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold text-red-600">Terms & Conditions</h1>
      <p className="text-gray-700">
        Welcome to <strong>KC Fire Protection System</strong>. By accessing or using our website, 
        services, or products, you agree to comply with and be bound by the following terms and conditions.
      </p>

      <section>
        <h2 className="text-xl font-semibold text-red-500 mt-4">1. Use of Website</h2>
        <p>
          You may browse our website for information and service inquiries. Unauthorized use, 
          data scraping, or malicious activities are strictly prohibited.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-red-500 mt-4">2. Services & Products</h2>
        <p>
          All services and products provided are subject to availability and applicable legal 
          standards. KC Fire Protection reserves the right to modify or discontinue services at any time.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-red-500 mt-4">3. Liability</h2>
        <p>
          While we ensure the reliability of our fire safety solutions, KC Fire Protection 
          is not liable for any damages, losses, or incidents arising from misuse, 
          negligence, or external factors beyond our control.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-red-500 mt-4">4. Privacy Policy</h2>
        <p>
          Your use of our website is also governed by our{" "}
          <a href="/privacy-policy" className="text-red-600 underline">
            Privacy Policy
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-red-500 mt-4">5. Changes to Terms</h2>
        <p>
          KC Fire Protection reserves the right to update or revise these terms without 
          prior notice. Please check this page periodically for updates.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-red-500 mt-4">6. Contact Us</h2>
        <p>
          For any queries about these Terms & Conditions, please contact us at:{" "}
          <a href="mailto:chandra78.sumit@gmail.com" className="text-red-600 underline">
            enquiry@kcfireprotection.com
          </a>
        </p>
      </section>
    </main>
  );
}
