import React from "react";
import Navbar from "../components/Navbar";
import WorkoutCard from "../components/WorkoutCard";
import DietCard from "../components/DietCard";

export default function Dashboard() {
  const sampleWorkout = {
    name: "Upper Body Strength",
    duration: 50,
    exercises: ["Push-ups", "Pull-ups", "Dumbell Shoulder Press"],
  };

  const sampleMeal = {
    title: "Paneer Bowl",
    calories: 350,
    protein: 34,
    carbs: 12,
    fat: 16,
  };

  return (
    <>
      <Navbar />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Your Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WorkoutCard workout={sampleWorkout} />
          <DietCard meal={sampleMeal} />
        </div>
      </div>
    </>
  );
}
