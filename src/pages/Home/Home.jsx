import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Notecard from '../../components/Cards/Notecard';
import { MdAdd } from 'react-icons/md'; // Correct icon import
import AddEditNotes from './AddEditNotes'; // Ensure correct import path
import Modal from "react-modal";

const Home = () => {
    const [openAddEditModal, setOpenAddEditModal] = useState({
        isShown: false,
        type: 'add',
        data: null,
    });

    return (
        <>
            <Navbar />

            <div className='container mx-auto relative min-h-screen'> {/* relative and min screen height for positioning */}
                <div className='grid grid-cols-3 gap-4 mt-8'>
                    <Notecard 
                        title='Capstone' 
                        date='May 1, 2025'
                        time='10:30 AM' 
                        content='kaya pa ba? '
                        isPinned={true}
                        OnEdit={() => {}}
                        OnDelete={() => {}}
                        onPinNote={() => {}}
                    />
                </div>
            </div>

            <button 
                className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-600 hover:bg-blue-700 absolute right-10 bottom-10 z-50" // Changed to bg-blue-600
                onClick={() => {
                    setOpenAddEditModal({ isShown: true, type: 'add', data: null });
                }}
            >
                <MdAdd className='text-[32px] text-white'/>
            </button>
            
            <Modal
                isOpen={openAddEditModal.isShown}
                onRequestClose={() => setOpenAddEditModal({ ...openAddEditModal, isShown: false })} // Close modal
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0,0,0,0.2)',
                    },
                }}
                contentLabel='Add/Edit Notes' // Added content label for accessibility
                className='w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll' // Optional: Add a class for custom styling
            >
                <AddEditNotes 
                type={openAddEditModal.type}
                    noteData={openAddEditModal.data}
                onClose={() => {
                    setOpenAddEditModal({ isShown: false, type: 'add', data: null });
                }}
                />
            </Modal>
        </>
    );
};

export default Home;
