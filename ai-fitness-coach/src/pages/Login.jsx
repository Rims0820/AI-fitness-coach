import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Navbar />

      <div className="flex justify-center mt-16">
        <div className="w-96 p-6 border rounded-xl shadow bg-white">
          <h2 className="text-xl font-bold mb-4">Login</h2>

          <input
            className="w-full p-2 border rounded mb-3"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full p-2 border rounded mb-3"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
            Login
          </button>
        </div>
      </div>
    </>
  );
}
