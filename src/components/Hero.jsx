import React from "react";
import p1 from "../assets/person1.png";
import p2 from "../assets/person2.png";
import p3 from "../assets/person3.png";
import p4 from "../assets/person4.png";
import p5 from "../assets/person5.png";
const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen mt-10 heroAllignment gap-2">
      <span className="bg-slate-100 border border-gray rounded-l-full rounded-r-full p-2 flex justify-center items-center border-none">
        <p className="text-black font-semibold text-md">
          An other way to manage time
        </p>
      </span>
      <div className="max-w-2xl text-center space-y-10">
        <div className="text-7xl text-zinc-800 font-extrabold phone leading-tight">
          Your new favorite calender 🗓️ app
        </div>
        <div className="flex justify-center">
          <div className="flex max-w-lg text-lg font-medium text-slate-500 px-2 text-center">
            Here you should explain how cool your app is. Remember, focus on the
            benefits for your users, not on the features.
          </div>
        </div>
        <div>
          <button className="font-semibold text-white bg-zinc-800 p-3 px-6 rounded-lg relative cursor-pointer overflow-hidden transform transition duration-500 hover:scale-110">
            <span className="text-md px-1">Get started, its free</span>
          </button>
          <p className="text-gray-500 mt-1 sm:text-sm font-medium">
            Free 14 days trials,no credit card needed
          </p>
        </div>

        <div className="flex flex-row my-5 justify-center">
          <div className="flex items-center -space-x-2 cursor-pointer">
            <img
              className="w-9 h-9 rounded-full  border-2 border-white"
              src={p1}
              alt=""
            />
            <img
              className="w-9 h-9 rounded-full  border-2 border-white"
              src={p2}
              alt=""
            />
            <img
              className="w-9 h-9 rounded-full  border-2 border-white"
              src={p3}
              alt=""
            />
            <img
              className="w-9 h-9 rounded-full border-2 border-white"
              src={p4}
              alt=""
            />
            <img
              className="w-9 h-9 rounded-full border-2 border-white"
              src={p5}
              alt=""
            />
          </div>
          <div className="flex flex-col mx-3 user">
            <p className="text-xl cursor-default">⭐⭐⭐⭐⭐ 5.0</p>
            <p className="text-md font-medium text-slate-600">
              From 200+ happy users
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
