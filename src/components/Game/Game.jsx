import React from "react";

import '../Game/Game.scss';

function Game() {
  return (
    <div className="game">
      <p className="game__question">
        How old your elder brother was 10 years before you was born, mate?
      </p>
      <div className="game__answers">
        <div className="game__answers-top">
          <div className="game__answer">
            <a className="game__answer-1" href="#">
              <span className="game__variant">A</span>
              10 years
            </a>
          </div>
          <div className="game__answer">
            <a className="game__answer-2" href="#">
              <span className="game__variant">B</span>
              20 years
            </a>
          </div>
        </div>
        <div className="game__answers-bottom">
        <div className="game__answer">
            <a className="game__answer-3" href="#">
              <span className="game__variant">C</span>
              30 years
            </a>
          </div>
          <div className="game__answer">
            <a className="game__answer-4" href="#">
              <span className="game__variant">D</span>
              40 years
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
