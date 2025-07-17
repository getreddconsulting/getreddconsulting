// pages/SignIn.tsx
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <AuthLayout title="Welcome Back!">
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
      />
      <button className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 rounded-lg transition">
        Sign In →
      </button>
      <div className="flex justify-between text-sm text-gray-700 mt-2">
        <Link to="/signup" className="text-red-700 underline hover:text-red-900">
          Sign up
        </Link>
        <a href="#" className="text-red-700 underline hover:text-red-900">
          Forgot Password?
        </a>
      </div>
    </AuthLayout>
  );
}
