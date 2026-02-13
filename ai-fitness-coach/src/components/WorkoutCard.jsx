import React from 'react';

export default function WorkoutCard({workout}) {
    return (
        <div className="border rounded-xl p-4 shadow bg-white hover:shadow-lg transition">
            <h2 className="font-bold text-lg">{workout.name}</h2>
            <p className="text-sm text-gray-500">{workout.duration} mins</p>
            <ul className="mt-2 text-sm">
                {workout.exercises.map((ex,idx)=>(
                    <li key={idx}>.{ex}</li>
                ))}
            </ul>
        </div>
    );
}