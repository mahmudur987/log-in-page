import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LogInPage from "./LoginPage/LogInPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LogInPage />
    </>
  );
}

export default App;
