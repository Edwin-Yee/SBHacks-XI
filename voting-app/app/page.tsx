'use client'

import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import { PolicyProposal, VoteResult } from '../types/types';
import { mockPolicies } from '../data/mockPolicies';
import PolicyCard from '../components/PolicyCard';
import SwipeButtons from '../components/SwipeButtons';
import Results from '../components/Results';

export default function Home() {
  const [policies, setPolicies] = useState<PolicyProposal[]>(mockPolicies);
  const [voteResults, setVoteResults] = useState<VoteResult>({});

  const handleSwipe = (direction: 'left' | 'right', policyId: string) => {
    setVoteResults((prev) => ({ ...prev, [policyId]: direction }));
  };

  const handleButtonSwipe = (direction: 'left' | 'right') => {
    if (policies.length > 0) {
      handleSwipe(direction, policies[policies.length - 1].id);
      setPolicies((prev) => prev.slice(0, -1));
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Policy Swiper</h1>
      {policies.length > 0 ? (
        <>
          <div className="relative w-full max-w-sm h-[400px]">
            {policies.map((policy) => (
              <TinderCard
                key={policy.id}
                onSwipe={(dir) => handleSwipe(dir as 'left' | 'right', policy.id)}
                onCardLeftScreen={() => setPolicies((prev) => prev.slice(0, -1))}
                className="absolute"
              >
                <PolicyCard policy={policy} />
              </TinderCard>
            ))}
          </div>
          <SwipeButtons onSwipe={handleButtonSwipe} />
        </>
      ) : (
        <Results voteResults={voteResults} policies={mockPolicies} />
      )}
    </main>
  );
}

