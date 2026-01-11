import "../css/components/themeSelect.css";

const ThemeSelect = () => {
  return (
    <div className="theme-select">
      <h3>Téma</h3>
      <div className="theme-radiobuttons">
        <div className="theme-radio-wrapper">
          <input id="geography" type="radio" name="theme-radio" />
          <label htmlFor="geography">Zeměpis</label>
        </div>
        <div className="theme-radio-wrapper">
          <input id="animals" type="radio" name="theme-radio" />
          <label htmlFor="animals">Zvířata</label>
        </div>
        <div className="theme-radio-wrapper">
          <input id="food" type="radio" name="theme-radio" />
          <label htmlFor="food">Jídlo</label>
        </div>
        <div className="theme-radio-wrapper">
          <input id="sport" type="radio" name="theme-radio" />
          <label htmlFor="sport">Sport</label>
        </div>
        <div className="theme-radio-wrapper">
          <input id="programming" type="radio" name="theme-radio" />
          <label htmlFor="programming">Programování</label>
        </div>
        <div className="theme-radio-wrapper">
          <input id="profession" type="radio" name="theme-radio" />
          <label htmlFor="profession">Povolání</label>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelect;
