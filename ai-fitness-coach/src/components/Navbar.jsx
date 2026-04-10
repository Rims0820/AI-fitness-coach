import { Link } from "react-router-dom";
import { FaDumbbell } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-10 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <FaDumbbell className="text-blue-600 text-2xl" />
        <h1 className="text-xl font-bold text-blue-600">FitAI</h1>
      </div>

      <div className="space-x-6 text-gray-700 font-medium">
        <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
        <Link to="/diet" className="hover:text-blue-600">Diet</Link>
        <Link to="/chat" className="hover:text-blue-600">AI Coach</Link>
      </div>
    </nav>
  );
};

export default Navbar;