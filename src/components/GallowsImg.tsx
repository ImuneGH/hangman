import { useOutletContext } from "react-router-dom";
import type { OutletContextType } from "../types/types";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

type GallowsImgProps = {
  guessedLetters: string[];
  setAnimationCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  gallowsProgress: number;
  setGallowsProgress: React.Dispatch<React.SetStateAction<number>>;
};

type HasAnimated = {
  base: boolean;
  pole: boolean;
  beam: boolean;
  rope: boolean;
  head: boolean;
  body: boolean;
  arms: boolean;
  legs: boolean;
};

const GallowsImg = ({ guessedLetters, setAnimationCompleted, gallowsProgress, setGallowsProgress }: GallowsImgProps) => {
  const { maxAttempts, gameData } = useOutletContext<OutletContextType>();

  const hasAnimated = useRef<HasAnimated>({
    base: false,
    pole: false,
    beam: false,
    rope: false,
    head: false,
    body: false,
    arms: false,
    legs: false,
  });

  const gallowsAnimation = {
    start: {
      opacity: 1,
    },
    end: {
      transition: {
        duration: 1,
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
    <motion.line
      variants={gallowsAnimation}
      initial="start"
      animate={!hasAnimated.current.base ? "end" : undefined}
      onAnimationStart={() => (hasAnimated.current.base = true)}
      x1="10"
      y1="70"
      x2="40"
      y2="70"
      stroke="black"
      strokeWidth="2"
      strokeDasharray={hasAnimated.current.base ? 0 : 30}
      strokeDashoffset={hasAnimated.current.base ? 0 : 30}
    />
  );
  const Pole = () => (
    <motion.line
      variants={gallowsAnimation}
      initial="start"
      animate={!hasAnimated.current.pole ? "end" : undefined}
      x1="25"
      y1="70"
      x2="25"
      y2="10"
      stroke="black"
      strokeWidth="2"
      onAnimationStart={() => (hasAnimated.current.pole = true)}
      strokeDasharray={hasAnimated.current.pole ? 0 : 60}
      strokeDashoffset={hasAnimated.current.pole ? 0 : 60}
    />
  );
  const Beam = () => {
    return (
      <>
        <motion.line
          variants={gallowsAnimation}
          initial="start"
          animate={!hasAnimated.current.beam ? "end" : undefined}
          x1="24"
          y1="10"
          x2="60"
          y2="10"
          stroke="black"
          strokeWidth="2"
          onAnimationStart={() => (hasAnimated.current.beam = true)}
          strokeDasharray={hasAnimated.current.beam ? 0 : 36}
          strokeDashoffset={hasAnimated.current.beam ? 0 : 36}
        />
        <motion.line
          variants={gallowsAnimation}
          initial="start"
          animate={!hasAnimated.current.beam ? "end" : undefined}
          x1="25"
          y1="25"
          x2="40"
          y2="10"
          stroke="black"
          strokeWidth="2"
          onAnimationStart={() => (hasAnimated.current.beam = true)}
          strokeDasharray={hasAnimated.current.beam ? 0 : 25}
          strokeDashoffset={hasAnimated.current.beam ? 0 : 25}
        />
      </>
    );
  };
  const Rope = () => (
    <motion.line
      variants={gallowsAnimation}
      initial="start"
      animate={!hasAnimated.current.rope ? "end" : undefined}
      x1="59"
      y1="10"
      x2="59"
      y2="30"
      stroke="black"
      strokeWidth="2"
      onAnimationStart={() => (hasAnimated.current.rope = true)}
      strokeDasharray={hasAnimated.current.rope ? 0 : 20}
      strokeDashoffset={hasAnimated.current.rope ? 0 : 20}
    />
  );
  const Head = () => (
    <motion.circle
      variants={gallowsAnimation}
      initial="start"
      animate={!hasAnimated.current.head ? "end" : undefined}
      cx={59}
      cy={35}
      r={5}
      stroke="black"
      strokeWidth={1}
      fill="none"
      onAnimationStart={() => (hasAnimated.current.head = true)}
      strokeDasharray={hasAnimated.current.head ? 0 : 31.4}
      strokeDashoffset={hasAnimated.current.head ? 0 : 31.4}
    />
  );
  const Body = () => (
    <motion.line
      variants={gallowsAnimation}
      initial="start"
      animate={!hasAnimated.current.body ? "end" : undefined}
      x1="59"
      y1="40"
      x2="59"
      y2="50"
      stroke="black"
      strokeWidth="2"
      onAnimationStart={() => (hasAnimated.current.body = true)}
      strokeDasharray={hasAnimated.current.body ? 0 : 10}
      strokeDashoffset={hasAnimated.current.body ? 0 : 10}
    />
  );
  const Arms = () => {
    return (
      <>
        <motion.line
          variants={gallowsAnimation}
          initial="start"
          animate={!hasAnimated.current.arms ? "end" : undefined}
          x1="59"
          y1="40"
          x2="53"
          y2="46"
          stroke="black"
          strokeWidth="2"
          onAnimationStart={() => (hasAnimated.current.arms = true)}
          strokeDasharray={hasAnimated.current.arms ? 0 : 10}
          strokeDashoffset={hasAnimated.current.arms ? 0 : 10}
        />
        <motion.line
          variants={gallowsAnimation}
          initial="start"
          animate={!hasAnimated.current.arms ? "end" : undefined}
          x1="59"
          y1="40"
          x2="65"
          y2="46"
          stroke="black"
          strokeWidth="2"
          onAnimationStart={() => (hasAnimated.current.arms = true)}
          strokeDasharray={hasAnimated.current.arms ? 0 : 10}
          strokeDashoffset={hasAnimated.current.arms ? 0 : 10}
        />
      </>
    );
  };
  const Legs = () => {
    return (
      <>
        <motion.line
          variants={gallowsAnimation}
          initial="start"
          animate={!hasAnimated.current.legs ? "end" : undefined}
          x1="59"
          y1="50"
          x2="55"
          y2="57"
          stroke="black"
          strokeWidth="2"
          onAnimationStart={() => (hasAnimated.current.legs = true)}
          strokeDasharray={hasAnimated.current.legs ? 0 : 10}
          strokeDashoffset={hasAnimated.current.legs ? 0 : 10}
        />
        <motion.line
          variants={gallowsAnimation}
          initial="start"
          animate={!hasAnimated.current.legs ? "end" : undefined}
          x1="59"
          y1="50"
          x2="63"
          y2="57"
          stroke="black"
          strokeWidth="2"
          onAnimationStart={() => (hasAnimated.current.legs = true)}
          onAnimationComplete={() => setAnimationCompleted(true)}
          strokeDasharray={hasAnimated.current.legs ? 0 : 10}
          strokeDashoffset={hasAnimated.current.legs ? 0 : 10}
        />
      </>
    );
  };

  return (
    <motion.svg viewBox="0 0 80 80" width="80" height="80">
      {gallowsProgress > 0 && <Base />}
      {gallowsProgress > 1 && <Pole />}
      {gallowsProgress > 2 && <Beam />}
      {gallowsProgress > 3 && <Rope />}
      {gallowsProgress > 4 && <Head />}
      {gallowsProgress > 5 && <Body />}
      {gallowsProgress > 6 && <Arms />}
      {gallowsProgress > 7 && <Legs />}
    </motion.svg>
  );
};

export default GallowsImg;
