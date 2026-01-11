import "../css/components/themeSelect.css";
import RadioButton from "./RadioButton";

type ThemeSelectProps = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const ThemeSelect = ({ setTheme }: ThemeSelectProps) => {
  const inputValue: string[] = ["geography", "animals", "food", "sport", "programming", "profession"];
  const themeName: string[] = ["Zeměpis", "Zvířata", "Jídlo", "Sport", "Programování", "Povolání"];

  const handleThemeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
  };

  return (
    <div className="theme-select">
      <h3>Téma</h3>
      <div className="theme-radiobuttons">
        {inputValue.map((value, index) => (
          <RadioButton key={value} inputValue={value} themeName={themeName[index]} handleThemeSelect={handleThemeSelect} />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelect;
