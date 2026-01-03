import "../css/pages/home.css";
import NIckNameInput from "../components/NicknameInput";
import ThemeSelect from "../components/ThemeSelect";
import DifficultySelect from "../components/DifficultySelect";
import { useOutletContext } from "react-router-dom";
import type { OutletContextType } from "../types/types";
import { useEffect, useState } from "react";
import SavedNickname from "../components/SavedNickname";

const Home = () => {
  const [localStorageNickname, setLocalStorageNickname] = useState(false);
  const { nickname, setNickname } = useOutletContext<OutletContextType>();

  useEffect(() => {
    if (localStorage.getItem("nickname")) {
      setLocalStorageNickname(true);
    }
  }, []);
  console.log(localStorageNickname);
  const createNewGame = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (localStorageNickname) {
      console.log("je tam nick");
    } else {
      localStorage.setItem("nickname", nickname);
      console.log("nebyl tam nick");
    }
  };

  return (
    <form className="home-page-form" onSubmit={createNewGame}>
      {localStorageNickname ? <SavedNickname /> : <NIckNameInput setNickname={setNickname} nickname={nickname} />}
      <ThemeSelect />
      <DifficultySelect />
      <button type="submit">Hrát</button>
    </form>
  );
};

export default Home;
