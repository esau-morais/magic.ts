import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import Layout from "./components/Layout";
import SingleCard from "./components/SingleCard";
import { QUERY } from "./lib/constants";

function App() {
  const [cards, setCards] = useState<any[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<{url: string} | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<{url: string} | null>(null);
  const [disabled, setDisabled] = useState(false);
  const { loading, error, data } = useQuery(QUERY);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.url! === choiceTwo.url) {
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (card.url === choiceOne.url) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          })
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const onCardsShuffle = () => {
    const shuffledCards = [...data.assets, ...data.assets]
      .sort(() => Math.random() - 0.5)
      .map((agent) => ({ ...agent, id: Math.random(), matched: false }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const onAgentChoice = (card: any, e: KeyboardEvent) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <Layout>
      <Button onCardsShuffle={onCardsShuffle} />
      <div>Turns: {turns}</div>
      <div className="flex flex-wrap justify-center gap-4 my-2">
        {cards.map((agent: any) => (
          <SingleCard
            key={agent.id}
            agent={agent}
            handleChoice={onAgentChoice}
            flipped={
              agent === choiceOne || agent === choiceTwo || agent.matched
            }
            disabled={disabled}
          />
        ))}
      </div>
    </Layout>
  );
}

export default App;
