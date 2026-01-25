import "./css/app.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { GameData, OutletContextType } from "./types/types";

type FormData = {
  nickname: string;
  theme: string | null;
  difficulty: "easy" | "medium" | "hard" | null;
};

type GameWords = {
  food: GameCategory;
  profession: GameCategory;
  programming: GameCategory;
  sport: GameCategory;
  geography: GameCategory;
  animals: GameCategory;
};

type GameCategory = {
  theme: string;
  words: string[];
};

function App() {
  const [formData, setFormData] = useState<FormData>({ nickname: "", theme: null, difficulty: null });
  const [gameData, setGameData] = useState<GameData>({
    hiddenWord: "",
    attempts: 0,
    mistakes: 0,
    letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    status: "inGame",
  });
  const [gameWords, setGameWords] = useState<GameWords | null>(null);
  const [maxAttempts, setMaxAttempts] = useState<number | null>(null);
  const [savedNickname, setSavedNickname] = useState<string | null>(localStorage.getItem("nickname"));
  const [nickname, setNickname] = useState<string>("");
  const [resultMessage, setResultMessage] = useState<string>("");
  const [changeNicknameActive, setChangeNicknameActive] = useState<boolean>(false);
  const [localStorageNickname, setLocalStorageNickname] = useState<boolean>(false);
  const navigate = useNavigate();
  const [errorModalActive, setErrorModalActive] = useState<boolean>(false);
  const [errorMessage, setErrorMessagae] = useState<string>("");
  const [inputError, setInputError] = useState<{ nickname: boolean; theme: boolean; difficulty: boolean }>({ nickname: false, theme: false, difficulty: false });

  const fetchGameWords = async () => {
    try {
      const response = await fetch("../words.json");
      if (!response.ok) {
        throw new Error("Chyba fetche");
      }
      const words = await response.json();
      setGameWords(words);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Chyba při získávání dat: ", err.message);
      }
    }
  };

  const createHiddenWord = (words: string[]) => {
    const numberOfWords = words.length;
    const randomWordNumber = Math.floor(Math.random() * numberOfWords);
    const randomWord = words[randomWordNumber];
    return randomWord;
  };

  const createNewGame = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isError = formDataValidation();
    if (isError) {
      return;
    }
    if (changeNicknameActive || !localStorageNickname) {
      localStorage.setItem("nickname", formData.nickname);
    }
    handleDifficulty(formData.difficulty);
    setChangeNicknameActive(false);
    startGame();
  };

  const handleDifficulty = (difficulty: string | null) => {
    let numberOfAttempts = 0;
    let difficultyText = "";
    switch (difficulty) {
      case "easy":
        numberOfAttempts = 8;
        difficultyText = "Lehká";
        break;
      case "medium":
        numberOfAttempts = 6;
        difficultyText = "Střední";
        break;
      case "hard":
        numberOfAttempts = 4;
        difficultyText = "Těžká";
        break;
      default:
        console.error("No difficulty selected");
    }
    setMaxAttempts(numberOfAttempts);
  };

  const startGame = () => {
    const selectedTheme = formData.theme;
    if (selectedTheme && gameWords) {
      const generatedWord = createHiddenWord(gameWords[selectedTheme as keyof OutletContextType["gameWords"]].words);
      setGameData((prev) => ({ ...prev, hiddenWord: generatedWord, attempts: 0, mistakes: 0, status: "inGame" }));
      navigate("/Game");
    }
  };

  const formDataValidation = () => {
    const isEmptyCheck = {
      nickname: !formData.nickname,
      theme: !formData.theme,
      difficulty: !formData.difficulty,
    };
    setInputError(isEmptyCheck);
    const isError = Object.values(isEmptyCheck).includes(true);

    if (isError) {
      setErrorModalActive(true);
      setErrorMessagae("Vyplňte všechny povinná pole");
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    fetchGameWords();
  }, []);

  return (
    <div className="wrapper">
      <Outlet
        context={{
          nickname,
          setNickname,
          savedNickname,
          setSavedNickname,
          maxAttempts,
          setMaxAttempts,
          gameWords,
          formData,
          setFormData,
          gameData,
          setGameData,
          resultMessage,
          setResultMessage,
          inputError,
          setInputError,
          localStorageNickname,
          setLocalStorageNickname,
          changeNicknameActive,
          setChangeNicknameActive,
          errorMessage,
          errorModalActive,
          setErrorModalActive,
          createHiddenWord,
          createNewGame,
          startGame,
        }}
      />
    </div>
  );
}

export default App;
