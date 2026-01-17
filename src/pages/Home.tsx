import "../css/pages/home.css";
import NIckNameInput from "../components/NicknameInput";
import ThemeSelect from "../components/ThemeSelect";
import DifficultySelect from "../components/DifficultySelect";
import { useOutletContext } from "react-router-dom";
import type { OutletContextType } from "../types/types";
import { useEffect, useState } from "react";
import SavedNickname from "../components/SavedNickname";
import ConfirmationModal from "../components/ConfirmationModal";
import ErrorModal from "../components/ErrorModal";

const Home = () => {
  const [changeNicknameActive, setChangeNicknameActive] = useState<boolean>(false);
  const [localStorageNickname, setLocalStorageNickname] = useState<boolean>(false);
  const [confirmModalActive, setConfirmModalActive] = useState<boolean>(false);
  const [errorModalActive, setErrorModalActive] = useState<boolean>(false);
  const [errorMessage, setErrorMessagae] = useState<string>("");
  const { nickname, setNickname } = useOutletContext<OutletContextType>();
  const { setTheme } = useOutletContext<OutletContextType>();
  const { setDifficulty } = useOutletContext<OutletContextType>();

  useEffect(() => {
    if (localStorage.getItem("nickname")) {
      setLocalStorageNickname(true);
    }
  }, []);

  const createNewGame = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!localStorageNickname || changeNicknameActive) {
      if (nickname) {
        localStorage.setItem("nickname", nickname);
      } else {
        setErrorMessagae("Zvolte novou přezdívku");
        setErrorModalActive(true);
        return;
      }

      console.log("log po returnu");
    }
    setChangeNicknameActive(false);
  };

  return (
    <form className="home-page-form" onSubmit={createNewGame}>
      {localStorageNickname && !changeNicknameActive ? (
        <SavedNickname changeNicknameActive={changeNicknameActive} setConfirmModalActive={setConfirmModalActive} />
      ) : (
        <NIckNameInput setNickname={setNickname} nickname={nickname} />
      )}
      {errorModalActive && <ErrorModal setErrorModalActive={setErrorModalActive} errorModalActive={errorModalActive} errorMessage={errorMessage} />}
      <ThemeSelect setTheme={setTheme} />
      {confirmModalActive && <ConfirmationModal setChangeNicknameActive={setChangeNicknameActive} setConfirmModalActive={setConfirmModalActive} confirmModalActive={confirmModalActive} />}
      <DifficultySelect setDifficulty={setDifficulty} />
      <button type="submit">Hrát</button>
    </form>
  );
};

export default Home;
