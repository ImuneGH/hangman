import "../css/components/gameInfo.css";
import GallowsImg from "./GallowsImg";
import { useOutletContext } from "react-router-dom";
import type { OutletContextType } from "../types/types";

type GameInfoProps = {
  guessedLetters: string[];
};

const GameInfo = ({ guessedLetters }: GameInfoProps) => {
  const { formData, gameData } = useOutletContext<OutletContextType>();

  return (
    <div className="game-info">
      <span className="nick">Přezdívka: {formData.nickname}</span>
      <span className="attempts">Počet pokusů: {gameData.attempts}</span>
      <span className="faults">Počet chyb: {gameData.mistakes}</span>
      <div className="hangman-img">
        <GallowsImg guessedLetters={guessedLetters} />
      </div>
    </div>
  );
};

export default GameInfo;
