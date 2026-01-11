import "../css/components/themeSelect.css";
import RadioButton from "./RadioButton";

type ThemeSelectProps = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

type Input = {
  name: string;
  value: string;
};

type RadioButtonInputs = [Input, Input, Input, Input, Input, Input];

const ThemeSelect = ({ setTheme }: ThemeSelectProps) => {
  const radioButtonInputs: RadioButtonInputs = [
    {
      name: "Zeměpis",
      value: "geography",
    },
    {
      name: "Zvířata",
      value: "animals",
    },
    {
      name: "Jídlo",
      value: "food",
    },
    {
      name: "Sport",
      value: "sport",
    },
    {
      name: "Programování",
      value: "programming",
    },
    {
      name: "Povolání",
      value: "profession",
    },
  ];

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
  };

  return (
    <div className="theme-select">
      <h3>Téma</h3>
      <div className="theme-radiobuttons">
        {radioButtonInputs.map((value) => (
          <RadioButton key={value.value} inputValue={value.value} themeName={value.name} handleSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelect;
