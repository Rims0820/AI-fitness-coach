import { useState } from "react";
import Navbar from "../components/Navbar";

const AddWorkout = () => {
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const handleAddWorkout = async () => {
    const token = localStorage.getItem("token");

    await fetch("http://localhost:5000/api/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        reps,
        sets,
        difficulty,
      }),
    });

    alert("Workout Added");
  };

  return (
    <>
      <Navbar />
      <div className="p-10">
        <input placeholder="Workout Name" onChange={(e)=>setName(e.target.value)} />
        <input placeholder="Reps" onChange={(e)=>setReps(e.target.value)} />
        <input placeholder="Sets" onChange={(e)=>setSets(e.target.value)} />
        <input placeholder="Difficulty" onChange={(e)=>setDifficulty(e.target.value)} />

        <button onClick={handleAddWorkout}>Add Workout</button>
      </div>
    </>
  );
};

export default AddWorkout;