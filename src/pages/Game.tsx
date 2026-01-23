import "../css/pages/game.css";
import GameInfo from "../components/GameInfo";
import Solution from "../components/Solution";
import GuessLetters from "../components/GuessLetters";
import GuessWord from "../components/GuessWord";
import { useState } from "react";
// import { useOutletContext } from "react-router-dom";
// import type { OutletContextType } from "../types/types";

const Game = () => {
  // const { formData } = useOutletContext<OutletContextType>();
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className="game-layout">
      <GameInfo />
      <Solution />
      <GuessLetters setGuessedLetters={setGuessedLetters} guessedLetters={guessedLetters} />
      <GuessWord />
    </div>
  );
};

export default Game;
