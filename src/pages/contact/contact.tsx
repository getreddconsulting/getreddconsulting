import React, { useState } from "react";
import useScrollLock from "../../hooks/useScrollLock"; 
interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

const Contact: React.FC<ContactProps> = ({ isOpen, onClose }) => {
   useScrollLock(isOpen); 
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!email.trim() || !fullName.trim() || !message.trim()) {
      e.preventDefault(); // Stop form submission
      setError("Please fill out all fields before sending.");
    } else {
      setError(""); // Clear error if everything is filled
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-800 via-red-700 to-gray-900 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md mx-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h2>

        <form
          action="https://amplifyapp.us18.list-manage.com/subscribe/post?u=0dc6bd3558e5a05946c7c9483&id=0f2e3b6cf3&f_id=00f5aee6f0"
          method="POST"
          noValidate
          target="_blank"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            type="hidden"
            name="redirect"
            value="C:\Users\Priyanka Evoltech\getredd-demo\src\pages\contact\thankyou.tsx"
          />

          <input
            type="email"
            name="EMAIL"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-red-600 py-2 text-sm text-gray-800 placeholder-gray-500"
          />

          <input
            type="text"
            name="FNAME"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-red-600 py-2 text-sm text-gray-800 placeholder-gray-500"
          />

          <textarea
            name="MESSAGE"
            placeholder="Your message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-red-600 py-2 text-sm text-gray-800 placeholder-gray-500 resize-none"
          />

          {error && (
            <p className="text-red-600 text-sm -mt-4">{error}</p>
          )}

          <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
            <input
              type="text"
              name="b_0dc6bd3558e5a05946c7c9483_0f2e3b6cf3"
              tabIndex={-1}
              defaultValue=""
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-md bg-gradient-to-r from-gray-900 to-red-700 hover:from-gray-800 hover:to-red-800 transition duration-300"
          >
            Send Your Message
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-6 text-center w-full text-sm text-gray-400 hover:text-gray-600 transition bg-white hover:border-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Contact;
