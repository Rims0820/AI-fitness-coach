import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className="w-full flex justify between items-center px-6 py-4 bg-white shadow">
            <h1 className="text-xl font-bold text-blue-600">AI Fitness Coach</h1>
            <div className="flex gap-4">
                <Link to="/" className="hover:text-blue-600">Home</Link>
                <Link to="/dashboard" className="hover:text-pink-600">Dashboard</Link>
                <Link to="/chat" className="hover:text-pink-600">AI Coach</Link>
                <Link to="/login" className="hover:text-pink-600">Login</Link>
                <Link to="/signup" className="hover:text-pink-600">Signup</Link>
            </div>
        </nav>
    );
}