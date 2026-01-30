import { useOutletContext } from "react-router-dom";
import type { OutletContextType } from "../types/types";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

type GallowsImgProps = {
  guessedLetters: string[];
};

const GallowsImg = ({ guessedLetters }: GallowsImgProps) => {
  const { maxAttempts, gameData } = useOutletContext<OutletContextType>();
  const [gallowsProgress, setGallowsProgress] = useState<number>(0);

  const gallowsAnimation = {
    start: {
      opacity: 0,
    },
    end: {
      transition: {
        duration: 1.5,
      },
      strokeDashoffset: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    const progress = gameData.mistakes * (8 / maxAttempts);
    setGallowsProgress(progress);
  }, [guessedLetters]);

  const Base = () => (
    <motion.line variants={gallowsAnimation} initial="start" animate="end" x1="10" y1="70" x2="40" y2="70" stroke="black" strokeWidth="2" strokeDasharray={30} strokeDashoffset={30} />
  );
  const Pole = () => (
    <motion.line variants={gallowsAnimation} initial="start" animate="end" x1="25" y1="70" x2="25" y2="10" stroke="black" strokeWidth="2" strokeDasharray={60} strokeDashoffset={60} />
  );
  const Beam = () => {
    return (
      <>
        <motion.line variants={gallowsAnimation} initial="start" animate="end" x1="24" y1="10" x2="60" y2="10" stroke="black" strokeWidth="2" strokeDasharray={36} strokeDashoffset={36} />
        <motion.line variants={gallowsAnimation} initial="start" animate="end" x1="25" y1="25" x2="40" y2="10" stroke="black" strokeWidth="2" strokeDasharray={25} strokeDashoffset={25} />
      </>
    );
  };
  const Rope = () => (
    <motion.line variants={gallowsAnimation} initial="start" animate="end" x1="59" y1="10" x2="59" y2="30" stroke="black" strokeWidth="2" strokeDasharray={20} strokeDashoffset={20} />
  );
  const Head = () => (
    <motion.circle
      variants={gallowsAnimation}
      initial="start"
      animate="end"
      cx={59}
      cy={35}
      r={5}
      stroke="black"
      strokeWidth={1}
      fill="none"
      strokeDasharray={31.4}
      strokeDashoffset={31.4}
    />
  );
  const Body = () => (
    <motion.line variants={gallowsAnimation} initial="start" animate="end" x1="59" y1="40" x2="59" y2="50" stroke="black" strokeWidth="2" strokeDasharray={10} strokeDashoffset={10} />
  );
  const Arms = () => {
    return (
      <>
        <motion.line variants={gallowsAnimation} initial="start" animate="end" x1="59" y1="40" x2="53" y2="46" stroke="black" strokeWidth="2" strokeDasharray={10} strokeDashoffset={10} />
        <motion.line variants={gallowsAnimation} initial="start" animate="end" x1="59" y1="40" x2="65" y2="46" stroke="black" strokeWidth="2" strokeDasharray={10} strokeDashoffset={10} />
      </>
    );
  };
  const Legs = () => {
    return (
      <>
        <motion.line variants={gallowsAnimation} initial="start" animate="end" x1="59" y1="50" x2="55" y2="57" stroke="black" strokeWidth="2" strokeDasharray={10} strokeDashoffset={10} />
        <motion.line variants={gallowsAnimation} initial="start" animate="end" x1="59" y1="50" x2="63" y2="57" stroke="black" strokeWidth="2" strokeDasharray={10} strokeDashoffset={10} />
      </>
    );
  };

  return (
    <svg viewBox="0 0 80 80" width="80" height="80">
      {gallowsProgress > 0 && <Base />}
      {gallowsProgress > 1 && <Pole />}
      {gallowsProgress > 2 && <Beam />}
      {gallowsProgress > 3 && <Rope />}
      {gallowsProgress > 4 && <Head />}
      {gallowsProgress > 5 && <Body />}
      {gallowsProgress > 6 && <Arms />}
      {gallowsProgress > 7 && <Legs />}
    </svg>
  );
};

export default GallowsImg;
