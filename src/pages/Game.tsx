import "../css/pages/game.css";
import GameInfo from "../components/GameInfo";
import Solution from "../components/Solution";
import GuessLetters from "../components/GuessLetters";
import GuessWord from "../components/GuessWord";
import { useState, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import type { OutletContextType } from "../types/types";

const Game = () => {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const { setResultMessage, gameData, setGameData, formData } = useOutletContext<OutletContextType>();
  const navigate = useNavigate();

  useEffect(() => {
    const setHiddenWord = new Set(gameData.hiddenWord);
    const arrayHiddenWord = Array.from(setHiddenWord);
    let isVictory = false;
    isVictory = arrayHiddenWord.every((letter) => guessedLetters.includes(letter));
    if (isVictory) {
      setGameData((prev) => ({ ...prev, status: "victory" }));
    }
  }, [guessedLetters]);

  useEffect(() => {
    if (gameData.status === "victory") {
      navigate("/Result");
      setResultMessage(`Gratuluji ${formData.nickname}! Vyhrál(a) jsi! Tajenka byla: ${gameData.hiddenWord}`);
    } else if (gameData.status === "lose") {
      navigate("/Result");
    }
  }, [gameData.status]);

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
