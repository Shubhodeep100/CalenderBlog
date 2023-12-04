import React from "react";
import p1 from "../assets/miltonlogo.jpg";
import li from "../assets/linkedin.png";
import fb from "../assets/facebook-fb.png";
import tw from "../assets/twitter.png";
const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-100 w-full  py-16">
        <div className=" flex fixed-container centering phone">
          {/* Milton */}
          <div className="flex justify-between flex-row wrap mb-6">
            <div className="footer-col mb-10 md:mb-0">
              <div className="flex flex-row">
                <div className="w-7 h-7 rounded-md overflow-hidden mr-2">
                  <img
                    src={p1}
                    alt="Milton Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xl font-bold mb-5 text-black">Milton</div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col text-base gap-5">
                  <p className="text-gray-700 hover:text-gray-500  hover:underline cursor-pointer ">
                    A short text explanation
                    <p>why my startup is so cool</p>
                  </p>

                  <p className="text-gray-700 hover:text-gray-500 hover:underline cursor-pointer ">
                    © My super start-up
                  </p>
                </div>

                <div className="flex flex-row gap-3">
                  <div className="w-9 h-9 rounded-md overflow-hidden hover:shadow-lg cursor-pointer">
                    <img
                      src={tw}
                      alt="Milton Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-9 h-9 rounded-md overflow-hidden hover:shadow-lg cursor-pointer">
                    <img
                      src={fb}
                      alt="Milton Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="w-9 h-9 rounded-md overflow-hidden hover:shadow-lg cursor-pointer">
                    <img
                      src={li}
                      alt="Milton Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="footer-col mb-10 md:mb-0">
              <div className="text-xl font-bold mb-5 text-black">Products</div>
              <div className="flex flex-col text-sm gap-4">
                <p className="text-gray-700 hover:text-gray-500 hover:underline cursor-pointer ">
                  Features
                </p>

                <p className="text-gray-700 hover:text-gray-500 hover:underline cursor-pointer ">
                  Testimonials
                </p>

                <p className="text-gray-700 hover:text-gray-500 hover:underline cursor-pointer ">
                  Pricing
                </p>

                <p className="text-gray-700 hover:text-gray-500 hover:underline cursor-pointer ">
                  FAQs
                </p>
              </div>
            </div>

            {/* Resources */}
            <div className="footer-col mb-10 md:mb-0">
              <div className="text-xl font-bold mb-5 text-black">Resources</div>
              <div className="flex flex-col text-sm gap-4">
                <p className="text-gray-700 hover:text-gray-500 hover:underline cursor-pointer ">
                  Change log
                </p>

                <p className="text-gray-700 hover:text-gray-500 hover:underline cursor-pointer ">
                  Help center
                </p>

                <p className="text-gray-700 hover:text-gray-500 hover:underline cursor-pointer ">
                  Blog
                </p>

                <p className="text-gray-700 hover:text-gray-500 hover:underline cursor-pointer ">
                  Contact
                </p>
              </div>
            </div>

            {/* Others */}
            <div className="footer-col mb-10 md:mb-0">
              <div className="text-xl font-bold mb-5 text-black">Others</div>
              <div className="flex flex-col text-sm gap-4">
                <p className="text-gray-700 hover:text-gray-500 hover:underline cursor-pointer ">
                  Privacy
                </p>

                <p className="text-gray-700 hover:text-gray-500 hover:underline cursor-pointer ">
                  Terms
                </p>

                <p className="text-gray-700 hover:text-gray-500 hover:underline cursor-pointer ">
                  Affiliation
                </p>

                <p className="text-gray-700 hover:text-gray-500 hover:underline cursor-pointer ">
                  Press
                </p>
              </div>
            </div>

            {/* From the blog*/}
            <div className="footer-col w-full md:w-1/4">
              <div className="text-xl font-bold mb-5 text-black">
                From the blog
              </div>
              <div className="flex flex-col text-sm gap-4">
                <p className="text-gray-700 hover:text-gray-400 hover:underline cursor-pointer ">
                  Mastering Your Schedule: Top Time Management Techniques for
                  Balancing Work and Life
                </p>
                <p className="text-gray-700 hover:text-gray-400 hover:underline cursor-pointer ">
                  Organizing Your Calendar for Enhanced Productivity and Focus
                </p>
                <p className="text-gray-700 hover:text-gray-400 hover:underline cursor-pointer ">
                  The Power of Prioritization: Effective Strategies for Managing
                  Your Time and Tasks
                </p>
                <p className="text-gray-700 hover:text-gray-400 hover:underline cursor-pointer ">
                  Maximizing Your Minutes: Essential Tips for Streamlining Your
                  Daily Routine and Calendar
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
