import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lightbulb } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();
  const [isOn, setIsOn] = useState(true); // state to track if the bulb is "on"

  // Toggle the bulb on/off every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOn(prev => !prev);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className='min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white'>
      <div className='text-6xl mb-4'>
        {/* Conditionally render the bulb on/off based on isOn state */}
        {isOn ? <Lightbulb className="text-yellow-400" size={70} /> : <Lightbulb size={70} />}
      </div>
      <p className='text-3xl mb-4'>Page Not Found</p>
      <button 
        onClick={handleGoHome} 
        className='px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition'
      >
        Go Home
      </button>
    </div>
  );
}

export default NotFound;
