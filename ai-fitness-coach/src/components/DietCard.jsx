import React from "react";

export default function DietCard({ meal }) {
  return (
    <div className="border rounded-lg p-4 shadow bg-white">
      <h2 className="font-semibold text-lg">{meal.title}</h2>
      <p className="text-black-600 text-sm">{meal.calories} calories</p>

      <div className="mt-3">
        <p className="text-sm">Protein: {meal.protein}g</p>
        <p className="text-sm">Carbs: {meal.carbs}g</p>
        <p className="text-sm">Fat: {meal.fat}g</p>
      </div>
    </div>
  );
}
