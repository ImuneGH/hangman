import "../css/components/gameInfo.css";
import GallowsImg from "./GallowsImg";
import { useOutletContext } from "react-router-dom";
import type { OutletContextType } from "../types/types";
import { difficultyLabel } from "../constants/difficultyLabels";
import { themeLabel } from "../constants/themeLabels";

type GameInfoProps = {
  guessedLetters: string[];
  setAnimationCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  gallowsProgress: number;
  setGallowsProgress: React.Dispatch<React.SetStateAction<number>>;
};

const GameInfo = ({ guessedLetters, setAnimationCompleted, gallowsProgress, setGallowsProgress }: GameInfoProps) => {
  const { formData, gameData } = useOutletContext<OutletContextType>();

  return (
    <div className="game-info">
      <span className="nick">Přezdívka: {formData.nickname}</span>
      <span className="ingame-theme">Téma: {themeLabel[formData.theme]}</span>
      <span className="ingame-difficulty">Obtížnost: {difficultyLabel[formData.difficulty]}</span>
      <span className="attempts">Počet pokusů: {gameData.attempts}</span>
      <span className="faults">Počet chyb: {gameData.mistakes}</span>
      <div className="hangman-img">
        <GallowsImg gallowsProgress={gallowsProgress} setGallowsProgress={setGallowsProgress} guessedLetters={guessedLetters} setAnimationCompleted={setAnimationCompleted} />
      </div>
    </div>
  );
};

export default GameInfo;
