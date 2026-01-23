import { useOutletContext } from "react-router-dom";
import "../css/components/solution.css";
import type { OutletContextType } from "../types/types";

type SolutionProps = {
  guessedLetters: string[];
};

const Solution = ({ guessedLetters }: SolutionProps) => {
  const { gameData } = useOutletContext<OutletContextType>();
  return (
    <div className="solution">
      <h3>Tajenka</h3>
      <div className="the-word">
        {gameData.hiddenWord.split("").map((letter, i) => (
          <span className="hidden-letter" key={i}>
            {guessedLetters.includes(letter) ? letter : "_"}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Solution;
