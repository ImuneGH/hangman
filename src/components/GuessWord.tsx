import { useOutletContext } from "react-router-dom";
import "../css/components/guessWord.css";
import type { OutletContextType } from "../types/types";
import { useState } from "react";

type GuessWordProps = {
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
  guessedLetters: string[];
};

const GuessWord = ({ setGuessedLetters, guessedLetters }: GuessWordProps) => {
  const [handleWord, setHandleWord] = useState<string>("");
  const { gameData, setGameData } = useOutletContext<OutletContextType>();

  const guessWholeWord = () => {
    const formattedWord = handleWord.toLowerCase();
    if (formattedWord === gameData.hiddenWord) {
      const victoryLetters = formattedWord.split("");
      setGuessedLetters(victoryLetters);
    }
  };
  console.log(gameData.hiddenWord);
  return (
    <div className="guess-word">
      <label htmlFor="guess-word">Hádej celé slovo</label>
      <div className="guess-word-container">
        <input type="text" id="guess-word" className="guess-word-input" value={handleWord} onChange={(e) => setHandleWord(e.target.value)} />
        <button onClick={guessWholeWord}>Hádej</button>
      </div>
    </div>
  );
};

export default GuessWord;
