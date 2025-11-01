const RefundPolicy = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>
      <p className="mb-4">Last updated: {new Date().getFullYear()}</p>

      <p className="mb-2">
        Thank you for using DevMatches. This Refund Policy outlines the
        circumstances under which refunds are issued for paid features.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Subscription Fees</h2>
      <p className="mb-2">
        If you have purchased a subscription, you may be eligible for a refund
        only if requested within 7 days of purchase and if you have not used the
        service extensively.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        2. Non-Refundable Cases
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Refunds will not be granted for payments made more than 7 days ago
        </li>
        <li>Refunds will not be issued for abuse or misuse of the platform</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Contact Us</h2>
      <p className="mb-2">
        To request a refund or for any questions, please contact
        support@devmatches.com with your transaction details.
      </p>
    </div>
  );
};
export default RefundPolicy;
