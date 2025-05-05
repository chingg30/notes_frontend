import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import PasswordInput from '../../components/Input/PasswordInput';
import { validateEmail } from '../../utils/helper'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setErrorMessage(''); 
    };
    console.log("Login component rendered");
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check if email and password are empty
        if (!email || !password) {
            setErrorMessage('Please input a valid email address and password.');
            return;
        }

        // Validate email
        if (!validateEmail(email)) {
            setErrorMessage('Invalid email format. Please enter a valid email address.');
            return;
        }

        // Here you can add your login logic (e.g., API call)
        // If login is successful, clear the error message
        setErrorMessage('');
        console.log('Logging in with:', { email, password });
    };

    return (
        <>
        
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                            <PasswordInput
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        {errorMessage && (
                            <p className="text-red-500 text-sm mb-4">{errorMessage}</p> // Error message in red
                        )}
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">Login</button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Not registered yet?{' '}
                        <Link to="/signup" className="text-blue-500 hover:underline">Create an account</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;