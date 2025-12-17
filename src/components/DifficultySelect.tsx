import "../css/components/difficultySelect.css";

const DifficultySelect = () => {
  return (
    <div className="difficulty-select">
      <h3>Obtížnost</h3>
      <div className="difficulty-radiobuttons">
        <div className="difficulty-radio-wrapper">
          <input id="easy" type="radio" name="difficulty-radio" />
          <label htmlFor="easy">Lehká</label>
        </div>
        <div className="difficulty-radio-wrapper">
          <input id="medium" type="radio" name="difficulty-radio" />
          <label htmlFor="medium">Střední</label>
        </div>
        <div className="difficulty-radio-wrapper">
          <input id="hard" type="radio" name="difficulty-radio" />
          <label htmlFor="hard">Těžká</label>
        </div>
      </div>
    </div>
  );
};

export default DifficultySelect;
