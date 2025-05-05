import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';

const AddEditNotes = ({ noteData, type, onClose }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);

    // Add Note
    const addNewNote = async () => {
        // Implement your logic to add a new note here
        console.log('Adding new note:', { title, content });
        // After adding the note, you might want to reset the fields or close the modal
    };

    // Edit Note
    const editNote = async () => {
        // Implement your logic to edit the note here
        console.log('Editing note:', { title, content });
        // After editing the note, you might want to reset the fields or close the modal
    };

    const handleAddNote = () => {
        if (!title) {
            setError('Please enter the title');
            return;
        }

        if (!content) {
            setError('Please enter the content');
            return;
        }

        setError(''); 

        if (type === 'edit') { // Fixed the if statement syntax
            editNote();
        } else {
            addNewNote();
        }
    };

    return (
        <div className='relative'>
            <button
                className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-red-300'
                onClick={onClose} // Corrected prop name to onClose
            >
                <MdClose className='text-xl text-slate-400' />
            </button>

            <div className='flex flex-col gap-2'>
                <label className='input-label'>TITLE</label>
                <input
                    type='text'
                    className='text-2xl text-slate-950 outline-none'
                    placeholder='Your title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className='flex flex-col gap-2 mt-4'>
                <label className='input-label'>CONTENT</label>
                <textarea
                    className='text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded'
                    placeholder='Content'
                    rows={10}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>

            {error && <p className='text-red-500 text-xs pt-4'>{error}</p>} {/* Fixed closing tag */}

            <button 
                className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium mt-5 p-3 rounded'
                onClick={handleAddNote} // Corrected onClick placement
            >
                {type === 'edit' ? 'EDIT' : 'ADD'} {/* Change button text based on type */}
            </button>
        </div>
    );
};

export default AddEditNotes;