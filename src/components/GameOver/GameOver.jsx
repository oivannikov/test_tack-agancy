import React from 'react';

import '../GameOver/GameOver.scss';

import ThumbsUp from '../ThumbsUp/ThumbsUp';

function GameOver() {
  return (
    <div className="losing">
       <div className="losing__content">
        <ThumbsUp />
        <div className="losing__game">
          <span className="losing__total">
            Total score:
          </span>
          <h1 className="losing__text">
            $Number earned
          </h1>
          <button className="losing__button">
            Try again
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameOver;