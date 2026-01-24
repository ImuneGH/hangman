import { useNavigate, useOutletContext } from "react-router-dom";
import "../css/components/guessLetters.css";
import type { OutletContextType } from "../types/types";
import { useEffect } from "react";

type GuessLettersProps = {
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
  guessedLetters: string[];
};

const GuessLetters = ({ setGuessedLetters, guessedLetters }: GuessLettersProps) => {
  const { gameData } = useOutletContext<OutletContextType>();
  const navigate = useNavigate();

  const letterClicked = (letter: string) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((prev) => [...prev, letter]);
      gameData.attempts++;
      !gameData.hiddenWord.includes(letter) && gameData.mistakes++;
    }
  };

  useEffect(() => {
    const setHiddenWord = new Set(gameData.hiddenWord);
    const arrayHiddenWord = Array.from(setHiddenWord);
    let isVictory = false;
    isVictory = arrayHiddenWord.every((letter) => guessedLetters.includes(letter));
    if (isVictory) {
      navigate("/Result");
    }
    // console.log(guessedLetters);
    // console.log(isVictory);
    // console.log(arrayHiddenWord);
  }, [guessedLetters]);

  return (
    <div className="guess-letters">
      <h3>Hádej písmena</h3>
      <div className="letters">
        {gameData.letters.map((letter: string) => (
          <button
            key={letter}
            className={!guessedLetters.includes(letter) ? "letter" : gameData.hiddenWord.includes(letter) ? "correct-letter letter" : "guessed-letter letter"}
            onClick={() => letterClicked(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GuessLetters;
