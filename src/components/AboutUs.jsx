const ShippingPolicy = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Shipping Policy</h1>
      <p className="mb-4">Last updated: {new Date().getFullYear()}</p>

      <p className="mb-2">
        As DevMatches is a digital platform offering online services, we do not
        offer any physical products or shipping services.
      </p>
      <p className="mb-2">
        All access to our service is granted through digital means, such as
        email-based login or subscription activation upon payment.
      </p>
      <p>
        For any questions, feel free to contact us at devmatches.help@gmail.com.
      </p>
    </div>
  );
};

export default ShippingPolicy;
