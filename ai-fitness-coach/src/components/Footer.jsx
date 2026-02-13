import React from 'react';

export default function Footer(){
    return (
        <footer className="text-center py-6 bg-gray-100 mt-10">
            <p className="text-sm text-gray-600">
                &copy {new Date().getFullYear()} AI Fitness Coach. All rights reserved.
            </p>
        </footer>
    )
}
