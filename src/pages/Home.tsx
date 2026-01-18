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
  const [inputError, setInputError] = useState<{ nickname: boolean; theme: boolean; difficulty: boolean }>({ nickname: false, theme: false, difficulty: false });
  const { formData, setFormData } = useOutletContext<OutletContextType>();

  const controlledInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (localStorage.getItem("nickname")) {
      setLocalStorageNickname(true);
      const nick = localStorage.getItem("nickname");
      typeof nick === "string" && setFormData((prev) => ({ ...prev, nickname: nick }));
    }
  }, []);

  const formDataValidation = () => {
    const isEmptyCheck = {
      nickname: !formData.nickname,
      theme: !formData.theme,
      difficulty: !formData.difficulty,
    };
    setInputError(isEmptyCheck);
    console.log(isEmptyCheck);
  };

  const createNewGame = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!localStorageNickname || changeNicknameActive) {
      if (formData.nickname) {
        localStorage.setItem("nickname", formData.nickname);
      } else {
        setErrorMessagae("Zvolte novou přezdívku");
        setErrorModalActive(true);
        setInputError((prev) => ({ ...prev, nickname: true }));
        return;
      }
    }
    formDataValidation();

    setChangeNicknameActive(false);
  };

  return (
    <form className="home-page-form" onSubmit={createNewGame}>
      {localStorageNickname && !changeNicknameActive ? (
        <SavedNickname changeNicknameActive={changeNicknameActive} setConfirmModalActive={setConfirmModalActive} />
      ) : (
        <NIckNameInput formData={formData} inputError={inputError.nickname} setInputError={setInputError} controlledInput={controlledInput} />
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
