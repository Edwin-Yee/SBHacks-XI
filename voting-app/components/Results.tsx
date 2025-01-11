import React from 'react';
import { VoteResult, PolicyProposal } from '../types/types';

interface ResultsProps {
  voteResults: VoteResult;
  policies: PolicyProposal[];
}

const Results: React.FC<ResultsProps> = ({ voteResults, policies }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-4">Your Votes</h2>
      <ul>
        {policies.map((policy) => (
          <li key={policy.id} className="mb-2">
            <span className="font-semibold">{policy.title}:</span>{' '}
            {voteResults[policy.id] === 'right' ? 'Approved' : 'Rejected'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;

