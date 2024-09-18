import React from 'react';
import sufiyanResume from '../assets/resume.pdf'

const CVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-4 rounded">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-900 dark:text-gray-100">
          <X size={22} />
        </button>
        <iframe
          src={sufiyanResume} // Update this path to the location of your CV file
          className="w-full h-screen"
          title="CV"
        ></iframe>
      </div>
    </div>
  );
};

export default CVModal;
