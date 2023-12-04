import React, { useState } from "react";

const Dropq3 = () => {
  const [isDropdownActive, setDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setDropdownActive(!isDropdownActive);
  };

  return (
    <div
      className={`relative inline-block ${isDropdownActive ? "active" : ""}`}
    >
      <button
        className="text-start px-4 py-6 border border-none rounded-xl cursor-pointer fixed-ques bg-slate-100 font-bold text-lg"
        onClick={toggleDropdown}
      >
        What payment method do you offer?
      </button>
      <div
        className={`text-tray ${
          isDropdownActive
            ? "opacity-100 transition-opacity duration-500"
            : "opacity-0 transition-opacity duration-500"
        } absolute top-full left-0 w-full shadow-md  rounded-2xl border-none bg-slate-100 z-30`}
      >
        <p className="p-4 text-slate-500">
          We aim to provide a seamless experience for our customers. We accept a
          variety of payment methods, including major credit cards (Visa,
          MasterCard, American Express, and Discover), PayPal, and bank
          transfers.
        </p>
      </div>
    </div>
  );
};

export default Dropq3;
