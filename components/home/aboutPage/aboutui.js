import React from 'react'

function AboutUI() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
          <h1 className="text-3xl font-semibold text-blue-700 mb-6">
            Keep All Control for your Person in your hand
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Take full control of your personal assets empowers you to oversee and manage your personal assets with unmatched ease. Our cutting-edge tracking technology allows you to access real-time information from the palm of your hand and make informed decisions. Enjoy the peace of mind that comes with complete control and visibility anytime, anywhere.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/007/932/721/small_2x/about-us-text-web-button-template-about-us-sign-icon-label-colorful-vector.jpg"
            alt="App Image"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Affordable Pricing</h2>
      <div className="relative bg-gradient-to-r p-4 rounded-lg shadow-lg w-full max-w-md">
        {/* Map Background */}
        <div
          className="h-80 w-auto rounded-lg bg-cover bg-center"
          style={{
            backgroundImage: "url('https://media.licdn.com/dms/image/v2/D5612AQF-aFhGRFEbfw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1735970606029?e=2147483647&v=beta&t=bo3YuivQV6FCwwDfqg7G7I1_OosBQ4o_wvJt6NgpqUY')", // Replace with your map image URL
          }}
        ></div>

        {/* Price Bubble */}
        <div className="absolute top-1 right-1 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
          ₹99/user/month
        </div>
      </div>
    </div>

      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
      {/* Left Side Content */}
      <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          DigiCare4u Live Tracking
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          One of our flagship solutions, DigiCare4u, is live tracking software
          designed to enhance operational efficiency and visibility. Whether it’s
          monitoring assets, tracking shipments, or ensuring workforce productivity,
          DigiCare4u provides real-time insights, enabling businesses to make informed
          decisions swiftly. With seamless integration and an intuitive interface, DigiCare4u
          is built to meet the diverse needs of modern enterprises.
        </p>
      </div>

      {/* Right Side Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://www.uffizio.com/wp-content/uploads/2024/02/ADAS-62-1.jpg" // Replace with the actual image URL
          alt="DigiCare4u Live Tracking"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
    </>
  )
}

export default AboutUI;
