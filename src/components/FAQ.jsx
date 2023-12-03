import React from 'react'

const FAQ = () => {
  return (
    <div className="fixed-ques">
      <section
        Name="FAQs"
        className="flex flex-col mt-10 heroAllignment gap-24 mb-10"
      >
        <div className="flex flex-col justify-start items-center gap-4">
          <div className="bg-slate-200 border border-gray rounded-l-full rounded-r-full p-2 px-4 flex justify-center items-center border-none">
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

        <div className="flex flex-col">
          <button
            id="dropdownDelayButton"
            data-dropdown-toggle="dropdownDelay"
            data-dropdown-delay="500"
            data-dropdown-trigger="hover"
            className="text-black bg-slate-200 hover:bg-slate-300   font-semibold rounded-lg text-lg px-5 py-5 text-center inline-flex items-center"
            type="button"
          >
            Can I cancel my subscription?
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {/* Dropdown menu */}
          <div
            id="dropdownDelay"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <p aria-labelledby="dropdownDelayButton">
              dshbahubviuhbdviuhbfvuhbfvuhebfivuhef
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ