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

function App() {
  const [gameWords, setGameWords] = useState<GameWords | null>(null);

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

  setTimeout(() => {
    console.log(gameWords);
  }, 500);

  const [savedNickname, setSavedNickname] = useState<string | null>(localStorage.getItem("nickname"));
  const [nickname, setNickname] = useState<string>("");
  return (
    <div className="wrapper">
      <Outlet context={{ nickname, setNickname, savedNickname, setSavedNickname }} />
    </div>
  );
}

export default App;
