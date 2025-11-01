const ContactUs = () => {
    return (
      <div className="max-w-3xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-semibold mb-6 text-gray-800">Contact Us</h1>
        <p className="text-lg mb-6 text-gray-600">
          We'd love to hear from you! Feel free to reach out with any questions or feedback.
        </p>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:devmatches.help@gmail.com" className="text-blue-600 underline">
              devmatches.help@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:9380637104" className="text-blue-600 underline">
              9380637104
            </a>
          </p>
        </div>
        <p className="mt-8 text-gray-600">
          Our support team will get back to you within <strong>24-48 hours</strong>.
        </p>
      </div>
    );
  };
  
  export default ContactUs;
  