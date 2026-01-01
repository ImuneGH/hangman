import "../css/pages/home.css";
import TextInput from "../components/NicknameInput";
import ThemeSelect from "../components/ThemeSelect";
import DifficultySelect from "../components/DifficultySelect";
import { useOutletContext } from "react-router-dom";
import type { OutletContextType } from "../types/types";

const Home = () => {
  const createNewGame = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("ahoj");
    console.log(nickname);
  };
  const { nickname, setNickname } = useOutletContext<OutletContextType>();

  return (
    <form className="home-page-form" onSubmit={createNewGame}>
      <TextInput setNickname={setNickname} nickname={nickname} />
      <ThemeSelect />
      <DifficultySelect />
      <button type="submit">Hrát</button>
    </form>
  );
};

export default Home;
