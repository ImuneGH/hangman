import "../css/pages/game.css";
import GameInfo from "../components/GameInfo";
import Solution from "../components/Solution";
import GuessLetters from "../components/GuessLetters";
import GuessWord from "../components/GuessWord";
import { useState } from "react";

const Game = () => {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className="game-layout">
      <GameInfo />
      <Solution guessedLetters={guessedLetters} />
      <GuessLetters setGuessedLetters={setGuessedLetters} guessedLetters={guessedLetters} />
      <GuessWord />
    </div>
  );
};

export default Game;
