import React from 'react';

import '../../images/thumbsUp.jpg';
import '../Start/Start.scss';

import ThumbsUp from '../ThumbsUp/ThumbsUp';

function Start() {
  return (
    <div className="start">
        <div className="start__clip">
        </div>
     
        <div className="start__content">
          <ThumbsUp />
          <div className="start__game">
            <h1 className="start__text"> 
              Who wants to be
              <br />
              a millionaire?
            </h1>
            <button className="start__button">
              Start
            </button>
          </div>

        </div>
    </div>
  )
}

export default Start;
