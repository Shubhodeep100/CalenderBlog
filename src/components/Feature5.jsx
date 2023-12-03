import React from "react";

const Feature5 = () => {
  return (
    <section className="flex flex-col justify-start mt-10 heroAllignment gap-20">
      {/* Feture text block */}
      <div className="flex flex-col justify-start items-center gap-4 ">
        <div className="bg-slate-100 border border-gray rounded-l-full rounded-r-full p-2 px-4 flex justify-center items-center border-none">
          <p className="text-black font-semibold text-md">
            And so much more... 💼
          </p>
        </div>
        <div className="text-center max-w-3xl">
          <p className="text-5xl font-extrabold text-zinc-800">
            Our features to make your life easier
          </p>
        </div>
      </div>

      <div className="section-cards">
        {/*  1st card  */}
        <div className="section-card space-y-4">
          <div className="center-image-container">
            <div className="center-image">
              <img
                src="https://framerusercontent.com/images/psdpn17XuwZ0NdeAgqZ1B9jIs.svg"
                alt=""
              />
            </div>
          </div>
          <div className="flex">
            <div className="bg-slate-100 border border-gray rounded-l-full rounded-r-full p-2 px-4 flex justify-center items-center border-none">
              <p className="text-black font-semibold text-sm">
                Cross Device Sync
              </p>
            </div>
          </div>

          <div className="section-card-here text-sm font-medium">
            Keep your schedule in sync across all your devices, ensuring
            seamless access to your calendar, events, and tasks wherever you go.
          </div>
        </div>
        {/*  2nd Card  */}
        <div className="section-card space-y-4">
          <div className="center-image-container">
            <div className="center-image">
              <img
                src="https://framerusercontent.com/images/9zLLT2PHM1pdm0cmjDvqVV6u4.svg"
                alt=""
              />
            </div>
          </div>
          <div className="flex">
            <div className="bg-orange-100 border border-gray rounded-l-full rounded-r-full p-2 px-4 flex justify-center items-center border-none">
              <p className="text-black font-semibold text-sm">
                Auto Event Import
              </p>
            </div>
          </div>

          <div className="section-card-here text-sm font-medium">
            Automatically import events from emails, social media, and other
            sources, so you never miss a beat or have to manually input details.
          </div>
        </div>
        {/*  3nd Card  */}
        <div className="section-card space-y-4">
          <div className="center-image-container">
            <div className="center-image">
              <img
                src="https://framerusercontent.com/images/MnBPtp8lNOwne9QGiLZLBCkZK9k.svg"
                alt=""
              />
            </div>
          </div>
          <div className="flex">
            <div className="bg-cyan-100 border border-gray rounded-l-full rounded-r-full p-2 px-4 flex justify-center items-center border-none">
              <p className="text-black font-semibold text-sm">
                Task Deligation
              </p>
            </div>
          </div>

          <div className="section-card-here text-sm font-medium">
            Easily assign tasks to team members, family, or friends, promoting
            shared responsibility and seamless collaboration.
          </div>
        </div>

        {/*  4nd Card  */}
        <div className="section-card space-y-4">
          <div className="center-image-container">
            <div className="center-image">
              <img
                src="https://framerusercontent.com/images/VFrv8s9Ou5YYTsx7jkOfyXmAm2Y.png?scale-down-to=512"
                alt=""
              />
            </div>
          </div>
          <div className="flex">
            <div className="bg-emerald-100 border border-gray rounded-l-full rounded-r-full p-2 px-4 flex justify-center items-center border-none">
              <p className="text-black font-semibold text-sm">
                Voice Command Integration
              </p>
            </div>
          </div>

          <div className="section-card-here text-sm font-medium">
            Quickly create events, set reminders, or reschedule appointments
            with voice commands, thanks to compatibility with popular virtual
            assistants
          </div>
        </div>
        {/*  5nd Card  */}
        <div className="section-card space-y-4">
          <div className="center-image-container">
            <div className="center-image">
              <img
                src="https://framerusercontent.com/images/l2ZsBz5u7WqpiyCOQ4jeJmYCYIc.png?scale-down-to=512"
                alt=""
              />
            </div>
          </div>
          <div className="flex">
            <div className="bg-red-100 border border-gray rounded-l-full rounded-r-full p-2 px-4 flex justify-center items-center border-none">
              <p className="text-black font-semibold text-sm">
                Customizable Alerts
              </p>
            </div>
          </div>

          <div className="section-card-here text-sm font-medium">
            Personalize notification types and timings for events, tasks, and
            goals, ensuring you stay on track and informed without feeling
            overwhelmed.
          </div>
        </div>
        {/*  6nd Card  */}
        <div className="section-card space-y-4">
          <div className="center-image-container">
            <div className="center-image">
              <img
                src="https://framerusercontent.com/images/RGak3EPkyg9scIKkezsY8Rn7E.png?scale-down-to=512"
                alt=""
              />
            </div>
          </div>
          <div className="flex">
            <div className="bg-purple-400 border border-gray rounded-l-full rounded-r-full p-2 px-4 flex justify-center items-center border-none">
              <p className="text-black font-semibold text-sm">
                Privacy Protection
              </p>
            </div>
          </div>

          <div className="section-card-here text-sm font-medium">
            Safeguard your personal information and event details with our
            robust security measures, including end-to-end encryption and
            optional password protection.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature5;
