import "../css/pages/result.css";

const Result = () => {
  return (
    <div className="result">
      <span className="final-message">Gratuluji "nick"! Vyhrál(a) jsi!</span>
      <span className="attempts">Počet pokusů: X</span>
      <span className="faults">Počet chyb: Y</span>
      <button className="play-again-btn">Hraj znovu</button>
      <button className="home-btn">Vrať se na hlavní stranu</button>
    </div>
  );
};

export default Result;
