import { useState } from "react";
import Contact from "../pages/contact/contact";

const CallToAction = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <section
      id="cta"
      className="max-w-7xl  mx-auto my-16 px-4 py-12 rounded-2xl shadow-2xl text-center text-white bg-gradient-to-r from-[#2c2f39]/80 via-[2c2f39]-700 to-[#2c2f39]/70"
    >
      <h2 className="text-[36px] md:text-4xl font-bold  text-white mb-2 drop-shadow text-center">
        Partner with Get Redd Consulting
      </h2>

      <div className="relative h-0.5 w-32 sm:w-40 md:w-52 bg-transparent overflow-hidden mx-auto mb-6">
        <div className="h-full bg-red-600 w-full line-draw origin-left" />
      </div>

      <p className="text-lg md:text-xl mb-6">
        Ready to revolutionize your SBA lending program? Leverage our expertise
        to increase loan portfolio growth, improve efficiency, and ensure
        compliance. Contact us today to unlock your institution’s full potential
        with the GetReddy™ approach.
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <button
          className="inline-block px-8 py-3 rounded bg-white text-red-700 font-bold shadow hover:bg-red-800 hover:text-white transition text-lg"
          onClick={() => setShowContact(true)}
        >
          Contact Us
        </button>

        <a
          href="https://calendly.com/liudmila-getreddconsulting/30?month=2025-07"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded bg-red-900 text-white font-bold shadow hover:bg-white hover:text-red-800 transition text-lg"
        >
          Schedule a call
        </a>
      </div>

      <Contact isOpen={showContact} onClose={() => setShowContact(false)} />
    </section>
  );
};

export default CallToAction;
