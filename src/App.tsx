import "./css/app.css";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

type GameCategory = {
  nazev: string;
  slova: string[];
};

type GameWords = {
  jidlo: GameCategory;
  povolani: GameCategory;
  programovani: GameCategory;
  sport: GameCategory;
  zemepis: GameCategory;
  zvirata: GameCategory;
};

type FormData = {
  nickname: string;
  theme: string | null;
  difficulty: string | null;
};

function App() {
  const [formData, setFormData] = useState<FormData>({ nickname: "", theme: null, difficulty: null });
  const [gameWords, setGameWords] = useState<GameWords | null>(null);
  const [theme, setTheme] = useState<null | string>(null);
  const [difficulty, setDifficulty] = useState<null | "easy" | "medium" | "hard">(null);
  const [savedNickname, setSavedNickname] = useState<string | null>(localStorage.getItem("nickname"));
  const [nickname, setNickname] = useState<string>("");

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

  useEffect(() => {
    fetchGameWords();
  }, []);

  return (
    <div className="wrapper">
      <Outlet context={{ nickname, setNickname, savedNickname, setSavedNickname, theme, setTheme, difficulty, setDifficulty, gameWords, formData, setFormData }} />
    </div>
  );
}

export default App;
