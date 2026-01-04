import "../css/pages/home.css";
import NIckNameInput from "../components/NicknameInput";
import ThemeSelect from "../components/ThemeSelect";
import DifficultySelect from "../components/DifficultySelect";
import { useOutletContext } from "react-router-dom";
import type { OutletContextType } from "../types/types";
import { useEffect, useState } from "react";
import SavedNickname from "../components/SavedNickname";
import ConfirmationModal from "../components/ConfirmationModal";

const Home = () => {
  const [changeNicknameActive, setChangeNicknameActive] = useState<boolean>(false);
  const [localStorageNickname, setLocalStorageNickname] = useState<boolean>(false);
  const { nickname, setNickname } = useOutletContext<OutletContextType>();
  const [confirmModalActive, setConfirmModalActive] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("nickname")) {
      setLocalStorageNickname(true);
    }
  }, []);
  const createNewGame = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (localStorageNickname) {
      console.log("je tam nick");
      changeNicknameActive && localStorage.setItem("nickname", nickname);
    } else {
      localStorage.setItem("nickname", nickname);
      console.log("nebyl tam nick");
    }
  };

  return (
    <form className="home-page-form" onSubmit={createNewGame}>
      {localStorageNickname && !changeNicknameActive ? (
        <SavedNickname changeNicknameActive={changeNicknameActive} setChangeNicknameActive={setChangeNicknameActive} />
      ) : (
        <NIckNameInput setNickname={setNickname} nickname={nickname} />
      )}
      <ThemeSelect />
      {confirmModalActive && <ConfirmationModal />}
      <DifficultySelect />
      <button type="submit">Hrát</button>
    </form>
  );
};

export default Home;
