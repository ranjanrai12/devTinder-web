const TermsOfService = () => {
    return (
      <div className="max-w-3xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-8">
          Last updated: {new Date().getFullYear()}
        </p>
  
        <p className="mb-4 text-gray-700 leading-relaxed">
          Welcome to <strong>DevMatches</strong>. By accessing or using our platform, you agree to
          comply with the following terms and conditions. If you disagree with any part of these
          terms, please discontinue use of our service.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">1. Use of Service</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          DevMatches provides a networking platform for developers to connect and collaborate. You
          agree to use the service only for lawful purposes.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">2. User Accounts</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          You are responsible for maintaining the confidentiality of your account credentials. You
          agree to notify us immediately if you suspect unauthorized access.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">3. User Conduct</h2>
        <p className="mb-2 text-gray-700">You agree not to:</p>
        <ul className="list-disc list-inside mb-6 text-gray-700 space-y-1">
          <li>Use the platform to send spam or irrelevant requests</li>
          <li>Impersonate another user or misrepresent your identity</li>
          <li>Upload malicious or harmful content</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">4. Payments</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Payment services are handled by Razorpay or similar providers. By using paid features, you
          agree to the terms of our payment gateway.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">5. Termination</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          We reserve the right to suspend or terminate your access if you violate these terms.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">6. Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          For any questions about these terms, contact us at{" "}
          <a
            href="mailto:devmatches.help@gmail.com"
            className="text-blue-600 hover:underline"
          >
            devmatches.help@gmail.com
          </a>
          .
        </p>
      </div>
    );
  };
  
  export default TermsOfService;
  