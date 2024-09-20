import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  const posts = [
    {
      id: 1,
      title: "10 Tips for Shopping Online Safely",
      image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      excerpt: "Discover essential tips to ensure a safe and secure online shopping experience. From choosing the right websites to recognizing scams, we’ve got you covered.",
      link: "/blog/10-tips-for-shopping-online-safely"
    },
    {
      id: 2,
      title: "How to Choose the Right Product",
      image: "https://plus.unsplash.com/premium_photo-1684407617368-61fadd35748d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      excerpt: "A guide to help you make informed decisions when shopping online. Learn about key features to consider before purchasing.",
      link: "/blog/how-to-choose-the-right-product"
    },
    {
      id: 3,
      title: "Top Trends in E-Commerce for 2024",
      image: "https://images.unsplash.com/photo-1541336318489-083c7d277b8e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      excerpt: "Explore the latest trends shaping the e-commerce landscape this year. Stay ahead of the competition with our insights.",
      link: "/blog/top-trends-in-e-commerce-for-2024"
    },
    {
      id: 4,
      title: "The Future of Online Shopping",
      image: "https://plus.unsplash.com/premium_photo-1684407617236-9baf926474ad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      excerpt: "What does the future hold for online shopping? Discover emerging technologies and their impact on the retail experience.",
      link: "/blog/future-of-online-shopping"
    },
    {
      id: 5,
      title: "Sustainable Shopping: What You Need to Know",
      image: "https://plus.unsplash.com/premium_photo-1684407617185-9ed39d903b92?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      excerpt: "Learn how to shop sustainably and make a positive impact on the environment. Discover eco-friendly brands and products.",
      link: "/blog/sustainable-shopping"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Blog</h1>
      <p className="text-gray-600 mb-8">
        Welcome to our blog! Here, we share the latest news, tips, and insights about our products and the e-commerce industry. Stay tuned for exciting updates!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link to={post.link} className="text-blue-600 hover:underline">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
