"use client"

import React from "react"
import { MapPin, Bell, Users, ShieldCheck, CalendarCheck, BarChart, Clock, Smartphone, Globe} from "lucide-react";
import Footer from "../../components/home/Footer"
import Navbar from "../../components/home/Navbar"


export default function Features() {

    const features = [
        {
          icon: <MapPin size={32} className="text-blue-500" />,
          title: "Live Location",
          description: "Track your loved ones with accurate Live location updates.",
        },
        {
          icon: <Bell size={32} className="text-red-500" />,
          title: "Instant Alerts",
          description: "Receive alerts when someone enters or leaves a specified area.",
        },
        {
          icon: <Users size={32} className="text-green-500" />,
          title: "Family Sharing",
          description: "Easily add and manage multiple people within your tracking network.",
        },
        {
          icon: <ShieldCheck size={32} className="text-purple-500" />,
          title: "Privacy & Security",
          description: "Your data is encrypted and secure, ensuring complete privacy.",
        },
        {
          icon: <CalendarCheck size={32} className="text-orange-500" />,
          title: "Task Schedule",
          description: "Plan and manage daily tasks efficiently for better productivity.",
        },
        {
          icon: <BarChart size={32} className="text-indigo-500" />,
          title: "Insights/Analyze",
          description: "Gain meaningful insights and track activity trends over time.",
        },
        {
          icon: <Clock size={32} className="text-teal-500" />,
          title: "Timeline",
          description: "View historical location data and track movement over time.",
        },
        {
            icon: <Globe size={32} className="text-pink-500" />,
            title: "Web Access",
            description: "Access your dashboard from any device with our web application.",
          },
        {
            icon: <Smartphone size={32} className="text-pink-500" />,
            title: "Mobile App",
            description: "Stay connected on the go with our easy-to-use mobile application.",
          },
      ];
      



    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto p-6">
                <h2 className="text-3xl text-blue-700 font-bold text-center mb-8">Key Features</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {features.map((feature, index) => (
                        <div key={index} className="p-4 shadow-md">
                            <div className="flex flex-col items-center text-center space-y-4">
                                {feature.icon}
                                <h3 className="text-xl font-semibold text-blue-700">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}