import React from "react";
import girl5 from "../assets/girl5.jpg"
const Ready = () => {
  return (
    <div className="fixed-ques h-screen">
      <section className="flex flex-col mt-10 heroAllignment gap-24">
        <div className="flex flex-col items-center gap-6">
          <div className="bg-slate-100 rounded-l-full rounded-r-full p-2 px-5 flex justify-center items-center border-none">
            <p className="text-black font-bold text-sm">Last call Baby! 🚀</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-zinc-800">
              Ready to start?
            </p>
          </div>
          <div className="flex flex-col max-w-2xl text-center space-y-10">
            <div className="flex justify-center max-w-xl text-lg font-medium text-slate-500 px-2">
              Here is your last chance to explain how cool your app is. Focus on
              the benefits for your users, not on the features.
            </div>

            <div>
              <button className="font-semibold text-white bg-zinc-800 p-3 px-6 rounded-lg relative cursor-pointer overflow-hidden transform transition duration-500 hover:scale-110">
                <span className="text-md px-1">Get started, its free</span>
              </button>
            </div>

            {/*  */}
            <div className="flex flex-row">
              <div className="flex self-stretch items-end justify-center">
                <img
                  className="w-17 h-16 rounded-full border-2 border-white"
                  src={girl5}
                  alt=""
                />
              </div>
              <div className="flex mb-3">
                <div className="flex flex-col text-start max-w-xs  bg-orange-200 space-y-2 rounded-t-2xl rounded-br-2xl rounded-bl p-4 mb-3">
                  <p className="text-bold text-black text-sm font-medium">
                    I never missed a call again, the AI-drivenfeature is a game
                    changer for me!
                  </p>
                  <p className="text-slate-600 text-base font-semibold">
                    Annie, Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ready;
