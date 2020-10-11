import React from 'react';

import '../../images/thumbsUp.jpg';
import './Start.scss';

import PropTypes from 'prop-types';

import ThumbsUp from '../ThumbsUp/ThumbsUp';

function Start({ handleButton }) {
  return (
    <div className="start">
      <div className="start__clip" />
      <div className="start__content">
        <ThumbsUp />

        <div className="start__game">
          <div className="start__heading">
            <h1 className="start__text">
              Who wants to be a millionaire?
            </h1>
          </div>
          <button type="submit" className="start__button" onClick={handleButton}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

Start.propTypes = {
  handleButton: PropTypes.func.isRequired,
};

export default Start;
