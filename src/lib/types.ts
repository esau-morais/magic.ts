export type AgentType = {
  agent: {
    url: string;
  }
  handleChoice: Function
  flipped: boolean
  disabled: boolean
};

export type ButtonType = {
  onCardsShuffle: () => void
}