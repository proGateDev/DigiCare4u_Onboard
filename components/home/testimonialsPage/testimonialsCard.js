import React from "react";

function TestimonialsCard() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">What Clients Say</h2>
          <p className="text-gray-600 mt-2">
            We place huge value on strong relationships and have seen the
            benefit they bring to our business. Customer feedback is what is
            helping us get it right.
          </p>
        </div>

        {/* Responsive Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 mx-auto">
            <div className="flex justify-center mb-4">
              <img
                src="https://imgcdn.stablediffusionweb.com/2024/11/1/f9199f4e-2f29-4b5c-8b51-5a3633edb18b.jpg"
                alt="Author 1"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <p className="text-gray-700 italic text-center">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              urna nec urna laoreet auctor sit amet nec felis."
            </p>
            <div className="mt-4 text-center">
              <p className="font-semibold text-gray-800">Nai Reynolds</p>
              <p className="text-sm text-gray-500">Chief Accountant</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 mx-auto">
            <div className="flex justify-center mb-4">
              <img
                src="https://imgcdn.stablediffusionweb.com/2024/11/1/f9199f4e-2f29-4b5c-8b51-5a3633edb18b.jpg"
                alt="Author 2"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <p className="text-gray-700 italic text-center">
              "Praesent sagittis augue id quam elementum, ac vehicula ipsum
              auctor. Duis venenatis nisl a cursus faucibus."
            </p>
            <div className="mt-4 text-center">
              <p className="font-semibold text-gray-800">Celia Almeida</p>
              <p className="text-sm text-gray-500">Secretary</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 mx-auto">
            <div className="flex justify-center mb-4">
              <img
                src="https://imgcdn.stablediffusionweb.com/2024/11/1/f9199f4e-2f29-4b5c-8b51-5a3633edb18b.jpg"
                alt="Author 3"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <p className="text-gray-700 italic text-center">
              "Mauris magna neque, gravida in fermentum in, pellentesque purus
              ac elit. Suspendisse potenti."
            </p>
            <div className="mt-4 text-center">
              <p className="font-semibold text-gray-800">Bob Roberts</p>
              <p className="text-sm text-gray-500">Sales Manager</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialsCard;
