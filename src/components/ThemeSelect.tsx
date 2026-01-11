import "../css/components/themeSelect.css";
import RadioButton from "./RadioButton";
import type { RadioButtonInputs } from "../types/types";

type ThemeSelectProps = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const ThemeSelect = ({ setTheme }: ThemeSelectProps) => {
  const radioButtonThemes: RadioButtonInputs = [
    {
      content: "Zeměpis",
      value: "geography",
    },
    {
      content: "Zvířata",
      value: "animals",
    },
    {
      content: "Jídlo",
      value: "food",
    },
    {
      content: "Sport",
      value: "sport",
    },
    {
      content: "Programování",
      value: "programming",
    },
    {
      content: "Povolání",
      value: "profession",
    },
  ];

  return (
    <div className="theme-select">
      <h3>Téma</h3>
      <div className="theme-radiobuttons">
        {radioButtonThemes.map((theme) => (
          <RadioButton key={theme.value} inputValue={theme.value} inputContent={theme.content} inputName="theme-radio" handleSelect={(value) => setTheme(value)} />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelect;
