import "../css/pages/game.css";
import GameInfo from "../components/GameInfo";
import Solution from "../components/Solution";
import GuessLetters from "../components/GuessLetters";
import GuessWord from "../components/GuessWord";

const Game = () => {
  return (
    <div className="game-layout">
      <GameInfo />
      <Solution />
      <GuessLetters />
      <GuessWord />
    </div>
  );
};

export default Game;
