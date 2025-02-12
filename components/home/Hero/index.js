'use client';

const Hero = () => {

    return (
        <>
            <div >
                <video 
                    className=" w-full mt-1" 
                    controls 
                    poster="https://via.placeholder.com/800x400.png?text=Video+Preview"
                    autoPlay
                    loop
                    muted
                >
                    <source src="/video/tracking.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="flex flex-col items-center justify-center py-10" id="free-trial">
                <h1 className="text-3xl font-bold text-center mb-4 text-blue-700" >
                    DigiCare4u Tracking Software
                </h1>

                <p className="text-center text-lg text-gray-700 mb-6">
                    The <span className="text-blue-700 text-xl font-bold"> DigiCare4u</span>  Tracking System provides real-time location tracking,
                    analytics, and insights to help <br /> you monitor and manage your resources
                    efficiently.
                </p>

                <div className="flex space-x-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Start Free Trial
                    </button>
                    <button
                        onClick={() => console.log('clicked')}
                        className="bg-white hover:bg-white-400 text-gray-800 font-bold py-2 px-4 rounded">
                        Learn More
                    </button>
                </div>
            </div>
        </>
    );
};

export default Hero;
