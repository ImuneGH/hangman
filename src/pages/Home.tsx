import "../css/pages/home.css";
import TextInput from "../components/TextInput";
import ThemeSelect from "../components/ThemeSelect";
import DifficultySelect from "../components/DifficultySelect";
import { useOutletContext } from "react-router-dom";
import type { OutletContextType } from "../types/types";
import { useEffect } from "react";

const Home = () => {
  const createNewGame = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("ahoj");
    console.log(typeof nickname);
  };
  const { label, setLabel } = useOutletContext<OutletContextType>();
  const { nickname, setNickname } = useOutletContext<OutletContextType>();

  useEffect(() => {
    setLabel("Přezdívka");
  }, []);

  return (
    <form className="home-page-form">
      <TextInput label={label} setNickname={setNickname} nickname={nickname} />
      <ThemeSelect />
      <DifficultySelect />
      <button onClick={createNewGame}>Hrát</button>
    </form>
  );
};

export default Home;
