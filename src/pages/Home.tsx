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

  const createNewGame = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isError = formDataValidation();
    if (isError) {
      return;
    }
    if (changeNicknameActive || !localStorageNickname) {
      localStorage.setItem("nickname", formData.nickname);
    }
    // setChangeNicknameActive(false);
  };

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
