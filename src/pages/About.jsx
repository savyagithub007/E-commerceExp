import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Story</h2>
        <p className="text-gray-600">
          We are a passionate team dedicated to bringing you the best products at the best prices. 
          Our journey started with a simple idea: to create an online shopping experience that is 
          seamless, enjoyable, and rewarding. We believe in the power of great products and strive 
          to offer a curated selection that caters to your needs.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
        <p className="text-gray-600">
          Our mission is to empower customers through quality products, exceptional service, 
          and a commitment to innovation. We aim to exceed your expectations at every step, 
          from browsing to delivery, making your shopping experience as delightful as possible.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-800">Jane Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
            <p className="text-gray-600">
              Jane is a visionary leader with over 10 years of experience in the retail industry. 
              Her passion for e-commerce drives our mission forward.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-800">John Smith</h3>
            <p className="text-gray-600">CTO</p>
            <p className="text-gray-600">
              John is a tech enthusiast who oversees our technological advancements and ensures 
              a seamless shopping experience for our customers.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-800">Emily Johnson</h3>
            <p className="text-gray-600">Customer Service Manager</p>
            <p className="text-gray-600">
              Emily leads our customer service team, ensuring that every inquiry is met with 
              care and promptness.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
