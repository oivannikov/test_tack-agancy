import React from 'react';

import '../Variant/Variant.scss';

function Variant() {
  return (
    <div className="answer">
      <div className="answer__pointer-left"></div>
        <a className="answer__text" href="#">
          <span className="answer__variant">A</span>
          10 years
        </a>
        <div className="answer__pointer-right"></div>
    </div>
  )
}

export default Variant;