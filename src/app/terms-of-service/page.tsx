import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <Link href="/" className="mb-8 inline-block bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition">
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-teal-500 mb-6">Terms of Service</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using the services provided by Teel, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, you should not use our platform. Using our services indicates that you accept all conditions outlined herein.
          </p>
          <p className="mb-4">
            These terms may be updated periodically. Continued use of Teel services after updates constitutes acceptance of any changes. We encourage users to check the Terms of Service regularly to stay informed about modifications.
          </p>
          <p className="mb-4">
            Acceptance also implies responsibility to ensure that your use of Teel is lawful and does not violate any applicable laws, regulations, or rights of third parties. Users are expected to maintain integrity and use the platform appropriately at all times.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">User Responsibilities</h2>
          <p className="mb-4">
            Users are responsible for maintaining the confidentiality of their account credentials and ensuring that access is restricted to authorized persons only. Any activity conducted under your account is your responsibility.
          </p>
          <p className="mb-4">
            You agree to provide accurate, complete, and up-to-date information when using Teel services. Misrepresentation, false information, or fraudulent activity may result in suspension or termination of your account.
          </p>
          <p className="mb-4">
            Users are expected to refrain from any activity that could harm Teel’s systems, interfere with other users, or compromise platform security. Unauthorized access attempts, misuse of resources, or disruptive behavior are strictly prohibited.
          </p>
          <p className="mb-4">
            Continuous engagement with Teel implies compliance with these responsibilities. We may monitor activity to ensure compliance and maintain a safe and reliable environment for all users.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">Account Termination</h2>
          <p className="mb-4">
            Teel reserves the right to suspend, restrict, or terminate accounts at any time for violations of these terms, suspicious activity, or legal requirements. Account termination may be temporary or permanent, depending on the nature of the violation.
          </p>
          <p className="mb-4">
            Users may also choose to close their accounts voluntarily. Account termination or closure does not absolve users from obligations or liabilities incurred while using Teel services.
          </p>
          <p className="mb-4">
            Any content or information associated with a terminated account may be retained for legal compliance, dispute resolution, or operational purposes. Teel is not obligated to return data from terminated accounts but strives to ensure data security at all times.
          </p>
          <p className="mb-4">
            Termination policies are applied fairly and consistently, ensuring that users are informed of actions affecting their accounts wherever possible.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">Limitation of Liability</h2>
          <p className="mb-4">
            Teel is not liable for direct, indirect, incidental, consequential, or punitive damages arising from the use of the platform. Users agree to use Teel at their own risk and understand that the platform is provided "as is" without warranties of any kind.
          </p>
          <p className="mb-4">
            While we strive to ensure uninterrupted, secure, and reliable services, unforeseen technical issues or external factors may affect performance. Teel shall not be held responsible for any losses, interruptions, or errors resulting from these circumstances.
          </p>
          <p className="mb-4">
            Users acknowledge that financial or business decisions made based on Teel’s services are the user’s responsibility. Consulting with professionals is advised for critical or high-stakes decisions.
          </p>
          <p className="mb-4">
            Liability limitations are essential for maintaining sustainable operations, allowing Teel to continue delivering secure, reliable services for all users.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">Governing Law</h2>
          <p className="mb-4">
            These Terms of Service are governed by and interpreted in accordance with the laws of the jurisdiction in which Teel operates. Users agree to comply with applicable local, national, and international laws while using the platform.
          </p>
          <p className="mb-4">
            Disputes arising from use of the platform shall first be addressed through informal communication. If unresolved, disputes may be escalated to binding arbitration or the appropriate legal forum as determined by Teel.
          </p>
          <p className="mb-4">
            Understanding the governing law ensures transparency and helps users understand their rights, obligations, and available remedies.
          </p>
          <p className="mb-4">
            Regular review of these Terms ensures alignment with regulatory changes, legal updates, and operational requirements.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">Modification of Terms</h2>
          <p className="mb-4">
            Teel reserves the right to update, modify, or revise these Terms of Service at any time. Updated terms will be posted on this page. Continued use of Teel services after updates constitutes acceptance of changes.
          </p>
          <p className="mb-4">
            Users are encouraged to review terms regularly to ensure awareness of responsibilities, rights, and permitted uses of the platform.
          </p>
          <p className="mb-4">
            Modifications may include clarifications, policy updates, legal adjustments, or operational improvements. Users are responsible for ensuring compliance with the most current version of the Terms.
          </p>
          <p className="mb-4">
            Transparent communication and consistency in updates help build trust between Teel and its users.
          </p>
        </section>
      </div>
    </main>
  );
}
