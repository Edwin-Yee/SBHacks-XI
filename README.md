### SBHacks XI Hackathon
Developers: Edwin Yee, William Su, Cooper Dalton
Date: Jan 11th, 2025

## Quick Start
1. Clone the GitHub Repository:
- git clone https://github.com/Edwin-Yee/SBHacks-XI/
- cd SBHacks-XI
- cd voting-app

2. Install npm
```npm install```

3. Run the test server:
```npm run dev```

4. Open http://localhost:3000 in your browser.

For executing contracts on Midnight you will need to have a Midnight wallet and a proof server. Please follow instructions in the following link: https://docs.midnight.network/develop/tutorial/using/prereqs

## Inspiration
When voting for school policies, we often felt stressed about how the people collecting our votes would judge our decisions. Voting for associated student board members and school policies influences every student in the university, yet many students are reluctant to vote due to privacy concerns about how their data is used. VotEdu enables students to vote in complete privacy by utilizing the Midnight blockchain technology to securely create smart contracts containing information about their vote (Yay/Nay). School administrators can see aggregate statistics but cannot deduce the identity of the individual as their persona is encrypted.

## What it does
VotEdu uses Google's Authentication platform to validate that the user's profile is coming from an educational domain (.edu). Once the user logs in, they are able to connect their Smart Wallet to the application to enable the creation of smart contracts. We ran into difficulties developing with Midnight and received loads of assistance from the amazing folks at Major League Hacking to debug and plan the next steps of our code. Working together, we found out that Midnight's faucet was unfortunately down. So, instead, we quickly pivoted to creating the web app to mimic what the app would have looked like with blockchain-powered, verifiable smart contracts. Our minimalistic user interface improves upon the clunky, difficult-to-navigate voting websites for universities.

## How we built it
The front end of our app was built using React.js and Typescript. We also used Google Cloud for the Google Authorization. We initially were going to build the blockchain part of the app with Midnight, but unfortunately, it was down, so we had to pivot to Solana.

## Challenges we ran into
Our initial plan to build on the Midnight test net faced significant technical difficulties, forcing us to pivot to the Solana blockchain. This transition presented its own set of challenges, as we had to work with Rust - a programming language that was new to our team. We encountered difficulties implementing Anchor (Solana's development framework) and establishing a connection between our front-end interface and smart contracts.

## Accomplishments that we're proud of:
We are extremely proud of our front end. We tried to make voting as engaging as possible to increase student engagement which we believed we accomplished with the swiping feature. We are also proud of our simple yet secure login utilizing google for a friendly user experience.

## What we learned
This project provided invaluable insights into full-stack development and effective team collaboration. The experience closely mirrored real-world working environments, where cross-functional teams must coordinate and overcome technical challenges together. We learned about blockchain technology, its practical applications, and the intricacies of smart contract development. While we faced obstacles, this experience has laid a strong foundation for our future work in developing decentralized applications (dApps). With just a little more practice, we're confident in our ability to build more complex blockchain solutions.

## What's next for VotEdu:
We believe VotEdu has so much potential. First allowing for more complex data collection so more complex survey forms can be posted. Additionally, creating classrooms so students can anonymously post questions and answer boards completely anonymously. Clubs could also utilize our tech for voting on club activities and electing officers. Finally, we are expanding beyond schools and allowing companies and the public to use our blockchain-powered voting/survey systems.


Navbar Code Inspired By: [https://github.com/ErickRomeroDev/hackathon-midnight-2/blob/main/README.mds](https://github.com/ErickRomeroDev/hackathon-midnight-2)
