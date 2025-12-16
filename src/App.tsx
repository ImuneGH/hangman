import "./css/app.css";
import { Outlet } from "react-router-dom";
import LabelContext from "./context/LabelContext";
import { useState } from "react";

function App() {
  const [label, setLabel] = useState<string>("");
  return (
    <div className="wrapper">
      <LabelContext.Provider value={{ label, setLabel }}>
        <Outlet />
      </LabelContext.Provider>
    </div>
  );
}

export default App;
