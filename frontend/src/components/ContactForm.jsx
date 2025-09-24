import React, { useState, useEffect, useRef } from 'react';
// import ReCAPTCHA from "react-google-recaptcha"; // Is line ko hata diya gaya hai

const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/mldpenon";

const ContactForm = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [status, setStatus] = useState(null);
  const recaptchaRef = useRef(null);

  // Yeh function ab global window object par set kiya jayega
  const handleCaptchaChange = (value) => {
    // Agar 'value' hai, to iska matlab CAPTCHA solve ho gaya hai
    if (value) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };
  
  // useEffect hook ka istemal karke Google reCAPTCHA script load karenge
  useEffect(() => {
    // Callback function ko window object par add karein taaki script use access kar sake
    window.handleCaptchaChange = handleCaptchaChange;
    
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Component unmount hone par script ko clean up karein
    return () => {
      document.body.removeChild(script);
      delete window.handleCaptchaChange;
    };
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isVerified) {
      setStatus({ type: "error", message: "Please complete the verification." });
      return;
    }

    const formEl = event.target;
    const formData = new FormData(formEl);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Form submitted successfully!" });
        formEl.reset();
        setIsVerified(false);
        if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
        setTimeout(() => setStatus(null), 2000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    // Main container for the page
    <div className="min-h-screen bg-[#f3f3f1] py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Main Page Heading from Image */}
        <div className="mb-8 border-b pb-8">
          <h1 className="text-3xl font-normal text-gray-800">
            Our sales, technical service and customer service teams are prepared to serve customers around the world.
          </h1>
          <p className="mt-4 text-md text-gray-600">
            Contact our Vertilinks team for more information about our products or to obtain a price quote.
          </p>
        </div>

        {/* Form container */}
        <div className="space-y-6">
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            {status ? (
              <div
                className={`rounded-md px-4 py-3 text-sm font-medium ${
                  status.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status.message}
              </div>
            ) : null}
            <input type="hidden" name="formName" value="VertiLinks Contact" />
            <input type="hidden" name="_subject" value="New enquiry from VertiLinks website" />
            {/* First Row of Inputs */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-3">
              <div>
                <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                  Company*
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Name*
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email*
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Second Row of Inputs */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-3">
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">
                  Mobile*
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    required
                    className="w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Country
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className="w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Description Field */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Description*
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>

            {/* Real Google reCAPTCHA Component Placeholder */}
            <div
              className="g-recaptcha mt-4"
              data-sitekey="6Lft6NIrAAAAAFPMnx0-n8SVTDI4rkMTsNUV0XZ6"
              data-callback="handleCaptchaChange"
            ></div>

            {/* Submit and Reset Buttons */}
            <div className="flex items-center gap-x-4">
              <button
                type="submit"
                disabled={!isVerified}
                className="px-8 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Submit
              </button>
              <button
                type="reset"
                className="px-8 py-2 font-semibold text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
