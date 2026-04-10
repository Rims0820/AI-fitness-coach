import Navbar from "../components/Navbar";
import WorkoutCard from "../components/WorkoutCard";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/workouts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setWorkouts(data);
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <Navbar />

      <div className="max-w-6xl mx-auto p-10">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">
          Your Workouts 💪
        </h1>

        {workouts.length === 0 ? (
          <p className="text-gray-500">No workouts yet</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.map((w) => (
              <WorkoutCard key={w._id} workout={w} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
