import React from 'react';
import { PolicyProposal } from '../types/types';

interface PolicyCardProps {
  policy: PolicyProposal;
}

const PolicyCard: React.FC<PolicyCardProps> = ({ policy }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-4">{policy.title}</h2>
      <p className="text-gray-600">{policy.description}</p>
    </div>
  );
};

export default PolicyCard;

