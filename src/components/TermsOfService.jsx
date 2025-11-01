const TermsOfService = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">Last updated: {new Date().getFullYear()}</p>
      <p className="mb-2">
        Welcome to DevMatches. By accessing or using our platform, you agree to
        comply with the following terms and conditions. If you disagree with any
        part of these terms, please discontinue use of our service.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of Service</h2>
      <p className="mb-2">
        DevMatches provides a networking platform for developers to connect and
        collaborate. You agree to use the service only for lawful purposes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. User Accounts</h2>
      <p className="mb-2">
        You are responsible for maintaining the confidentiality of your account
        credentials. You agree to notify us immediately if you suspect
        unauthorized access.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. User Conduct</h2>
      <p className="mb-2">You agree not to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Use the platform to send spam or irrelevant requests</li>
        <li>Impersonate another user or misrepresent your identity</li>
        <li>Upload malicious or harmful content</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Payments</h2>
      <p className="mb-2">
        Payment services are handled by Razorpay or similar providers. By using
        paid features, you agree to the terms of our payment gateway.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Termination</h2>
      <p className="mb-2">
        We reserve the right to suspend or terminate your access if you violate
        these terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Contact Us</h2>
      <p className="mb-2">
        For any questions about these terms, contact us at
        support@devmatches.com.
      </p>
    </div>
  );
};

export default TermsOfService;
