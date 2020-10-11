import React, { useState } from "react";

import PropTypes from 'prop-types';

import '../Game/Game.scss';

import GameMoney from "../GameMoney/GameMoney";
import Variant from "../Variant/Variant";
import Hamburger from "../Features/Hamburger/Hamburger";

function Game({ date, handleGame, getCurrentPrice }) {
  const [currentQestion, setCurrentQestion] = useState(0);
  const [isWrong, setWrong] = useState(false);
  const [isCorrect, setCorrect] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState('');
  const {
    variants,
    variantsAlphabets,
    question,
    answer,
    id
  } = date[currentQestion];

  function nextQuestion(currentQestion, textVariant) {
    setCorrect(true);
      setTimeout(() => {
        setCurrentQestion(prev => currentQestion === date.length - 1 ? prev : prev + 1);
        getCurrentPrice(currentQestion, textVariant);
        setCorrect(false);
      }, 400);
  }

  function endGame(currentQestion, textVariant) {
    getCurrentPrice(currentQestion, textVariant);
    setWrong(true);
    setTimeout(() => {
      setCurrentQestion(0);
      handleGame();
      setWrong(false);
    }, 400);
  }

  function handleVariant(e, textVariant) {
    e.preventDefault();
    setSelectedVariant(textVariant);
  
    if (currentQestion > date.length - 1 || textVariant !== answer) {
      endGame(currentQestion, textVariant);
    } else {
      nextQuestion(currentQestion, textVariant);
    }
  }

  return (
    <div className="game">
      <h3 className="game__question">
        {question}
      </h3>
      <Hamburger />
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

Game.propTypes = {
  date: PropTypes.arrayOf(PropTypes.shape({
    variants: PropTypes.arrayOf(PropTypes.string).isRequired,
    variantsAlphabets: PropTypes.arrayOf(PropTypes.string),
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,

  handleGame: PropTypes.func.isRequired,
  getCurrentPrice: PropTypes.func.isRequired,
}

export default Game;
