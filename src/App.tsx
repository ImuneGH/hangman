import "./css/App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <h3 className="the-word">ahoj jak to jde</h3>
      <p>
        ahoj zkouším odsazení a line height
        <br />
        jak to vypadá?
      </p>
      <a href="#">zkouška odkazu</a>
      <Outlet />
    </div>
  );
}

export default App;
