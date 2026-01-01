import "../css/components/nicknameInput.css";

type NicknameInputProps = {
  setNickname: (nickname: string) => void;
  nickname: string;
};

const NicknameInput = ({ setNickname, nickname }: NicknameInputProps) => {
  return (
    <div className="text-input">
      <label htmlFor="text-input">Přezdívka</label>
      <div className="guess-word-container">
        <input type="text" id="text-input" onChange={(e) => setNickname(e.target.value)} value={nickname} />
      </div>
    </div>
  );
};

export default NicknameInput;
