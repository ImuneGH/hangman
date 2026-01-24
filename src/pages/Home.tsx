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
  const [confirmModalActive, setConfirmModalActive] = useState<boolean>(false);
  const {
    formData,
    setFormData,
    localStorageNickname,
    setLocalStorageNickname,
    changeNicknameActive,
    setChangeNicknameActive,
    inputError,
    setInputError,
    errorModalActive,
    setErrorModalActive,
    errorMessage,
    createNewGame,
  } = useOutletContext<OutletContextType>();

  const controlledInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.value !== "") {
      setInputError((prev) => ({ ...prev, [e.target.name]: false }));
    }
  };

  useEffect(() => {
    if (localStorage.getItem("nickname")) {
      setLocalStorageNickname(true);
      const nick = localStorage.getItem("nickname");
      typeof nick === "string" && setFormData((prev) => ({ ...prev, nickname: nick }));
    }
  }, []);

  return (
    <form className="home-page-form" onSubmit={createNewGame}>
      {localStorageNickname && !changeNicknameActive ? (
        <SavedNickname changeNicknameActive={changeNicknameActive} setConfirmModalActive={setConfirmModalActive} />
      ) : (
        <NIckNameInput formData={formData} inputError={inputError.nickname} controlledInput={controlledInput} />
      )}
      {errorModalActive && <ErrorModal setErrorModalActive={setErrorModalActive} errorModalActive={errorModalActive} errorMessage={errorMessage} />}
      <ThemeSelect controlledInput={controlledInput} formData={formData} inputError={inputError.theme} />
      {confirmModalActive && <ConfirmationModal setChangeNicknameActive={setChangeNicknameActive} setConfirmModalActive={setConfirmModalActive} confirmModalActive={confirmModalActive} />}
      <DifficultySelect controlledInput={controlledInput} formData={formData} inputError={inputError.difficulty} />
      <button type="submit">Hrát</button>
    </form>
  );
};

export default Home;
