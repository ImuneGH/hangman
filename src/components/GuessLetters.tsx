import { useOutletContext } from "react-router-dom";
import "../css/components/guessLetters.css";
import type { OutletContextType } from "../types/types";

const GuessLetters = () => {
  const { gameData } = useOutletContext<OutletContextType>();
  return (
    <div className="guess-letters">
      <h3>Hádej písmena</h3>
      <div className="letters">
        {gameData.letters.map((letter) => (
          <span className="letter">{letter}</span>
        ))}
      </div>
    </div>
  );
};

export default GuessLetters;
