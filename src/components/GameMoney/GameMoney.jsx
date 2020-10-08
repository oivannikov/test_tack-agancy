import React from 'react';

import '../GameMoney/GameMoney.scss';

function GameMoney() {
  const money = 
  ["$500", "$1,000", "$2,000", "$4,000", "$8,000", "$16,000", "$32,000", "$64,000", "$125,000", "$250,000", "$500,000", "$1,000,000"].reverse();

  // вынести данные в json файл

  return (
    <ul className="money">
      {
        money.map(item => (
          <div className="money__purse" key={item}>
            <div className="money__pointer-left"></div>
            <li className="money__bill">
              {item}
            </li>
            <div className="money__pointer-right"></div>
          </div>
        ))
      }
    </ul>
  )
}

export default GameMoney;