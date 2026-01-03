import "../css/components/gameInfo.css";
import GallowsImg from "./GallowsImg";
import { useOutletContext } from "react-router-dom";
import type { OutletContextType } from "../types/types";

const GameInfo = () => {
  const { nickname } = useOutletContext<OutletContextType>();

  return (
    <div className="game-info">
      <span className="nick">Přezdívka: {nickname}</span>
      <span className="attempts">Počet pokusů: X</span>
      <span className="faults">Počet chyb: Y</span>
      <div className="hangman-img">
        <GallowsImg />
      </div>
    </div>
  );
};

export default GameInfo;
