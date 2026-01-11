import "../css/components/radioButton.css";

type RadioButtonProps = {
  inputValue: string;
  inputName: string;
  inputContent: string;
  handleSelect: (value: string) => void;
};

const RadioButton = ({ inputValue, inputName, inputContent, handleSelect }: RadioButtonProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSelect(e.target.value);
  };
  return (
    <div className="theme-radio-wrapper">
      <input onChange={handleChange} id={inputValue} type="radio" name={inputName} value={inputValue} />
      <label htmlFor={inputValue}>{inputContent}</label>
    </div>
  );
};

export default RadioButton;
