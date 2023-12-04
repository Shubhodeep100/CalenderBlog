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
            <FaArrowCircleRight className="text-4xl text-white" />
          </span>
        </label>
      </div>

      <div className="flex flex-row gap-16 mt-6">
        <div>
          <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300">
            Monthly
          </button>
        </div>
        <div>
          <button className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300">
            Anually
          </button>
        </div>
      </div>
    </div>
  );
}

export default Priceswitch