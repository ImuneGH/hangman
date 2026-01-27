import "../css/pages/game.css";
import GameInfo from "../components/GameInfo";
import Solution from "../components/Solution";
import GuessLetters from "../components/GuessLetters";
import GuessWord from "../components/GuessWord";
import { useState, useEffect } from "react";
import { Navigate, useOutletContext, useNavigate } from "react-router-dom";
import type { OutletContextType } from "../types/types";

const Game = () => {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const { setResultMessage, gameData, setGameData, formData, maxAttempts } = useOutletContext<OutletContextType>();
  const navigate = useNavigate();

  if (!gameData.hiddenWord) {
    return <Navigate to="/" replace />;
  }

  const formatWord = (word: string) => {
    return word
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  useEffect(() => {
    const formattedHiddenWord: string = formatWord(gameData.hiddenWord);
    const setHiddenWord = new Set(formattedHiddenWord);
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
      <Solution formatWord={formatWord} guessedLetters={guessedLetters} />
      <GuessLetters setGuessedLetters={setGuessedLetters} guessedLetters={guessedLetters} />
      <GuessWord formatWord={formatWord} setGuessedLetters={setGuessedLetters} />
    </div>
  );
};

export default Game;
