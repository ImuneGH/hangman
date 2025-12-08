import "../css/pages/home.css";
import TextInput from "../components/TextInput";
import ThemeSelect from "../components/ThemeSelect";
import DifficultySelect from "../components/DifficultySelect";

const Home = () => {
  return (
    <form className="home-page-form">
      <TextInput />
      <ThemeSelect />
      <DifficultySelect />
      <button>Hrát</button>
    </form>
  );
};

export default Home;
