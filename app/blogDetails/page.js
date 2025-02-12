// import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import React from "react";

function BlogDetails() {
  return (
  <>
  <Navbar/>
    <div className="min-h-screen p-10">
      {/* Blog Card Container */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Author Name */}
        <p className="text-gray-700 font-semibold text-lg">
          Author: <span className="text-blue-700">Name</span>
        </p>

        {/* Date */}
        <p className="text-gray-500 text-sm mt-1">Published on: January 15, 2025</p>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mt-4">
          Amazing Blog Title That Captures Attention
        </h1>

        {/* Image */}
        <img
          src="/images/blog.jpg"
          alt="Blog Visual"
          className="w-full rounded-lg mt-6"
        />

        {/* Content */}
        <div className="mt-6 text-gray-700 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            in tellus ac odio tempor euismod. Integer ut libero nec eros bibendum
            pretium. Fusce dapibus, arcu id hendrerit malesuada, est lorem
            elementum purus, ut scelerisque ipsum arcu non magna.
          </p>
          <p className="mt-4">
            Curabitur id purus vitae justo tincidunt bibendum. Nullam varius, mi
            vel tristique sagittis, lacus ipsum vehicula lorem, vitae varius
            libero nisl vel nulla. Ut ac posuere justo. Proin tincidunt ipsum ac
            nulla congue, id lacinia purus pulvinar.
          </p>
          <p className="mt-4">
            Curabitur id purus vitae justo tincidunt bibendum. Nullam varius, mi
            vel tristique sagittis, lacus ipsum vehicula lorem, vitae varius
            libero nisl vel nulla. Ut ac posuere justo. Proin tincidunt ipsum ac
            nulla congue, id lacinia purus pulvinar.
          </p>
        </div>

      </div>
    </div>
    <Footer/>
  </>
  );
}

export default BlogDetails;
