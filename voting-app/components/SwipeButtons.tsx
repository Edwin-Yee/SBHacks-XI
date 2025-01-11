import React from 'react';
import { FiX, FiCheck } from 'react-icons/fi';

interface SwipeButtonsProps {
  onSwipe: (direction: 'left' | 'right') => void;
}

const SwipeButtons: React.FC<SwipeButtonsProps> = ({ onSwipe }) => {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <button
        onClick={() => onSwipe('left')}
        className="bg-red-500 text-white p-4 rounded-full hover:bg-red-600 transition-colors"
      >
        <FiX size={24} />
      </button>
      <button
        onClick={() => onSwipe('right')}
        className="bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition-colors"
      >
        <FiCheck size={24} />
      </button>
    </div>
  );
};

export default SwipeButtons;

