"use client";

import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { devURL } from "../../../constants/endPoints";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);

    try {
      console.log("Sending API request...");

      const response = await axios.post(
        `${devURL}/contact-us`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Response:", response.data);

      if (response.status === 200 || response.status === 201) {
        Swal.fire("Success", response.data.message || "Message sent successfully! ✅", "success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        console.error("API Error:", response.data);
        Swal.fire("Error", response.data.message || "Failed to send message.", "error");
      }
    } catch (error) {
      console.error("Network Error:", error.response ? error.response.data : error.message);
      Swal.fire("Error", error.response.data || "Network error. Please try again later.", "error");
    }
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          {/* Left Section */}
          <div className="lg:mb-0 mb-10">
            <div className="relative h-full">
              <img
                src="https://pagedone.io/asset/uploads/1696488602.png"
                alt="Contact Us"
                className="w-full h-full lg:rounded-l-2xl rounded-2xl object-cover"
              />
              <h1 className="absolute top-11 left-11 text-white text-4xl font-bold">
                Contact us
              </h1>
              <div className="absolute bottom-0 w-full lg:p-11 p-5">
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-6">
                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                      1800-8894-207 (TF)
                    </h5>
                  </div>
                  <div className="flex items-center mb-6">
                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                      help@digicare4u.com
                    </h5>
                  </div>
                  <div className="flex items-center">
                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                      07, Khasra No.426SA, Laulai, Mallhaur, Lucknow - 226028
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-indigo-600 text-4xl font-semibold leading-10 mb-11">
              Send Us A Message
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-full border border-gray-200 focus:outline-none pl-4 mb-5"
                placeholder="Name"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-full border border-gray-200 focus:outline-none pl-4 mb-5"
                placeholder="Email"
                required
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-full border border-gray-200 focus:outline-none pl-4 mb-5"
                placeholder="Phone"
              />

              <input
                type="text"
                name="interest"  // Change from "App" to "interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-full border border-gray-200 focus:outline-none pl-4 mb-5"
                placeholder="Interest"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-24 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm rounded-lg border border-gray-200 focus:outline-none pl-4 pt-2 mb-5"
                placeholder="Message"
                required
              />

              <button
                type="submit"
                className="w-full h-12 text-white text-base font-semibold rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
