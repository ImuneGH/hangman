import { useOutletContext } from "react-router-dom";
import "../css/components/guessWord.css";
import type { OutletContextType } from "../types/types";
import { useState } from "react";

// type GuessWordProps = {};

const GuessWord = () => {
  const [handleWord, setHandleWord] = useState<string>("");
  const { gameData, setGameData } = useOutletContext<OutletContextType>();

  const guessWholeWord = () => {
    if (handleWord === gameData.hiddenWord) {
    }
    console.log(gameData.hiddenWord);
  };
  return (
    <div className="guess-word">
      <label htmlFor="guess-word">Hádej celé slovo</label>
      <div className="guess-word-container">
        <input type="text" id="guess-word" className="guess-word-input" value={handleWord} onChange={(e) => setHandleWord(e.target.value)} />
        <button onClick={() => guessWholeWord}>Hádej</button>
      </div>
    </div>
  );
};

export default GuessWord;
