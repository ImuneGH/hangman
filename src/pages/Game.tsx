import "../css/pages/game.css";
import GameInfo from "../components/GameInfo";
import Solution from "../components/Solution";
import GuessLetters from "../components/GuessLetters";
import TextInput from "../components/TextInput";
import type { OutletContextType } from "../types/types";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Game = () => {
  const { label, setLabel } = useOutletContext<OutletContextType>();
  useEffect(() => {
    setLabel("Hádej celé slovo");
  }, []);

  return (
    <div className="game-layout">
      <GameInfo />
      <Solution />
      <GuessLetters />
      <TextInput label={label} />
    </div>
  );
};

export default Game;
