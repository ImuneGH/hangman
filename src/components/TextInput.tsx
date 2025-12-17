import "../css/components/textInput.css";

type TextInputProps = {
  label: string;
};

const TextInput = ({ label }: TextInputProps) => {
  return (
    <div className="text-input">
      <label htmlFor="">{label}</label>
      <input type="text" />
    </div>
  );
};

export default TextInput;
