const PrivacyPolicy = () => {
    return (
      <div className="max-w-3xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">
          Last updated: {new Date().getFullYear()}
        </p>
  
        <p className="mb-4 text-gray-700 leading-relaxed">
          Welcome to <strong>DevMatches</strong>. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website, devmatches.com, or use
          our services related to developer matchmaking and networking.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">1. Information We Collect</h2>
        <p className="mb-2 text-gray-700">We may collect personal information that you voluntarily provide when registering, such as:</p>
        <ul className="list-disc list-inside mb-6 text-gray-700 space-y-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Profile details, including skills, bio, and profile picture</li>
          <li>Connection requests sent and received</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">2. How We Use Your Information</h2>
        <p className="mb-2 text-gray-700">We use your information to:</p>
        <ul className="list-disc list-inside mb-6 text-gray-700 space-y-1">
          <li>Provide and maintain our service</li>
          <li>Enable developers to send and manage connection requests</li>
          <li>Send transaction or account-related emails</li>
          <li>Enhance your user experience</li>
          <li>Comply with legal obligations</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">3. Sharing Your Information</h2>
        <p className="mb-6 text-gray-700">
          We may share your information with third-party service providers who perform services for us,
          including payment processing (e.g., Razorpay), email delivery, and hosting.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">4. Cookies</h2>
        <p className="mb-6 text-gray-700">
          We use cookies to maintain user sessions and enhance functionality. You can disable cookies in your browser settings.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">5. Security</h2>
        <p className="mb-6 text-gray-700">
          We implement reasonable security measures to protect your personal data. However, no method of transmission is 100% secure.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">6. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, feel free to contact us at{" "}
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
  
  export default PrivacyPolicy;
  