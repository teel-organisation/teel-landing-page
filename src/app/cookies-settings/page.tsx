import Link from "next/link";
import FooterSection from "../components/footer-section";

export default function CookiesSettingsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <Link
          href="/"
          className="mb-8 inline-block bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-teal-500 mb-6">Cookies Settings</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">What Are Cookies?</h2>
          <p className="mb-4">
            Cookies are small text files stored on your device by your browser. They help websites remember information about your visit, preferences, and usage patterns. Teel uses cookies to enhance functionality, improve user experience, and analyze platform usage.
          </p>
          <p className="mb-4">
            Cookies allow our system to remember your login, customize settings, and provide personalized content. They can be first-party (set by Teel) or third-party (set by partners for analytics or advertising).
          </p>
          <p className="mb-4">
            Disabling cookies may affect some features of Teel, such as smooth login, remembered preferences, or tailored recommendations. Users can manage cookie settings via their browser at any time.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">Types of Cookies We Use</h2>
          <p className="mb-4"><strong>Essential Cookies:</strong> Required for basic platform functionality, including security, session management, and login.</p>
          <p className="mb-4"><strong>Performance Cookies:</strong> Track user interactions, page visits, and load times. Helps Teel optimize performance and speed.</p>
          <p className="mb-4"><strong>Functional Cookies:</strong> Remember preferences, customization settings, and personalization options.</p>
          <p className="mb-4"><strong>Marketing &amp; Analytics Cookies:</strong> Collect data to deliver relevant promotions, advertisements, and insights on platform usage. No personally identifiable information is sold.</p>
          <p className="mb-4">
            Cookies may also be used for testing new features, ensuring reliable deployment, and measuring engagement with content. Repeated use allows Teel to maintain accurate insights over time.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">Managing Cookies</h2>
          <p className="mb-4">
            Users have the ability to manage or disable cookies in their browser settings. Depending on the browser, this may involve deleting existing cookies, blocking specific types, or enabling privacy modes.
          </p>
          <p className="mb-4">
            Adjusting cookie settings can impact functionality, including login persistence, saved preferences, and personalized experiences. Users should review these settings carefully to ensure the desired platform experience.
          </p>
          <p className="mb-4">
            Teel regularly reviews cookie practices to maintain transparency, security, and compliance. Updates to cookie usage or settings may be communicated through policy updates or notifications on the platform.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">Privacy and Security</h2>
          <p className="mb-4">
            Information collected via cookies is used to enhance services and maintain security. No personally identifiable information is shared with unauthorized parties.
          </p>
          <p className="mb-4">
            Teel ensures that cookies and other tracking technologies comply with privacy regulations, including GDPR, to protect user rights and maintain transparency.
          </p>
          <p className="mb-4">
            Users may request information about cookie usage or ask for modifications to tracking preferences by contacting us at{" "}
            <a href="mailto:business@teelapp.com" className="text-teal-500 underline">business@teelapp.com</a>.
          </p>
          <p className="mb-4">
            Security measures are in place to prevent unauthorized access to cookie data, ensuring privacy is maintained while enabling necessary operational functionality.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">Updates to Cookies Policy</h2>
          <p className="mb-4">
            This Cookies Settings page may be updated periodically to reflect new practices, compliance requirements, or operational changes. Users are encouraged to review this page regularly.
          </p>
          <p className="mb-4">
            Continued use of Teel services after updates constitutes acceptance of the latest cookie policies. Teel aims to maintain transparency and keep users informed about data collection practices.
          </p>
          <p className="mb-4">
            Adjustments may involve adding new cookies, updating purposes, or clarifying management practices. Users are encouraged to manage settings proactively to maintain desired experience.
          </p>
          <p className="mb-4">
            The combination of clear guidance, transparency, and detailed explanations ensures users can make informed decisions about cookies and tracking preferences.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">Consent and Control</h2>
          <p className="mb-4">
            By continuing to use Teel services, users consent to cookie usage as described in this policy. You may withdraw consent at any time by adjusting your browser settings or contacting us directly.
          </p>
          <p className="mb-4">
            Providing users with control over their cookie preferences is central to maintaining trust and regulatory compliance. Teel supports granular control, allowing users to accept only necessary cookies if desired.
          </p>
          <p className="mb-4">
            Consent may be logged and retained for compliance purposes. Users are encouraged to review cookie settings periodically and ensure alignment with personal privacy preferences.
          </p>
          <p className="mb-4">
            Overall, cookies help deliver a reliable, personalized, and secure platform experience. Proper management empowers users while enabling Teel to continuously improve services.
          </p>
        </section>
      </div>
    </main>
  );
}
