import React from 'react';

const ProfileInfo = ({ onLogout }) => {
    const getInitials = (name) => {
        const names = name.split(' ');
        return names.map(n => n[0]).join('').toUpperCase();
    };

    return (
        <div className='flex items-center gap-3'>
            <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-blue-500'>
                {getInitials("Ching Ranon")}
            </div>

            <div>
                <p className='text-sm font-medium'>Ching</p>
                <button className='text-sm text-gray-800 underline' onClick={onLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default ProfileInfo;