import React from 'react';

import '../../Features/Hamburger/Hamburger.scss';

function Hamburger() {
  return (
    <>
      <input
        className="hamburger__toggle"
        type="checkbox"
        id="hamburger__toggle"
        name="toggle"
      />
      <label className="hamburger__btn" htmlFor="hamburger__toggle">
        <span></span>
      </label>
    </>
  );
}

export default Hamburger;