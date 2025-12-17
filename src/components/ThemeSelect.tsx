import "../css/components/themeSelect.css";

const ThemeSelect = () => {
  return (
    <div className="theme-select">
      <h3>Téma</h3>
      <div className="theme-radiobuttons">
        <div className="theme-radio-wrapper">
          <input id="theme1" type="radio" name="theme-radio" />
          <label htmlFor="theme1">Téma 1</label>
        </div>
        <div className="theme-radio-wrapper">
          <input id="theme2" type="radio" name="theme-radio" />
          <label htmlFor="theme2">Téma 2</label>
        </div>
        <div className="theme-radio-wrapper">
          <input id="theme3" type="radio" name="theme-radio" />
          <label htmlFor="theme3">Téma 3</label>
        </div>
        <div className="theme-radio-wrapper">
          <input id="theme4" type="radio" name="theme-radio" />
          <label htmlFor="theme4">Téma 4</label>
        </div>
        <div className="theme-radio-wrapper">
          <input id="theme5" type="radio" name="theme-radio" />
          <label htmlFor="theme5">Téma 5</label>
        </div>
        <div className="theme-radio-wrapper">
          <input id="theme6" type="radio" name="theme-radio" />
          <label htmlFor="theme6">Téma 6</label>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelect;
