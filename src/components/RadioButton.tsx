import "../css/components/radioButton.css";

type RadioButtonProps = {
  inputValue: string;
  themeName: string;
  handleThemeSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton = ({ inputValue, themeName, handleThemeSelect }: RadioButtonProps) => {
  return (
    <div className="theme-radio-wrapper">
      <input onChange={handleThemeSelect} id={inputValue} type="radio" name="theme-radio" value={inputValue} />
      <label htmlFor={inputValue}>{themeName}</label>
    </div>
  );
};

export default RadioButton;
