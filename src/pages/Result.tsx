import { useNavigate, useOutletContext } from "react-router-dom";
import "../css/pages/result.css";
import type { OutletContextType } from "../types/types";
import { difficultyLabel } from "../constants/difficultyLabels";
import { themeLabel } from "../constants/themeLabels";

const Result = () => {
  const { resultMessage, gameData, startGame, formData } = useOutletContext<OutletContextType>();
  const navigete = useNavigate();

  const backToHomepage = () => {
    navigete("/");
  };

  return (
    <div className="result">
      <span className="final-message">{resultMessage}</span>
      <span className="final-word">
        Tajenka: <strong>{gameData.hiddenWord}</strong>
      </span>
      <span className="result-theme">Téma: {themeLabel[formData.theme]}</span>
      <span className="result-difficulty">Obtížnost: {difficultyLabel[formData.difficulty]}</span>
      <span className="attempts">Počet pokusů: {gameData.attempts}</span>
      <span className="faults">Počet chyb: {gameData.mistakes}</span>
      <button className="play-again-btn" onClick={startGame}>
        Hraj znovu
      </button>
      <button className="home-btn" onClick={backToHomepage}>
        Vrať se na hlavní stranu
      </button>
    </div>
  );
};

export default Result;
