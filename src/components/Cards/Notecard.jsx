import React from 'react';
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const Notecard = ({ 
  title,
  date, 
  time, // Added time prop
  content,
  isPinned, 
  OnEdit,
  OnDelete,     
  onPinNote,
}) => {
  return (
    <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out relative">
      <MdOutlinePushPin 
        className={`absolute top-2 right-2 icon-btn ${isPinned ? 'text-blue-500' : 'text-slate-300'}`} 
        onClick={onPinNote} 
      />
      <h6 className='text-sm font-medium'>{title}</h6>

      <p className='text-xs text-black-600 mt-2'>{content?.slice(0, 60)}{content?.length > 60 ? '...' : ''}</p>

      <div className='flex items-center justify-between mt-2'>
        <div className='flex flex-col text-xs text-slate-500'>
          <span>{date}</span> {/* Display date */}
          <span>{time}</span> {/* Display time */}
        </div>

        <div className='flex items-center gap-2 mt-2'>
          <MdCreate 
            className='icon-btn hover:text-green-600 cursor-pointer'
            onClick={OnEdit}
          />
          <MdDelete 
            className='icon-btn hover:text-red-500 cursor-pointer'
            onClick={OnDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default Notecard;