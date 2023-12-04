import React, { useState } from "react";

const Dropq4 = () => {
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
        What is your refund policy?
      </button>
      <div
        className={`text-tray ${
          isDropdownActive
            ? "opacity-100 transition-opacity duration-500"
            : "opacity-0 transition-opacity duration-500"
        } absolute top-full left-0 w-full shadow-md  rounded-2xl border-none bg-slate-100 z-30`}
      >
        <p className="p-4 text-slate-500">
          Our refund policy is designed with customer satisfaction in mind. If
          you are not satisfied with our service, you can request a full refund
          within 30 days of your initial purchase. To initiate the refund
          process, please contact our support team through the "Help" section in
          your account or email us at support@Milton.com, and we'll be happy to
          assist you.
        </p>
      </div>
    </div>
  );
};

export default Dropq4;
