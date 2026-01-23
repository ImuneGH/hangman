import "../css/components/guessWord.css";

// type GuessWordProps = {};

const GuessWord = () => {
  return (
    <div className="guess-word">
      <label htmlFor="guess-word">Hádej celé slovo</label>
      <div className="guess-word-container">
        <input type="text" id="guess-word" className="guess-word-input" />
        <button>Hádej</button>
      </div>
    </div>
  );
};

export default GuessWord;
