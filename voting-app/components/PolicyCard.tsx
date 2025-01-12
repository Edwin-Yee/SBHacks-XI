import React from 'react';
import { PolicyProposal } from '../types/types';

interface PolicyCardProps {
  policy: PolicyProposal;
}

const PolicyCard: React.FC<PolicyCardProps> = ({ policy }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg"> {/* Increased padding and max width */}
      <h2 className="text-3xl font-bold mb-6">{policy.title}</h2> {/* Increased font size and margin */}
      <p className="text-gray-700 text-lg">{policy.description}</p> {/* Increased font size and changed text color */}
    </div>
  );
};

export default PolicyCard;