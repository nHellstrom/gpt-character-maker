import React from 'react';
import logo from './logo.svg';
import "./normalize.css";
import './App.css';
import CharacterMaker from './Components/CharacterMaker';

function App() {
  return (
    <div className="App">
      <main className="App__Main">
        <CharacterMaker/>
      </main>
    </div>
  );
}

export default App;
