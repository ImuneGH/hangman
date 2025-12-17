import "../css/components/textInput.css";

type TextInputProps = {
  label: string;
};

const TextInput = ({ label }: TextInputProps) => {
  return (
    <div className="text-input">
      <label htmlFor="text-input">{label}</label>
      <input type="text" id="text-input" />
    </div>
  );
};

export default TextInput;
