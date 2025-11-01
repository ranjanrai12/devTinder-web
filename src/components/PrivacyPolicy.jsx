const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">Last updated: {new Date().getFullYear()}</p>
      <p className="mb-2">
        Welcome to DevMatches. This Privacy Policy explains how we collect, use,
        disclose, and safeguard your information when you visit our website,
        devmatches.com, or use our services related to developer matchmaking and
        networking.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <p className="mb-2">
        We may collect personal information that you voluntarily provide when
        registering, such as:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Name</li>
        <li>Email address</li>
        <li>Profile details, including skills, bio, and profile picture</li>
        <li>Connection requests sent and received</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        2. How We Use Your Information
      </h2>
      <p className="mb-2">We use your information to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Provide and maintain our service</li>
        <li>Enable developers to send and manage connection requests</li>
        <li>Send transaction or account-related emails</li>
        <li>Enhance your user experience</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        3. Sharing Your Information
      </h2>
      <p className="mb-2">
        We may share your information with third-party service providers who
        perform services for us, including payment processing (e.g. Razorpay),
        email delivery, and hosting.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Cookies</h2>
      <p className="mb-2">
        We use cookies to maintain user sessions and enhance functionality. You
        can disable cookies in your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Security</h2>
      <p className="mb-2">
        We implement reasonable security measures to protect your personal data.
        However, no method of transmission is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Contact Us</h2>
      <p className="mb-2">
        If you have any questions about this Privacy Policy, feel free to
        contact us at devmatches.help@gmail.com.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
