import "../css/components/radioButton.css";

type RadioButtonProps = {
  inputValue: string;
  inputName: string;
  inputContent: string;
  controlledInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  savedValue: string | null;
};

const RadioButton = ({ inputValue, inputName, inputContent, controlledInput, savedValue }: RadioButtonProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    controlledInput(e);
  };
  return (
    <div className="theme-radio-wrapper">
      <input onChange={handleChange} id={inputValue} type="radio" name={inputName} value={inputValue} checked={inputValue === savedValue} />
      <label htmlFor={inputValue}>{inputContent}</label>
    </div>
  );
};

export default RadioButton;
