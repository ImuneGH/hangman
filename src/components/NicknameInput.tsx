import "../css/components/nicknameInput.css";

type NicknameInputProps = {
  inputError: boolean;
  formData: {
    nickname: string;
    theme: string | null;
    difficulty: string | null;
  };
  controlledInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const NicknameInput = ({ inputError, formData, controlledInput }: NicknameInputProps) => {
  return (
    <div className="text-input">
      <label htmlFor="text-input">Přezdívka</label>
      <div className="guess-word-container">
        <input
          className={inputError ? "error-border nickname-input" : "nickname-input"}
          type="text"
          id="text-input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            controlledInput(e);
          }}
          value={formData.nickname}
          name="nickname"
        />
      </div>
    </div>
  );
};

export default NicknameInput;
