import React from "react";
import girl3 from "../assets/girl3.jpg";
const Feature3 = () => {
  return (
    <section className="flex flex-col mt-10 heroAllignment gap-24">

      {/* Sceduling & calender block starts */}
      <div className="flex flex-row gap-3">
        {/* 1 text block */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-16 max-w-lg">
            <div className="flex flex-col justify-start items-start  gap-4">
              <div className="bg-cyan-100 border border-gray rounded-l-full rounded-r-full py-1.5 px-6 flex justify-center items-center border-none">
                <p className="text-black font-semibold text-md">
                  Seamless Sceduling
                </p>
              </div>
              <div className="max-w-2xl antialiased">
                <p className="text-4xl font-extrabold text-zinc-800">
                  Focus on what matters most for you
                </p>
              </div>
            </div>
            <div className="max-w-lg space-y-4">
              <div>
                <p className="text-slate-500 text-lg font-medium">
                  Effortlessly plan your day with our intuitive drag-and-drop
                  interface. Sync with multiple calendar platforms, import
                  events from emails, and add participants with just a few
                  clicks.
                </p>
              </div>
            </div>
          </div>

          {/* girl quote */}
          <div className="flex flex-row">
            <div className="flex self-stretch items-end justify-center mb-3">
              <img
                className="w-17 h-16 rounded-full border-2 border-white"
                src={girl3}
                alt=""
              />
            </div>
            <div className="flex">
              <div className="flex-start max-w-xs  bg-zinc-800 space-y-2 rounded-t-2xl rounded-br-2xl rounded-bl p-4 mb-3">
                <p className="text-bold text-white">
                  I've tried a lot of calendar apps, but this one is by far the
                  best! It's so intuitive and customizable, and it has all the
                  features I need.
                </p>
                <p className="text-slate-500 font-semibold">Annie, Designer</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2  image calender*/}
        <div className="w-6/12">
          <img
            src="https://framerusercontent.com/images/xjG69OjCFt0Z3YQvNa3HNBBP5G0.png?scale-down-to=1024"
            alt="Calender"
          />
        </div>
      </div>
    </section>
  );
};

export default Feature3;
