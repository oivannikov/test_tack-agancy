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
            <div className="start__heading">
              <h1 className="start__text">
                Who wants to be a millionaire?
              </h1>
            </div>
              {
                // Не понимаю почему блок не ограничивает ширину текста
                // если пишу длиный тект он не ограничивается шириной блока
              }
            <button className="start__button">
              Start
            </button>
          </div>
 
        </div>
    </div>
  )
}

export default Start;
