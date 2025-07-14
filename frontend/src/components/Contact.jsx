

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white max-w-3xl w-full rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-4xl font-extrabold border-b border-white pb-4 text-center">Get in Touch with Us</h1>
        <p className="text-lg text-center leading-relaxed">
          We are here to help! Whether you have questions about project submissions, need technical assistance, or just want to provide feedback, feel free to reach out. Your academic success is our priority.
        </p>

        <div className="space-y-6 pt-4">
          {/* Email Section */}
          <div className="flex items-center space-x-4">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <h2 className="text-2xl font-bold">Email Us</h2>
              <p className="text-lg">For general inquiries and support, drop us an email.</p>
              <a href="mailto:support@projectportal.com" className="text-yellow-300 hover:underline text-lg font-medium">support@projectportal.com</a>
            </div>
          </div>

          <hr className="border-white opacity-40" />

          {/* Phone Section */}
          <div className="flex items-center space-x-4">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <h2 className="text-2xl font-bold">Call Us</h2>
              <p className="text-lg">Speak directly with our support team during working hours.</p>
              <p className="text-yellow-300 text-lg font-medium">+91 12345 67890</p>
              <p className="text-sm text-gray-200">(Monday - Friday, 9:00 AM - 5:00 PM IST)</p>
            </div>
          </div>
        </div>

        <p className="text-md text-center pt-6">
          We look forward to assisting you with your academic journey!
        </p>
      </div>
    </div>
  );
};

export default Contact;