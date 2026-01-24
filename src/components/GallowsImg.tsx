import { useOutletContext } from "react-router-dom";
import type { OutletContextType } from "../types/types";
import { useEffect, useState } from "react";

type GallowsImgProps = {
  guessedLetters: string[];
};

const GallowsImg = ({ guessedLetters }: GallowsImgProps) => {
  const { maxAttempts, gameData } = useOutletContext<OutletContextType>();
  const [gallowsProgress, setGallowsProgress] = useState<number>(0);

  useEffect(() => {
    const progress = gameData.mistakes * (8 / maxAttempts);
    setGallowsProgress(progress);
  }, [guessedLetters]);

  const Base = () => <line x1="10" y1="70" x2="40" y2="70" stroke="black" strokeWidth="2" />;
  const Pole = () => <line x1="25" y1="70" x2="25" y2="10" stroke="black" strokeWidth="2" />;
  const Beam = () => {
    return (
      <>
        <line x1="24" y1="10" x2="60" y2="10" stroke="black" strokeWidth="2" />
        <line x1="25" y1="25" x2="40" y2="10" stroke="black" strokeWidth="2" />
      </>
    );
  };
  const Rope = () => <line x1="59" y1="10" x2="59" y2="30" stroke="black" strokeWidth="2" />;
  const Head = () => <circle cx={59} cy={35} r={5} stroke="black" strokeWidth={1} fill="none" />;
  const Body = () => <line x1="59" y1="40" x2="59" y2="50" stroke="black" strokeWidth="2" />;
  const Arms = () => {
    return (
      <>
        <line x1="59" y1="40" x2="53" y2="46" stroke="black" strokeWidth="2" />
        <line x1="59" y1="40" x2="65" y2="46" stroke="black" strokeWidth="2" />
      </>
    );
  };
  const Legs = () => {
    return (
      <>
        <line x1="59" y1="50" x2="55" y2="57" stroke="black" strokeWidth="2" />
        <line x1="59" y1="50" x2="63" y2="57" stroke="black" strokeWidth="2" />
      </>
    );
  };

  return (
    <svg viewBox="0 0 80 80" width="80" height="80">
      {gallowsProgress > 0 && <Base />}
      {gallowsProgress > 0 && <Pole />}
      {gallowsProgress > 0 && <Beam />}
      {gallowsProgress > 0 && <Rope />}
      {gallowsProgress > 0 && <Head />}
      {gallowsProgress > 0 && <Body />}
      {gallowsProgress > 0 && <Arms />}
      {gallowsProgress > 0 && <Legs />}
    </svg>
  );
};

export default GallowsImg;
