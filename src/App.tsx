import React from 'react';
import { Game } from './Game/Game';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        🙂 🤪 B A T T L E 😌 M O J I S! 😁 😎{' '}
      </header>
      <main>
        <Game />
      </main>
      <footer>
        ProgrammerInProgress 2019 - Check the project out on&nbsp;
        <a
          href="https://github.com/programmerinprogress/react-battlemojis"
          target="blank"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
