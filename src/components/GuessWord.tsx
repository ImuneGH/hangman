import { useOutletContext } from "react-router-dom";
import "../css/components/guessWord.css";
import type { OutletContextType } from "../types/types";
import { useState } from "react";

type GuessWordProps = {
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
};

const GuessWord = ({ setGuessedLetters }: GuessWordProps) => {
  const [handleWord, setHandleWord] = useState<string>("");
  const { gameData, setGameData } = useOutletContext<OutletContextType>();

  const guessWholeWord = () => {
    const formattedWord = handleWord
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    setGameData((prev) => ({ ...prev, attempts: prev.attempts + 1 }));
    if (formattedWord === gameData.hiddenWord) {
      const victoryLetters = formattedWord.split("");
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
