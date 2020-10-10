import React, { useState } from 'react';

import './generalStyles/_normalize.scss';
import './App.scss';

import classNames from 'classnames';

import date from './api/date.json';

import GameOver from './components/GameOver/GameOver';
import Start from './components/Start/Start';
import Game from './components/Game/Game';


function App() {
  const [isStart, setStart] = useState(true);
  const [isGame, setGame] = useState(false);
  const [isGameOver, setGameOver] = useState(false);
  const [currentPrice, setCorrentPrice] = useState(null);

  function handleButton() {
    setStart(!isStart);
    setGame(!isGame);
  }

  function handleGame() {
    setGame(false);
  }

  function handleStart() {
    setStart(true);
  }

  function getCurrentPrice(index, variantText) {
    let price = '';
  
    if (index === 0) {
      return setCorrentPrice("0");
    }

    if (index === date.length - 1 && variantText === date[index].answer) {
      return setCorrentPrice("1,000,000");
    }

    price = date[--index].currentPrice;
    setCorrentPrice(price);
  }

  return (
    <main className={classNames("main", {background: isGame})}>
      {
        isStart
          ? <Start handleButton={handleButton} />
          : isGame
            ? <Game
                date={date}
                handleGame={handleGame}
                getCurrentPrice={getCurrentPrice}
              />
            : <GameOver handleStart={handleStart} currentPrice={currentPrice}/>
      }
    </main>
  );
}

export default App;
