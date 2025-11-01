const ShippingPolicy = () => {
    return (
      <div className="max-w-3xl mx-auto py-12 px-6 border border-gray-200 rounded-lg bg-white">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Shipping Policy
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Last updated: {new Date().toLocaleDateString("en-US")}
        </p>
  
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            As <strong>DevMatches</strong> is a digital platform offering
            online services, we do not offer any physical products or shipping
            services.
          </p>
          <p>
            All access to our service is granted through digital means, such as
            email-based login or subscription activation upon payment.
          </p>
          <p>
            For any questions, feel free to contact us at{" "}
            <a
              href="mailto:devmatches.help@gmail.com"
              className="text-blue-600 hover:underline"
            >
              devmatches.help@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    );
  };
  
  export default ShippingPolicy;
  