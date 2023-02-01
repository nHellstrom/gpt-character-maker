import React, { createContext, useContext, useState } from "react";
import logo from "./logo.svg";
import "./normalize.css";
import "./App.css";
import CharacterMaker from "./Components/CharacterMaker";
import CustomApiSettings from "./Components/CustomConnectionSettings";
import { ICharacter } from "./GlobalInterfaces";

function App() {
  const [useCustomKey, toggleCustomKey] = useState<boolean>(false);
  const ApiContext = createContext<string | undefined>(undefined);
  const HistoryContext = createContext<ICharacter[]>([])

  return (
    <div className="App">
      <ApiContext.Provider value={undefined}>
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
            <CustomApiSettings useCustom={useCustomKey} />
          </div>
        </main>
      </HistoryContext.Provider>
      </ApiContext.Provider>
    </div>
  );
}

export default App;
