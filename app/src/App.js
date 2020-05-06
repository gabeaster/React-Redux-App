import React from 'react';
import './App.css';
import CharacterList from './Components/characterList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Harry Potter Houses </h1>
      </header>
      <CharacterList />
    </div>
  );
}

export default App;
