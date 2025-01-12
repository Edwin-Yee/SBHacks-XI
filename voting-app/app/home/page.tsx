'use client'

import React, { useState, useContext } from 'react';
import TinderCard from 'react-tinder-card';
import { PolicyProposal, VoteResult } from '../../types/types';
import { mockPolicies } from '../../data/mockPolicies';
import PolicyCard from '../../components/PolicyCard';
import SwipeButtons from '../../components/SwipeButtons';
import Results from '../../components/Results';
import Modal from '../../components/Modal';
import { Navbar } from "../../components/navbar";
import Image from "next/image";
import AppWalletProvider from "../../components/AppWalletProvider";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
 
export default function Home() {
  const ValidEmails = ["cooperdalton@ucsb.edu"];
  const [policies, setPolicies] = useState<PolicyProposal[]>(mockPolicies);
  const [voteResults, setVoteResults] = useState<VoteResult>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const storedUser = localStorage.getItem('user');
  let email = "";
  if (storedUser) {
    email = JSON.parse(storedUser).email;
  }
  console.log(email);

  const handleSwipe = (direction: 'left' | 'right', policyId: string) => {
    setVoteResults((prev) => ({ ...prev, [policyId]: direction }));
  };

  const handleButtonSwipe = (direction: 'left' | 'right') => {
    if (policies.length > 0) {
      handleSwipe(direction, policies[policies.length - 1].id);
      setPolicies((prev) => prev.slice(0, -1));
    }
  };

  const addNewPolicy = (title: string, description: string) => {
    const newPolicy: PolicyProposal = {
      id: `policy-${policies.length + 1}`,
      title,
      description,
    };
    setPolicies((prev) => [...prev, newPolicy]);
  };

  var emailIsValid = ValidEmails.includes(email);

  return (
    <AppWalletProvider children={
      <div>
        <Navbar></Navbar>

        <main className="flex min-h-screen flex-col items-center justify-center p-24">
          <Image
            src="/gradient-bg-new.png"
            layout="fill" 
            objectFit="cover" 
            objectPosition="center" 
            alt="Background"
            quality={100} 
            priority 
            className="absolute -z-10" 
          ></Image>


          <h1 className="text-4xl font-bold mb-8">Policy Swiper</h1>

          <div className="border hover:border-slate-900 rounded">
            <WalletMultiButton style={{}} />
          </div>
        
          {emailIsValid && 
            <button
                onClick={() => setIsModalOpen(true)}
                className="mb-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
              >
                Add New Policy
            </button>
          }

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={addNewPolicy}
          />

          {policies.length > 0 ? (
            <>
              {/* <div className="relative w-full max-w-sm h-[400px]"> */}
              <div className="grid grid-cols-3 gap-4 w-full max-w-4xl">
                {policies.map((policy) => (
                  <div
                    key={policy.id}
                    className="relative w-full h-[300px] bg-white shadow-md rounded-lg p-4"
                  >
                    <PolicyCard policy={policy} />
                    <SwipeButtons onSwipe={(dir) => handleSwipe(dir, policy.id)} />
                  </div>

                  // Disable TinderCard for now
                  // <TinderCard
                  //   key={policy.id}
                  //   preventSwipe = {['up', 'down']}
                  //   swipeThreshold={5000000}
                  //   onSwipe={(dir) => handleSwipe(dir as 'left' | 'right', policy.id)}
                  //   onCardLeftScreen={() => setPolicies((prev) => prev.slice(0, -1))}
                  //   // className="absolute"
                  //   className="relative w-full h-[300px]"
                  // >
                  //   <PolicyCard policy={policy} />
                  //   <SwipeButtons onSwipe={(dir) => handleSwipe(dir, policy.id)} />
                  // </TinderCard>
                ))}
              </div>
              {/* <SwipeButtons onSwipe={handleButtonSwipe} /> */}
            </>
          ) : (
            <Results voteResults={voteResults} policies={mockPolicies} />
          )}
        </main>
        </div>
    }></AppWalletProvider>
  );
}
