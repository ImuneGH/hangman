import "../css/pages/game.css";
import GameInfo from "../components/GameInfo";
import Solution from "../components/Solution";
import GuessLetters from "../components/GuessLetters";
import GuessWord from "../components/GuessWord";
import { useState, useEffect, useRef } from "react";
import { Navigate, useOutletContext, useNavigate } from "react-router-dom";
import type { OutletContextType } from "../types/types";

const Game = () => {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const { setResultMessage, gameData, setGameData, formData, maxAttempts } = useOutletContext<OutletContextType>();
  const navigate = useNavigate();
  const [animationCompleted, setAnimationCompleted] = useState<boolean>(false);
  const [gallowsProgress, setGallowsProgress] = useState<number>(0);
  const pencilSoundRef = useRef<HTMLAudioElement>(null);

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
      navigate("/result");
    } else if (gameData.status === "lose" && animationCompleted) {
      setResultMessage(`Tentokrát to nevyšlo ${formData.nickname}, budu držet palce příští hru!`);
      navigate("/result");
    }
  }, [gameData.status, animationCompleted]);

  useEffect(() => {
    const audio: HTMLAudioElement | null = pencilSoundRef.current;
    console.log(gameData.mistakes);
    if (!audio || gameData.mistakes === 0) return;
    if (audio) {
      audio.currentTime = 0;
      audio.volume = 0.8;
      audio.play();
    }
  }, [gameData.mistakes]);

  return (
    <div className="game-layout">
      <audio ref={pencilSoundRef} src="./pencil-sound2.wav" />
      <GameInfo gallowsProgress={gallowsProgress} setGallowsProgress={setGallowsProgress} guessedLetters={guessedLetters} setAnimationCompleted={setAnimationCompleted} />
      <Solution formatWord={formatWord} guessedLetters={guessedLetters} />
      <GuessLetters gallowsProgress={gallowsProgress} formatWord={formatWord} setGuessedLetters={setGuessedLetters} guessedLetters={guessedLetters} />
      <GuessWord formatWord={formatWord} setGuessedLetters={setGuessedLetters} />
    </div>
  );
};

export default Game;
