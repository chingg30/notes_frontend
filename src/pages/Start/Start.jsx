import React from 'react';
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/images/icon.png'; 

function Start() {
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("Login button clicked");
        navigate('/login');
    };

    const handleSignup = () => {
        console.log("Signup button clicked");
        navigate('/signup');
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className="bg-blue-600 p-4 rounded-full shadow-lg mb-8"> {/* Added background, padding, rounded, and shadow */}
                <img src={icon} alt="icon" className="w-25 h-auto" /> {/* Adjusted size of the icon */}
            </div>
            <h1 className="text-4xl text-blue-500 font-bold mb-6">Welcome to StudyNotes</h1>
            <p className='text-3xl text-black font-bold'>Write Less, Learn More!</p>
            <div className="flex space-x-2 mt-6">
                <button
                    onClick={handleLogin}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-300 transition"
                >
                    Login
                </button>
                <button
                    onClick={handleSignup}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                    Signup
                </button>
            </div>
        </div>
    );
}

export default Start;