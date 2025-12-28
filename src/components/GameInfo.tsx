import "../css/components/gameInfo.css";
import GallowsImg from "./GallowsImg";

const GameInfo = () => {
  return (
    <div className="game-info">
      <span className="nick">Přezdívka: Nick</span>
      <span className="attempts">Počet pokusů: X</span>
      <span className="faults">Počet chyb: Y</span>
      <div className="hangman-img">
        <GallowsImg />
      </div>
    </div>
  );
};

export default GameInfo;
