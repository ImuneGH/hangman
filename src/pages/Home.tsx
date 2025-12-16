import "../css/pages/home.css";
import TextInput from "../components/TextInput";
import ThemeSelect from "../components/ThemeSelect";
import DifficultySelect from "../components/DifficultySelect";
import { useOutletContext } from "react-router-dom";
import type { OutletContextType } from "../types/types";
import { useEffect } from "react";

const Home = () => {
  const { label, setLabel } = useOutletContext<OutletContextType>();
  useEffect(() => {
    setLabel("Přezdívka");
  }, []);

  return (
    <form className="home-page-form">
      <TextInput label={label} />
      <ThemeSelect />
      <DifficultySelect />
      <button>Hrát</button>
    </form>
  );
};

export default Home;
