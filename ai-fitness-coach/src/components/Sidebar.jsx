import { Link } from "react-router-dom";
import { FaHome, FaAppleAlt, FaRobot, FaChartLine } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-lg p-5 fixed">
      <h1 className="text-2xl font-bold text-blue-600 mb-10">FitAI</h1>

      <div className="flex flex-col gap-6 text-gray-700">
        <Link to="/dashboard"> <FaHome /> Dashboard</Link>
        <Link to="/diet"> <FaAppleAlt /> Diet</Link>
        <Link to="/chat"> <FaRobot /> AI Coach</Link>
        <Link to="/progress"> <FaChartLine /> Progress</Link>
      </div>
    </div>
  );
};

export default Sidebar;