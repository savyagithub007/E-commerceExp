import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Social media icons

function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <div className="absolute inset-0">
        {/* Embedded Google Maps iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1980253051734!2d144.9610703766539!3d-37.80775707862519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d47613c6f87%3A0x50599b33c3d46a3a!2sRMIT%20University!5e0!3m2!1sen!2sus!4v1600256732414!5m2!1sen!2sus"
          width="100%"
          height="100%"
          className="filter brightness-50"
          title="Google Maps"
        ></iframe>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 py-16 px-6 relative z-10">
        
        {/* Left Section: Map Background and Contact Info */}
        <div className="relative bg-gray-900 p-10 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-80">
          <h1 className="text-4xl font-bold mb-8">Contact us</h1>
          <p className="text-gray-400 mb-6">Look at Google maps</p>
          
          {/* Contact Information */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Our Address</h3>
              <p>123456 Moscow<br />Lane Dutytown<br />Building 47, Office 202</p>
            </div>
            <div>
              <h3 className="font-semibold">Our Contacts</h3>
              <p>hello@name.com<br />+7 900 850 70 60</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8 flex space-x-4">
            <FaFacebook className="text-gray-400 hover:text-white" />
            <FaTwitter className="text-gray-400 hover:text-white" />
            <FaInstagram className="text-gray-400 hover:text-white" />
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="bg-white text-gray-900 shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Feedback Form</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">E-mail</label>
              <input
                type="email"
                id="email"
                className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea
                id="message"
                rows="4"
                className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700">Upload file</label>
              <input
                type="file"
                className="mt-2 w-full text-gray-600 bg-white border border-gray-300 rounded-md p-2"
              />
            </div>

            <button
              type="submit"
              className="bg-gray-900 text-white w-full py-3 rounded-md hover:bg-gray-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
