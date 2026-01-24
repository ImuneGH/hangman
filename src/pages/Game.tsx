import "../css/pages/game.css";
import GameInfo from "../components/GameInfo";
import Solution from "../components/Solution";
import GuessLetters from "../components/GuessLetters";
import GuessWord from "../components/GuessWord";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import type { OutletContextType } from "../types/types";

const Game = () => {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const { setResultMessage } = useOutletContext<OutletContextType>();

  return (
    <div className="game-layout">
      <GameInfo />
      <Solution guessedLetters={guessedLetters} />
      <GuessLetters setGuessedLetters={setGuessedLetters} guessedLetters={guessedLetters} />
      <GuessWord setGuessedLetters={setGuessedLetters} />
    </div>
  );
};

export default Game;
