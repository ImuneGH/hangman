import "../css/components/textInput.css";

type TextInputProps = {
  label: string;
};

const TextInput = ({ label }: TextInputProps) => {
  return (
    <div className="text-input">
      <label htmlFor="text-input">{label}</label>
      <div className="guess-word-container">
        <input type="text" id="text-input" />
        {label === "Hádej celé slovo" && <button>Hádej</button>}
      </div>
    </div>
  );
};

export default TextInput;
