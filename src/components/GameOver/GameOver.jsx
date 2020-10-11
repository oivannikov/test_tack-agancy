import React from 'react';

import PropTypes from 'prop-types';

import './GameOver.scss';

import ThumbsUp from '../ThumbsUp/ThumbsUp';

function GameOver({ handleStart, currentPrice }) {
  return (
    <div className="losing">
      <div className="losing__content">
        <ThumbsUp />

        <div className="losing__game">
          <span className="losing__total">
            Total score:
          </span>
          <h1 className="losing__text">
            { `$${currentPrice} earned` }
          </h1>
          <button type="submit" className="losing__button" onClick={handleStart}>
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

GameOver.propTypes = {
  handleStart: PropTypes.func.isRequired,
  currentPrice: PropTypes.string.isRequired,
};

export default GameOver;
