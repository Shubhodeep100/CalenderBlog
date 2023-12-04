import React from "react";
import girl from "../assets/girl.jpg"
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";
import Feature4 from "./Feature4";
import Feature5 from "./Feature5";

const Features = () => {
  return (
    <div className="fixed-container">
      <section
        Name="Features"
        className="flex flex-col mt-10 hero-alignment gap-24"
      >
        {/* Discover block */}

        <div className="flex flex-col justify-start items-center gap-4">
          <div className="bg-slate-100 border border-gray rounded-l-full rounded-r-full p-2 px-4 flex justify-center items-center border-none">
            <p className="text-black font-semibold text-md">
              Our main features 🦸🏼
            </p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-zinc-800">
              Discover your new superpowers
            </p>
          </div>
        </div>

        {/* Sceduling & calender block starts */}
        <div className="flex flex-row gap-3 md:order-first">
          {/* 1 text block */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-16 max-w-lg">
              <div className="flex flex-col justify-start items-start  gap-4">
                <div className="bg-orange-100 border border-gray rounded-l-full rounded-r-full py-1.5 px-6 flex justify-center items-center border-none">
                  <p className="text-black font-semibold text-md">
                    Seamless Sceduling
                  </p>
                </div>
                <div className="max-w-2xl antialiased">
                  <p className="text-4xl font-bold text-zinc-800">
                    Focus on what matters most for you
                  </p>
                </div>
              </div>
              <div className="max-w-xl space-y-4">
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
              <div className="flex self-stretch items-end justify-center">
                <img
                  className="w-16 h-16 rounded-full border-2 border-white"
                  src={girl}
                  alt=""
                />
              </div>
              <div className="flex mb-3">
                <div className="flex-start max-w-xs  bg-zinc-800 space-y-2 rounded-t-2xl rounded-br-2xl rounded-bl p-4 mb-3">
                  <p className="text-white text-sm font-semibold">
                    I tested many calender app. This is the best of all! It
                    saves me hours of time.
                  </p>
                  <p className="text-slate-400 font-semibold text-sm">
                    Carla, Head of Finace
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2  image calender*/}
          <div className="w-6/12">
            <img
              src="https://framerusercontent.com/images/KsZ6wO13QZewZKHzx7JNgFn88.png?scale-down-to=1024"
              alt="Calender"
            />
          </div>
        </div>
      </section>
      <div className="space-y-40">
        {/* 2nd feture */}
        <Feature2 />
        {/* 3rd Feature */}
        <Feature3 />
        {/* 4th Feature */}
        <Feature4 />
        {/* 5th Feature */}
        <Feature5 />
      </div>
    </div>
  );
};

export default Features;
