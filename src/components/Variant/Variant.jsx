import React from 'react';

import classNames from 'classnames';

import '../Variant/Variant.scss';

function Variant({ variantText, variantAlphabet, handleVariant, isCorrect, isWrong}) {
  return (
    <div
      className={classNames("answer", {"answer__correct": isCorrect, "answer__wrong": isWrong})}
      onClick={(e) => handleVariant(e, variantText)}
    >
      <div className="answer__field"></div>
      <div className="answer__text" href="#">
        <span className="answer__variant">{variantAlphabet}</span>
        {variantText}
      </div>
    </div>
  )
}

export default Variant;
