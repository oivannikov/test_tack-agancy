import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import date from '../../api/date.json';

import './GameMoney.scss';

function GameMoney({ currentId }) {
  return (
    <div className="money">
      {
        [...date].reverse().map(({ id, currentPrice }) => (
          <div
            className={classNames(
              'money__purse',
              { money__rate: currentId === id, money__gain: id < currentId }
            )}
            key={id}
          >
            <div className="money__bill">
              { `${currentPrice}` }
            </div>
          </div>
        ))
      }
    </div>
  );
}

GameMoney.propTypes = {
  currentId: PropTypes.number.isRequired,
};

export default GameMoney;
