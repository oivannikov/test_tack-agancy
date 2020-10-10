import React, {useState} from "react";

import '../Game/Game.scss';

import GameMoney from "../GameMoney/GameMoney";
import Variant from "../Variant/Variant";

function Game({ date, handleGame, getCurrentPrice}) {
  const [index, setIndex] = useState(0);
  const [isWrong, setWrong] = useState(false);
  const [isCorrect, setCorrect] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState('');
  const { variants, variantsAlphabets, question, answer, id} = date[index];

  function handleVariant(e, variantText) {
    e.preventDefault();
  
    setSelectedVariant(variantText);
    if (index >= date.length - 1 || variantText !== answer) {
      getCurrentPrice(index, variantText);
      setWrong(true);
      setTimeout(() => {
        setIndex(0);
        handleGame();
        setWrong(() => false);
      }, 400)
      // Все работает верно только не понимаю почему последнее выберается красным цветом!!! Разобраться позже
    } else {
      setCorrect(true);
      setTimeout(() => {
        setIndex((prev) => prev + 1);
        setCorrect(false);
      }, 400)
    }
  }

  return (
    <div className="game">
      <h3 className="game__question">
        {question}
      </h3>
      <input
          className="game__toggle"
          type="checkbox"
          id="toggle"
          name="toggle"
        />
        <label className="game__hamburger" htmlFor="toggle"></label>
      <div className="game__answers">
      {variants.map((variant, index) => 
        <Variant
          variantText={variant}
          key={index}
          variantAlphabet={variantsAlphabets[index]}
          handleVariant={handleVariant}
          isCorrect={isCorrect && selectedVariant === variant}
          isWrong={isWrong && selectedVariant === variant}
        />
      )}
      </div>
      <div className="game__money">
        <GameMoney currentId={id} />
      </div>
    </div>
  );
}

export default Game;
