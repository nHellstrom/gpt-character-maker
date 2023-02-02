import React, { useContext, useState } from "react";
import logo from "./logo.svg";
import "./normalize.css";
import "./App.css";
import CharacterMaker from "./Components/CharacterMaker";
import CustomConnectionSettings from "./Components/CustomConnectionSettings";
import { ApiContext, HistoryContext } from "./context";
import Landing from "./Components/Landing";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function App() {
  const [useCustomKey, toggleCustomKey] = useState<boolean>(false);

  return (
    <div className="App">
      <ApiContext.Provider
        value={{ useCustom: false, connectionString: undefined }}
      >
        <HistoryContext.Provider value={[]}>
          <BrowserRouter>
            <header className="App__Header">
              <h1>RPG Character Generator</h1>
              <Link to="/"><span className="App__ReturnHome">Home</span></Link>
            </header>
            <main className="App__Main">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/CharacterMaker" element={<CharacterMaker />} />
                <Route path="*" element={<Landing />} />
              </Routes>
              <div className="App__ConnectionSettings">
                <button onClick={() => toggleCustomKey(!useCustomKey)}>
                  Connection Settings
                </button>
                <div
                  className={`App__ConnectionSettings--${
                    useCustomKey ? "visible" : "hidden"
                  }`}
                >
                  <CustomConnectionSettings />
                </div>
              </div>
            </main>
          </BrowserRouter>
        </HistoryContext.Provider>
      </ApiContext.Provider>
    </div>
  );
}

export default App;
