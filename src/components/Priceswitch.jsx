import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";

const Priceswitch = () => {
  return (
    <div>
      <input
        type="checkbox"
        name="checkbox"
        id="input-toggle"
        class="input-toggle"
      />

      <div class="checkbox__container">
        <label for="input-toggle" class="label-for-toggle">
          <span class="ball arrow">
            <FaArrowCircleRight className='text-4xl text-white' />
          </span>
        </label>
      </div>
    </div>
  );
}

export default Priceswitch