const RefundPolicy = () => {
    return (
      <div className="max-w-3xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">Refund Policy</h1>
        <p className="text-gray-500 text-sm mb-8">
          Last updated: {new Date().toLocaleDateString("en-US")}
        </p>
  
        <p className="mb-4 text-gray-700 leading-relaxed">
          Thank you for using <strong>DevMatches</strong>. This Refund Policy outlines the
          circumstances under which refunds are issued for paid features.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">1. Subscription Fees</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          If you have purchased a subscription, you may be eligible for a refund
          only if requested within 7 days of purchase and if you have not used the
          service extensively.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">2. Non-Refundable Cases</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700 space-y-1">
          <li>Refunds will not be granted for payments made more than 7 days ago</li>
          <li>Refunds will not be issued for abuse or misuse of the platform</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">3. Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          To request a refund or for any questions, please contact{" "}
          <a
            href="mailto:devmatches.help@gmail.com"
            className="text-blue-600 hover:underline"
          >
            devmatches.help@gmail.com
          </a>{" "}
          with your transaction details.
        </p>
      </div>
    );
  };
  
  export default RefundPolicy;
  