import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'; 


const PasswordInput = ({ value, onChange }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [error, setError] = useState('');

    const toggleShowPassword = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    const handleInputChange = (e) => {
        onChange(e); // call parent handler
        setError(e.target.value ? '' : 'Please enter the password'); // set error message if empty
    };

    return (
        <div className='relative'>
            <input
                type={isPasswordVisible ? 'text' : 'password'}
                value={value}
                onChange={handleInputChange} // use new handler
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button 
                type="button" 
                onClick={toggleShowPassword} 
                className='absolute inset-y-0 right-0 flex items-center pr-3'
                aria-label={isPasswordVisible ? "Hide password" : "Show password"}
            >
                {isPasswordVisible ? (
                    <FaRegEye size={22} className="text-gray-500 cursor-pointer" />
                ) : (
                    <FaRegEyeSlash size={22} className="text-blue-500 cursor-pointer" />
                )}
            </button>
            {error && <p className='text-red-500 mt-1'>{error}</p>} {/* Display error message */}
        </div>
    );
};

export default PasswordInput;