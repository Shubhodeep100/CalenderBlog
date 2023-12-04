import React from "react";
import Priceswitch from "./Priceswitch";

const Pricing = () => {
  return (
    <div className="fixed-container">
      <section
        Name="Pricing"
        className="flex flex-col mt-10 heroAllignment gap-24"
      >
        <div className="flex flex-col justify-start items-center gap-4">
          <div className="bg-slate-200 border border-gray rounded-l-full rounded-r-full p-2 px-4 flex justify-center items-center border-none">
            <p className="text-black font-semibold text-md">
              Pricing and plans 💰
            </p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-zinc-800">
              Find the best plan for your needs
            </p>
          </div>
        </div>

        <Priceswitch />

        <div className="flex flex-row gap-4">
          {/* card1 */}
          <div className="w-full max-w-sm  bg-white border border-gray-200 rounded-2xl shadow p-6">
            <div className="flex flex-col gap-3">
              <div className="flex">
                <div className="bg-slate-100 border border-gray rounded-l-full rounded-r-full p-2 px-7 flex justify-center items-center border-none">
                  <p className="text-black font-semibold text-md">Free</p>
                </div>
              </div>
              <p className="mb-4 text-sm font-medium text-slate-600">
                So you can see how incredible our tool is
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row text-gray-900 ">
                  <span className="text-5xl font-extrabold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">
                    0
                  </span>
                  <div className=" text-xl font-normal text-gray-500 text-end">
                    /mo
                  </div>
                </div>
                <div className="text-sm font-semibold text-slate-700">
                  Free forever
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button className="font-semibold text-white bg-zinc-800 p-3 px-5 rounded-xl relative cursor-pointer overflow-hidden transform transition duration-500 hover:scale-110">
                  <span className="text-md px-1">Get started</span>
                </button>
                <p className="text-center">No credit card needed</p>
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <p className="text-sm">What's included:</p>
              <ul className="space-y-5 my-7">
                <li className="flex items-center">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-600 ms-3">
                    A cool feature
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-600 ms-3">
                    A basic feature
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-600 ms-3">
                    A top feature with limitation
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-600 ms-3">
                    An incredible feature so useful
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-600  ms-3">
                    A top feature
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* card 2 */}
          <div className="w-full max-w-sm  bg-white border border-gray-200 rounded-2xl shadow p-6">
            <div className="flex flex-col gap-3">
              <div className="flex">
                <div className="bg-orange-100 border border-gray rounded-l-full rounded-r-full p-2 px-7 flex justify-center items-center border-none">
                  <p className="text-black font-semibold text-md">Starter</p>
                </div>
              </div>
              <p className="mb-4 text-sm font-medium text-slate-600">
                So you can see how incredible our tool is
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row text-gray-900 ">
                  <span className="text-5xl font-extrabold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">
                    19
                  </span>
                  <div className=" text-xl font-normal text-gray-500 text-end">
                    /mo
                  </div>
                </div>
                <div className="text-sm font-semibold text-slate-700">
                  Free forever
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button className="font-semibold text-white bg-zinc-800 p-3 px-5 rounded-xl relative cursor-pointer overflow-hidden transform transition duration-500 hover:scale-110">
                  <span className="text-md px-1">Get started</span>
                </button>
                <p className="text-center">No credit card needed</p>
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <p className="text-sm">All Free features, plus:</p>
              <ul className="space-y-5 my-7">
                <li className="flex items-center">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-600  ms-3">
                    A cool feature
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-600 ms-3">
                    A basic feature
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-600 ms-3">
                    A top feature with limitation
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-600  ms-3">
                    An incredible feature so useful
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-600 ms-3">
                    A top feature
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* card 3 */}
          <div className="w-full max-w-sm  bg-white border border-gray-200 rounded-2xl shadow p-6">
            <div className="flex flex-col gap-3">
              <div className="flex">
                <div className="bg-slate-100 border border-gray rounded-l-full rounded-r-full p-2 px-7 flex justify-center items-center border-none">
                  <p className="text-black font-semibold text-md">Free</p>
                </div>
              </div>
              <p className="mb-4 text-sm font-medium text-slate-600">
                So you can see how incredible our tool is
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row text-gray-900 ">
                  <span className="text-5xl font-extrabold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">
                    49
                  </span>
                  <div className=" text-xl font-normal text-gray-500 text-end">
                    /mo
                  </div>
                </div>
                <div className="text-sm font-semibold text-slate-700">
                  Free forever
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button className="font-semibold text-white bg-zinc-800 p-3 px-5 rounded-xl relative cursor-pointer overflow-hidden transform transition duration-500 hover:scale-110">
                  <span className="text-md px-1">Get started</span>
                </button>
                <p className="text-center">No credit card needed</p>
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <p className="text-sm">All Free features, plus:</p>
              <ul className="space-y-5 my-7">
                <li className="flex items-center">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-600  ms-3">
                    A cool feature
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-600  ms-3">
                    A basic feature
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-600  ms-3">
                    A top feature with limitation
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-600  ms-3">
                    An incredible feature so useful
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-600  ms-3">
                    A top feature
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-600  ms-3">
                    You need this feature
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
