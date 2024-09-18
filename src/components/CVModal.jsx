import React from 'react';
import { X } from 'react-feather'; // Assuming you're using react-feather for icons
import sufiyanResume from '../assets/resume.pdf';

const CVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white dark:bg-gray-800 p-4 rounded w-11/12 max-w-4xl max-h-full overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-900 dark:text-gray-100"
        >
          <X size={22} />
        </button>
        <div className="overflow-auto max-h-[80vh]">
          <iframe
            src={sufiyanResume}
            className="w-full h-full"
            title="CV"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
