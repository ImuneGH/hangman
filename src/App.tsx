import "./css/App.css";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Game from "./pages/Game";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>ahoj</h1>
      <Outlet />
    </div>
  );
}

export default App;
