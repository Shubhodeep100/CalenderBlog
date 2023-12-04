import React from 'react'
import girl2 from "../assets/girl2.jpg"
const Feature2 = () => {
  return (
    <section className="flex flex-col mt-10 hero-alignment gap-24">
      {/* Sceduling & calender block starts */}
      <div className="flex flex-row flex-wrap fixed-contphone">
        {/* 2  image calender*/}
        <div className="w-6/12 fixed-contphone space-order1">
          <img
            src="https://framerusercontent.com/images/EgCwW6bpD4t2JQoyjgySRkUXc.png?scale-down-to=1024"
            alt="Calender"
          />
        </div>
        {/* 1 text block */}
        <div className="flex flex-col gap-10 fixed-contphone ">
          <div className="flex flex-col gap-16 max-w-lg ">
            <div className="flex flex-col justify-start items-start  gap-4 ">
              <div className="bg-cyan-100 border border-gray rounded-l-full rounded-r-full py-1.5 px-6 flex justify-center items-center border-none">
                <p className="text-black font-semibold light-ballon">
                  Smart Reminders & Task
                </p>
              </div>
              <div className="max-w-2xl ">
                <p className="text-4xl font-bold text-zinc-800 semi-heading">
                  Never miss an important deadline or event again
                </p>
              </div>
            </div>
            <div className="max-w-xl space-y-4">
              <div>
                <p className="text-slate-500 text-lg font-medium light-para">
                  Never miss an important deadline again with our AI-driven
                  notifications. Our app intelligently analyzes your schedule to
                  prioritize what's most important, keeping you on track and
                  ensuring your day is productive and stress-free.
                </p>
              </div>
            </div>
          </div>

          {/* girl quote */}
          <div className="flex flex-row justify-end">
            <div className="flex mb-3">
              <div className="flex-start max-w-xs  bg-zinc-800 space-y-1 rounded-t-2xl rounded-bl-2xl rounded-br p-4 mb-3">
                <p className="text-white text-sm font-semibold featurecloud">
                  I love how user-friendly this app is! It's so easy to add
                  events and set reminders!
                </p>
                <p className="text-slate-400 font-semibold text-sm">
                  Adam, entrepreneur
                </p>
              </div>
            </div>

            <div className="flex self-stretch items-end justify-center">
              <img
                className="w-16 h-16 rounded-full border-2 border-white"
                src={girl2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature2