import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <Link href="/" className="mb-8 inline-block bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition">
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-teal-500 mb-6">Privacy Policy</h1>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">Information We Collect</h2>
          <p className="mb-4">
            Teel collects various types of information when you use our services. This includes personal information such as your name, email address, phone number, company name, and transaction history. Collecting this information allows us to provide personalized services, facilitate secure transactions, and communicate important updates effectively.
          </p>
          <p className="mb-4">
            Additionally, we collect data automatically through cookies, browser information, device identifiers, and usage patterns. This may include IP addresses, browser type, operating system, pages visited, time spent on each page, and interaction with our platform.
          </p>
          <p className="mb-4">
            Some information is also collected when you contact our support team, sign up for newsletters, or engage with our marketing campaigns. Collecting such information enables Teel to respond effectively to inquiries, provide tailored recommendations, and improve overall user experience.
          </p>
          <p className="mb-4">
            In certain cases, we may also collect information about your preferences, interests, or interactions with third-party integrations. This helps us enhance functionality and create a more seamless and personalized experience for our users.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">How We Use Your Information</h2>
          <p className="mb-4">
            The information collected is used to provide, maintain, and enhance Teel’s services. It allows us to ensure smooth transaction processing, personalized recommendations, security monitoring, and efficient customer support.
          </p>
          <p className="mb-4">
            We may also use your information to develop new features, conduct research, measure performance, and evaluate the effectiveness of our marketing campaigns. Your data helps us understand usage trends, identify areas of improvement, and optimize our platform.
          </p>
          <p className="mb-4">
            Aggregated and anonymized data may be used for analytics and business insights. This helps Teel improve services while safeguarding individual privacy. No personally identifiable information is shared in such aggregated reports.
          </p>
          <p className="mb-4">
            Teel may occasionally share information with trusted third-party partners who assist in operational, marketing, and analytical tasks. All such sharing is strictly controlled, and third parties are obligated to maintain confidentiality and adhere to data protection standards.
          </p>
          <p className="mb-4">
            Your information is never sold to third parties. Teel is committed to transparency in handling data and ensures it is used solely to improve user experience, security, and platform functionality.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">Your Rights</h2>
          <p className="mb-4">
            You have the right to access, correct, update, or delete your personal information at any time. You may also withdraw consent where applicable or object to certain processing activities. Exercising these rights ensures you have control over your personal data.
          </p>
          <p className="mb-4">
            Requests regarding your data can be made by contacting us at{" "}
            <a href="mailto:business@teelapp.com" className="text-teal-500 underline">business@teelapp.com</a>. We commit to responding promptly and ensuring your privacy preferences are respected.
          </p>
          <p className="mb-4">
            Certain data may be retained to comply with legal obligations, resolve disputes, enforce agreements, or maintain the integrity of our platform. These retention periods are strictly regulated and aligned with best practices.
          </p>
          <p className="mb-4">
            It is your responsibility to review the Privacy Policy periodically for updates. Continued use of Teel services indicates acceptance of any changes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">Cookies and Tracking</h2>
          <p className="mb-4">
            Teel uses cookies and similar technologies to monitor site activity, analyze traffic patterns, remember user preferences, and enhance functionality. Cookies may include first-party cookies set by Teel or third-party cookies used for analytics or marketing.
          </p>
          <p className="mb-4">
            Cookies improve performance and security, enable session management, and allow us to deliver personalized content. You can choose to disable cookies in your browser, although certain features may not work as intended without them.
          </p>
          <p className="mb-4">
            We regularly review cookie practices to ensure compliance and security. This includes evaluating the types of cookies used, their purpose, and potential impact on user experience.
          </p>
          <p className="mb-4">
            Information collected via cookies may also be used for testing new features, measuring engagement, and understanding overall platform performance. Such insights help Teel continually enhance services and maintain a reliable experience for all users.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">Data Security</h2>
          <p className="mb-4">
            We implement strict security measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. These measures include encryption, secure storage, limited access, and routine audits.
          </p>
          <p className="mb-4">
            Our security protocols are continuously reviewed and updated to stay ahead of emerging threats. While we strive to maintain high standards, users are encouraged to report any suspicious activity or potential breaches immediately.
          </p>
          <p className="mb-4">
            We may also conduct regular security awareness training for staff and monitor system access logs to detect unusual patterns. Ensuring your data remains safe is a top priority for Teel.
          </p>
          <p className="mb-4">
            In rare circumstances, breaches may occur. In such cases, we follow strict notification procedures and work promptly to resolve any issues, maintaining transparency with affected users.
          </p>
        </section>

        <section className="mb-10">
          <p className="mb-4">
            This Privacy Policy may be updated periodically. Users are encouraged to review the policy regularly. Your continued use of Teel services constitutes acceptance of any updates. Questions, concerns, or feedback can always be directed to{" "}
            <a href="mailto:business@teelapp.com" className="text-teal-500 underline">business@teelapp.com</a>.
          </p>
          <p className="mb-4">
            We are committed to maintaining transparency, protecting your information, and continuously improving your experience with Teel.
          </p>
        </section>
      </div>
    </main>
  );
}
