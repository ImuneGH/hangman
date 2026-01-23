import { useOutletContext } from "react-router-dom";
import "../css/components/solution.css";
import type { OutletContextType } from "../types/types";

const Solution = () => {
  const { gameData } = useOutletContext<OutletContextType>();
  return (
    <div className="solution">
      <h3>Tajenka</h3>
      <div className="the-word">
        {gameData.hiddenWord.split("").map((letter) => (
          <span className="hidden-letter" key={letter}>
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Solution;
