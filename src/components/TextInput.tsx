import "../css/components/textInput.css";

type TextInputProps = {
  label: string;
  setNickname: (nickname: string) => void;
  nickname: string;
};

const TextInput = ({ label, setNickname, nickname }: TextInputProps) => {
  return (
    <div className="text-input">
      <label htmlFor="text-input">{label}</label>
      <div className="guess-word-container">
        <input type="text" id="text-input" onChange={(e) => setNickname(e.target.value)} value={nickname} />
        {label === "Hádej celé slovo" && <button>Hádej</button>}
      </div>
    </div>
  );
};

export default TextInput;
