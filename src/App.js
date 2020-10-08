import React, { useState } from 'react';

import './generalStyles/_normalize.scss';
import './App.scss';

import date from './api/date.json';

import GameOver from './components/GameOver/GameOver';
import Start from './components/Start/Start';
import Game from './components/Game/Game';


function App() {

  console.log(date);
  return (
    <>
      {/* <header className="header">
        <Start />
      </header> */}
      {/* <section className="section">
        <Game />
      </section> */}
      <footer className="footer">
        <GameOver />
      </footer>
    </>
  );
}

export default App;
