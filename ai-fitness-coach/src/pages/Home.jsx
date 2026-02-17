import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="p-7 text-center">
        <h1 className="text-3xl font-bold mb-4">Your AI Fitness Coach</h1>
        <p className="text-lg text-gray-600 mb-6">
          Personalized workouts, diet plans, and an AI coach to guide our users.
        </p>

        <Link
          to="/signup"
          className="px-6 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 inline-block"
        >
          Get Started
        </Link>
      </div>

      <Footer />
    </>
  );
}
