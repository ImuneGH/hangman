import "../css/components/guessWord.css";

// type GuessWordProps = {};

const GuessWord = () => {
  return (
    <div className="text-input">
      <label htmlFor="text-input">Hádej celé slovo</label>
      <div className="guess-word-container">
        <input type="text" id="text-input" />
        <button>Hádej</button>
      </div>
    </div>
  );
};

export default GuessWord;
