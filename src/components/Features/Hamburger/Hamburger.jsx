import React from 'react';

import '../../Features/Hamburger/Hamburger.scss';
import '../../Game/Game';

function Hamburger() {
  return (
    <>
    {/* // <div className="hamburger"> */}
      <input
      className="hamburger__toggle"
      type="checkbox"
      id="hamburger__toggle"
      name="toggle"
    />
    <label className="hamburger__btn" htmlFor="hamburger__toggle">
      <span></span>
    </label>
  {/* // </div> */}
    </>
  )
}

export default Hamburger;