import React from 'react'

function PricingUi() {
  return (
    <>
      <div className="container flex flex-col md:flex-row items-center justify-between bg-white py-16 px-4 md:px-20">
        {/* Text Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-semibold text-gray-800">Pricing</h2>
          <p className="text-lg text-gray-600 mt-4">
            Choose from DigiCare4u's offerings across Attendance, Payroll, and Live
            Tracking features.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="rounded-full bg-blue-100 p-6 flex items-center justify-center">
            <img
              src="/images/pricing.png"
              alt="Person"
              className="w-40 h-40 object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5550/5550516.png"
                alt="Icon"
                className="w-8 h-8"
              />
            </div>
            <h2 className="text-3xl font-semibold">Attendance & Payroll Features</h2>
          </div>
          <button className="bg-green-500 text-white px-6 py-2 rounded-full">
            DigiCare4u Classic Suite
          </button>
        </div>

        {/* Pricing Plan Table */}
        <div className="flex flex-col md:flex-row justify-between border-b pb-8">
          <div className="text-xl font-semibold mb-6 md:mb-0">
            <p>DigiCare4u App</p>
            <p className="text-4xl text-blue-600">₹499</p>
            <p className="text-sm text-gray-600">per staff per year</p>
          </div>
          <div className="text-xl font-semibold mb-6 md:mb-0">
            <p>DigiCare4u App + Web</p>
            <p className="text-4xl text-blue-600">₹699</p>
            <p className="text-sm text-gray-600">per staff per year</p>
          </div>
          <div className="text-xl font-semibold">
            <p>DigiCare4u App + Web + Lens</p>
            <p className="text-4xl text-blue-600">₹1398</p>
            <p className="text-sm text-gray-600">per staff per year</p>
          </div>
        </div>

        {/* Feature List */}
        <div className="mt-8">
          <div className="border border-gray-800 rounded-lg overflow-hidden">
            <table className="table-auto w-full text-left text-lg border-collapse">
              <thead className="bg-gray-100">
                <tr className="border-b border-gray-800">
                  <th className="py-4 px-3 border-r border-gray-800">Attendance Automation</th>
                  <th className="py-4 px-3 border-r border-gray-800">DigiCare4u App</th>
                  <th className="py-4 px-3 border-r border-gray-800">DigiCare4u App + Web</th>
                  <th className="py-4 px-3">DigiCare4u App + Web + Lens</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 border-r border-gray-800">AI based face recognition</td>
                  <td className="py-4 px-6 text-center text-red-500 border-r border-gray-800">✘</td>
                  <td className="py-4 px-6 text-center text-red-500 border-r border-gray-800">✘</td>
                  <td className="py-4 px-6 text-center text-green-500">✔</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 border-r border-gray-800">Fraud Attendance Detection</td>
                  <td className="py-4 px-6 text-center text-red-500 border-r border-gray-800">✘</td>
                  <td className="py-4 px-6 text-center text-red-500 border-r border-gray-800">✘</td>
                  <td className="py-4 px-6 text-center text-green-500">✔</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-r border-gray-800">Real-time attendance sync</td>
                  <td className="py-4 px-6 text-center text-red-500 border-r border-gray-800">✘</td>
                  <td className="py-4 px-6 text-center text-green-500 border-r border-gray-800">✔</td>
                  <td className="py-4 px-6 text-center text-green-500">✔</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* here end  */}
      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5550/5550516.png"
                alt="Icon"
                className="w-8 h-8"
              />
            </div>
            <h2 className="text-3xl font-semibold">Live Tracking and Geo</h2>
          </div>
        </div>

        {/* Pricing Plan Table */}
        <div className="flex flex-col md:flex-row justify-between border-b pb-8">
          <div className="text-xl font-semibold mb-6 md:mb-0">
            <p>DigiCare4u App</p>
            <p className="text-4xl text-blue-600">₹499</p>
            <p className="text-sm text-gray-600">per staff per year</p>
          </div>
          <div className="text-xl font-semibold mb-6 md:mb-0">
            <p>DigiCare4u App + Web</p>
            <p className="text-4xl text-blue-600">₹699</p>
            <p className="text-sm text-gray-600">per staff per year</p>
          </div>
          <div className="text-xl font-semibold">
            <p>DigiCare4u App + Web + Geo</p>
            <p className="text-4xl text-blue-600">₹1398</p>
            <p className="text-sm text-gray-600">per staff per year</p>
          </div>
        </div>

        {/* Feature List */}
        <div className="mt-8">
          <div className="border border-gray-800 rounded-lg overflow-hidden">
            <table className="table-auto w-full text-left text-lg border-collapse">
              <thead className="bg-gray-100">
                <tr className="border-b border-gray-800">
                  <th className="py-4 px-3 border-r border-gray-800">Attendance Automation</th>
                  <th className="py-4 px-3 border-r border-gray-800">DigiCare4u App</th>
                  <th className="py-4 px-3 border-r border-gray-800">DigiCare4u App + Web</th>
                  <th className="py-4 px-3">DigiCare4u App + Web + Geo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 border-r border-gray-800">AI based face recognition</td>
                  <td className="py-4 px-6 text-center text-red-500 border-r border-gray-800">✘</td>
                  <td className="py-4 px-6 text-center text-red-500 border-r border-gray-800">✘</td>
                  <td className="py-4 px-6 text-center text-green-500">✔</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 border-r border-gray-800">Fraud Attendance Detection</td>
                  <td className="py-4 px-6 text-center text-red-500 border-r border-gray-800">✘</td>
                  <td className="py-4 px-6 text-center text-red-500 border-r border-gray-800">✘</td>
                  <td className="py-4 px-6 text-center text-green-500">✔</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-r border-gray-800">Real-time attendance sync</td>
                  <td className="py-4 px-6 text-center text-red-500 border-r border-gray-800">✘</td>
                  <td className="py-4 px-6 text-center text-green-500 border-r border-gray-800">✔</td>
                  <td className="py-4 px-6 text-center text-green-500">✔</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default PricingUi;
