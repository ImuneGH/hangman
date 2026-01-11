import "../css/components/themeSelect.css";

type ThemeSelectProps = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const ThemeSelect = ({ setTheme }: ThemeSelectProps) => {
  const handleThemeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
  };

  return (
    <div className="theme-select">
      <h3>Téma</h3>
      <div className="theme-radiobuttons">
        <div className="theme-radio-wrapper">
          <input onChange={handleThemeSelect} id="geography" type="radio" name="theme-radio" value="geography" />
          <label htmlFor="geography">Zeměpis</label>
        </div>
        <div className="theme-radio-wrapper">
          <input onChange={handleThemeSelect} id="animals" type="radio" name="theme-radio" value="animals" />
          <label htmlFor="animals">Zvířata</label>
        </div>
        <div className="theme-radio-wrapper">
          <input onChange={handleThemeSelect} id="food" type="radio" name="theme-radio" value="food" />
          <label htmlFor="food">Jídlo</label>
        </div>
        <div className="theme-radio-wrapper">
          <input onChange={handleThemeSelect} id="sport" type="radio" name="theme-radio" value="sport" />
          <label htmlFor="sport">Sport</label>
        </div>
        <div className="theme-radio-wrapper">
          <input onChange={handleThemeSelect} id="programming" type="radio" name="theme-radio" value="programming" />
          <label htmlFor="programming">Programování</label>
        </div>
        <div className="theme-radio-wrapper">
          <input onChange={handleThemeSelect} id="profession" type="radio" name="theme-radio" value="profession" />
          <label htmlFor="profession">Povolání</label>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelect;
