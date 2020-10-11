import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Variant.scss';

function Variant({ variantText, variantAlphabet, handleVariant, isCorrect, isWrong }) {
  return (
    <div
      className={classNames(
        'answer',
        { answer__correct: isCorrect, answer__wrong: isWrong },
      )}
      onClick={(e) => handleVariant(e, variantText)}
    >
      <div className="answer__field" />
      <div className="answer__text" href="#">
        <span className="answer__variant">{variantAlphabet}</span>
        {variantText}
      </div>
    </div>
  );
}

Variant.propTypes = {
  variantText: PropTypes.string.isRequired,
  variantAlphabet: PropTypes.string.isRequired,
  handleVariant: PropTypes.func.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  isWrong: PropTypes.bool.isRequired,
};

export default Variant;
