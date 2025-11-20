import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/Home";
import GamePage from "./pages/Game";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "game",
        element: <GamePage />,
      },
    ],
  },
]);
