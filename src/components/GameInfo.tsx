import "../css/components/gameInfo.css";

const GameInfo = () => {
  return (
    <div className="game-info">
      <span className="nick">Přezdívka: Nick</span>
      <span className="attempts">Počet pokusů: X</span>
      <span className="faults">Počet chyb: Y</span>
      <div className="hangman-img">vyhrazeno pro šibenici</div>
    </div>
  );
};

export default GameInfo;
