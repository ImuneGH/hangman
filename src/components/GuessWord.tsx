import { useOutletContext } from "react-router-dom";
import "../css/components/guessWord.css";
import type { OutletContextType } from "../types/types";
import { useState } from "react";

type GuessWordProps = {
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
  formatWord: (word: string) => string;
};

const GuessWord = ({ setGuessedLetters, formatWord }: GuessWordProps) => {
  const [handleWord, setHandleWord] = useState<string>("");
  const { gameData, setGameData } = useOutletContext<OutletContextType>();

  const guessWholeWord = () => {
    const formattedGuessedWord: string = formatWord(handleWord);
    const formattedHiddenWord: string = formatWord(gameData.hiddenWord);
    setGameData((prev) => ({ ...prev, attempts: prev.attempts + 1 }));
    if (formattedGuessedWord === formattedHiddenWord) {
      const victoryLetters = formattedGuessedWord.split("");
      setGuessedLetters(victoryLetters);
    } else {
      setGameData((prev) => ({ ...prev, status: "lose" }));
    }
  };

  return (
    <div className="guess-word">
      <label htmlFor="guess-word">Hádej celé slovo</label>
      <div className="guess-word-container">
        <input
          onKeyUp={(e) => e.key === "Enter" && guessWholeWord()}
          autoComplete="off"
          type="text"
          id="guess-word"
          className="guess-word-input"
          value={handleWord}
          onChange={(e) => setHandleWord(e.target.value)}
        />
        <button onClick={guessWholeWord}>Hádej</button>
      </div>
    </div>
  );
};

export default GuessWord;
