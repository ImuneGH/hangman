import "./css/app.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [label, setLabel] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  return (
    <div className="wrapper">
      <Outlet context={{ label, setLabel, nickname, setNickname }} />
    </div>
  );
}

export default App;
