import "../css/components/guessWord.css";

type GuessWordProps = {
  setNickname: (nickname: string) => void;
  nickname: string;
};

const GuessWord = ({ setNickname, nickname }: GuessWordProps) => {
  return (
    <div className="text-input">
      <label htmlFor="text-input">Hádej celé slovo</label>
      <div className="guess-word-container">
        <input type="text" id="text-input" onChange={(e) => setNickname(e.target.value)} value={nickname} />
        <button>Hádej</button>
      </div>
    </div>
  );
};

export default GuessWord;
