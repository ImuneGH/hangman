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
  const { setResultMessage, gameData, setGameData, formData, maxAttempts } = useOutletContext<OutletContextType>();
  const navigate = useNavigate();

  useEffect(() => {
    const setHiddenWord = new Set(gameData.hiddenWord);
    const arrayHiddenWord = Array.from(setHiddenWord);
    let isVictory = false;
    let isLose = false;
    isVictory = arrayHiddenWord.every((letter) => guessedLetters.includes(letter));
    if (isVictory) {
      setGameData((prev) => ({ ...prev, status: "victory" }));
    }
    isLose = maxAttempts === gameData.mistakes;
    if (isLose) {
      setGameData((prev) => ({ ...prev, status: "lose" }));
    }
  }, [guessedLetters]);

  useEffect(() => {
    if (gameData.status === "victory") {
      setResultMessage(`Gratuluji ${formData.nickname}! Vyhrál(a) jsi!`);
      navigate("/Result");
    } else if (gameData.status === "lose") {
      setResultMessage(`Tentokrát to nevyšlo ${formData.nickname}, budu držet palce příští hru!`);
      navigate("/Result");
    }
  }, [gameData.status]);

  return (
    <div className="game-layout">
      <GameInfo guessedLetters={guessedLetters} />
      <Solution guessedLetters={guessedLetters} />
      <GuessLetters setGuessedLetters={setGuessedLetters} guessedLetters={guessedLetters} />
      <GuessWord setGuessedLetters={setGuessedLetters} />
    </div>
  );
};

export default Game;
