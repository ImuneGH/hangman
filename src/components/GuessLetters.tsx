import { useOutletContext } from "react-router-dom";
import "../css/components/guessLetters.css";
import type { OutletContextType } from "../types/types";

type GuessLettersProps = {
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
  guessedLetters: string[];
};

const GuessLetters = ({ setGuessedLetters, guessedLetters }: GuessLettersProps) => {
  const { gameData, setGameData } = useOutletContext<OutletContextType>();

  const letterClicked = (letter: string) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((prev) => [...prev, letter]);
      setGameData((prev) => ({ ...prev, attempts: prev.attempts + 1 }));
      !gameData.hiddenWord.includes(letter) && setGameData((prev) => ({ ...prev, mistakes: prev.mistakes + 1 }));
    }
  };

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
