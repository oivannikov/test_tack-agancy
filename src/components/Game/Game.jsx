import React from "react";

import '../Game/Game.scss';

import GameMoney from "../GameMoney/GameMoney";
import Variant from "../Variant/Variant";

function Game() {
  return (
    <div className="game">
      <h3 className="game__question">
        How old your elder brother was 10 years before you was born, mate?
      </h3>
      <div className="game__answers">
        <div className="game__answers-top">
          <Variant />
          <Variant />
        </div>
        <div className="game__answers-bottom">
          <Variant />
          <Variant />
        </div>
      </div>
      <div className="game__money">
        <GameMoney />
      </div>
    </div>
  );
}

export default Game;
