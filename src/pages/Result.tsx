import { useNavigate, useOutletContext } from "react-router-dom";
import "../css/pages/result.css";
import type { OutletContextType } from "../types/types";

const Result = () => {
  const { resultMessage, gameData, setGameData } = useOutletContext<OutletContextType>();
  const navigete = useNavigate();

  const backToHomepage = () => {
    navigete("/");
  };

  return (
    <div className="result">
      <span className="final-message">{resultMessage}</span>
      <span className="final-word">Tajenka: {gameData.hiddenWord}</span>
      <span className="attempts">Počet pokusů: {gameData.attempts}</span>
      <span className="faults">Počet chyb: {gameData.mistakes}</span>
      <button className="play-again-btn">Hraj znovu</button>
      <button className="home-btn" onClick={backToHomepage}>
        Vrať se na hlavní stranu
      </button>
    </div>
  );
};

export default Result;
