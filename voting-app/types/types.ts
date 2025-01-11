export interface PolicyProposal {
  id: string;
  title: string;
  description: string;
}

export interface VoteResult {
  [key: string]: 'left' | 'right';
}

