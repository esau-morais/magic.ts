import { SyntheticEvent } from "react";
import Logo from "../../assets/Cover.jpeg?url";
import { AgentType } from "../../lib/types";

export default function SingleCard({
  agent,
  handleChoice,
  flipped,
  disabled,
}: AgentType) {
  const handleAgentCoverClick = () => {
    if (!disabled) handleChoice(agent);
  };

  return (
    <div
      className="relative outline-none focus:ring-4 focus:ring-red-500/80"
      tabIndex={0}
    >
      <div className={`${disabled && "cursor-not-allowed"}`}>
        <img
          className={`absolute ${flipped ? "" : "hidden"}`}
          src={agent.url}
          alt="Agent card"
        />
        <img
          src={Logo}
          alt="Cover agent card"
          onClick={handleAgentCoverClick}
        />
      </div>
    </div>
  );
}
