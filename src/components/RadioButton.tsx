import "../css/components/radioButton.css";

type RadioButtonProps = {
  inputValue: string;
  themeName: string;
  handleSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton = ({ inputValue, themeName, handleSelect }: RadioButtonProps) => {
  return (
    <div className="theme-radio-wrapper">
      <input onChange={handleSelect} id={inputValue} type="radio" name="theme-radio" value={inputValue} />
      <label htmlFor={inputValue}>{themeName}</label>
    </div>
  );
};

export default RadioButton;
