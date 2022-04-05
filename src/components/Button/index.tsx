import { ButtonType } from "../../lib/types";

export default function Button({ onCardsShuffle }: ButtonType) {
  return (
    <button
      className="p-2 text-white transition-colors rounded-lg outline-none cursor-pointer bg-zinc-900 hover:bg-zinc-900/90 focus:ring-4 focus:ring-red-500/80"
      onClick={onCardsShuffle}
    >
      New game
    </button>
  );
}
