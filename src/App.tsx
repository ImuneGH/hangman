import "./css/app.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [nickname, setNickname] = useState<string>("");
  return (
    <div className="wrapper">
      <Outlet context={{ nickname, setNickname }} />
    </div>
  );
}

export default App;
