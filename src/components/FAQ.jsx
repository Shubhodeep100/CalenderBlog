import React from "react";
import Dropques from "./Dropques";
import Dropq2 from "./Dropq2";
import Dropq3 from "./Dropq3";
import Dropq4 from "./Dropq4";


const FAQ = () => {
  return (
    <div className="fixed-ques h-screen">
      <section
        Name="FAQs"
        className="flex flex-col mt-10 heroAllignment gap-24 mb-10"
      >
        <div className="flex flex-col justify-start items-center gap-4">
          <div className="bg-slate-100 border border-gray rounded-l-full rounded-r-full p-2 px-4 flex justify-center items-center border-none">
            <p className="text-black font-semibold text-md">
              Relevant stuff, bla bla 📣
            </p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-zinc-800">
              Frequently asked questions
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-9 h-screen">
          <Dropques/>
          <Dropq2/>
          <Dropq3/>
          <Dropq4/>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
