// import React from "react";
import { Link } from "react-router-dom";
// import { FiArrowRight } from "react-icons/fi";
import PrimaryButton from "../components/Buttons/primarybutton"; // Adjust path as needed
import { FcGoogle } from "react-icons/fc"; // For Google icon, install react-icons if not already included

const CreateAccount = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage: "url('C:\Users\Priyanka Evoltech\getredd-demo\src\assets\GRC_Elements\CreateAccount.jpg')", // Replace with actual image path or base64
          // backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-red-800/100 to-transparent"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex w-full max-w-6xl mx-auto">
        {/* Left Side - Text */}
        <div className="w-1/2 p-12 text-white flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Let's Connect</h1>
          <p className="text-xl">Your Gateway to SBA Expertise Starts Here</p>
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Let’s Get You Started</h2>
          <p className="text-gray-600 mb-6">Create your GetRedd account</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {/* <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select Skills</option>
              <option value="design">Design</option>
              <option value="development">Development</option>
              <option value="marketing">Marketing</option>
            </select> */}

            <PrimaryButton
             
              text="Create an Account"
              // icon={<FiArrowRight />}
            />

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <FcGoogle className="text-xl" />
              Sign up with Google
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/signin" className="text-red-600 hover:underline">
              Already have an account? Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;