'use client';

const CircleComponent = () => {
  return (
    <>
     <div className="flex justify-center items-center min-h-screen" id="pricing">
  {/* Wrapper for circles */}
  <div className="relative flex flex-wrap items-center justify-center max-w-screen-lg">
    
    {/* Left circles */}
    <div className="flex flex-col items-center mx-4">
      <div className="w-24 h-24 bg-white rounded-full mb-4 shadow-lg flex items-center justify-center">
        <p className="text-center text-blue-500 text-xs sm:text-sm">Real-Time Tracking​</p>
      </div>
      <div className="flex">
        <div className="w-24 h-24 bg-white rounded-full m-2 shadow-lg flex items-center justify-center">
          <p className="text-center text-blue-500 text-xs sm:text-sm">Easy-to-Use App</p>
        </div>
        <div className="w-24 h-24 bg-white rounded-full m-2 shadow-lg flex items-center justify-center">
          <p className="text-center text-blue-500 text-xs sm:text-sm">Comfortable Design</p>
        </div>
      </div>
      <div className="w-24 h-24 bg-white rounded-full m-4 shadow-lg flex items-center justify-center">
        <p className="text-center text-blue-500 text-xs sm:text-sm">Analytics Insights</p>
      </div>
    </div>

    {/* Center circle */}
    <div className="w-32 h-32 bg-blue-700 rounded-full shadow-lg flex items-center justify-center mx-4 p-3">
      <h2 className="text-white font-semibold text-lg">₹99/user</h2>
    </div>

    {/* Right circles */}
    <div className="flex flex-col items-center mx-4">
      <div className="w-24 h-24 bg-white rounded-full mb-4 shadow-lg flex items-center justify-center">
        <p className="text-center text-blue-500 text-xs sm:text-sm">Privacy & Security</p>
      </div>
      <div className="flex">
        <div className="w-24 h-24 bg-white rounded-full m-2 shadow-lg flex items-center justify-center">
          <p className="text-center text-blue-500 text-xs sm:text-sm">SOS Button</p>
        </div>
        <div className="w-24 h-24 bg-white rounded-full m-2 shadow-lg flex items-center justify-center">
          <p className="text-center text-blue-500 text-xs sm:text-sm">Affordable Price</p>
        </div>
      </div>
      <div className="w-24 h-24 bg-white rounded-full m-4 shadow-lg flex items-center justify-center">
        <p className="text-center text-blue-500 text-xs sm:text-sm">Care and Trust</p>
      </div>
    </div>

  </div>
</div>

    </>
  );
};

export default CircleComponent;
