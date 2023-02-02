import React, { useContext, useState } from "react";
import logo from "./logo.svg";
import "./normalize.css";
import "./App.css";
import CharacterMaker from "./Components/CharacterMaker";
import CustomConnectionSettings from "./Components/CustomConnectionSettings";
import { ApiContext, HistoryContext } from "./context";

function App() {
  const [useCustomKey, toggleCustomKey] = useState<boolean>(false);

  return (
    <div className="App">
      <ApiContext.Provider
        value={{ useCustom: false, connectionString: undefined }}
      >
        <HistoryContext.Provider value={[]}>
          <header className="App__Header">
            <h1>RPG Character Generator</h1>
          </header>
          <main className="App__Main">
            <CharacterMaker />
            <div className="App__ConnectionSettings">
              <button onClick={() => toggleCustomKey(!useCustomKey)}>
                Connection Settings
              </button>
              <div className={`App__ConnectionSettings--${useCustomKey ? "visible" : "hidden"}`}>
                <CustomConnectionSettings />
              </div>
            </div>
          </main>
        </HistoryContext.Provider>
      </ApiContext.Provider>
    </div>
  );
}

export default App;
