import "./styles.css";

import { useState, createContext } from "react";
import Home from "./component/Home";

export const LogInContext = createContext();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <LogInContext.Provider
      value={{ isLoggedIn, onLogin: handleLogin, onLogout: handleLogout }}
    >
      <div className="App">
        <h1>Authentication App</h1>
        <hr />
        <Home />
      </div>
    </LogInContext.Provider>
  );
}
