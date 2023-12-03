import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import p1 from "../assets/miltonlogo.jpg";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Features",
    },
    {
      id: 2,
      link: "Testimonial",
    },
    {
      id: 3,
      link: "Pricing",
    },
    {
      id: 4,
      link: "FAQs",
    },
    {
      id: 5,
      link: "Blog",
    },
  ];
  return (
    <div className="fixed w-full py-4 px-4 bg-amber-50 text-white z-30 border-b">
      <div className="flex fixed-container justify-between items-center">
        <div className="flex  cursor-pointer">
          <div className="w-7 h-7 rounded-md overflow-hidden">
            <img
              src={p1}
              alt="Milton Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm font-medium text-black font-signature ml-1">
            Milton
          </p>
        </div>
        <ul className="hidden md:flex justify-between items-center">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize text-md font-semibold text-gray-500 hover:text-black hover:underline"
            >
              <Link to={link} smooth duration={600}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <button className="font-semibold text-black bg-gray-100 p-1.5 px-3 mx-2 rounded-xl relative cursor-pointer overflow-hidden transform transition duration-300 hover:scale-110">
            <span className="text-sm px-1">Log in</span>
          </button>
          <button className="font-semibold text-white bg-gray-900 p-1.5 px-3 rounded-xl relative cursor-pointer overflow-hidden transform transition duration-300 hover:scale-110">
            <span className="text-sm px-1">Get Started</span>
          </button>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="flex justify-around cursor-pointer z-10 text-gray-500 md:hidden"
        >
          {nav ? (
            <RxCross2 size={30} className="text-black" />
          ) : (
            <AiOutlineMenu size={30} className="text-black" />
          )}
        </div>
        {nav && (
          <div className="flex flex-col bg-white justify-content-center absolute  items-center top-16 left-0 w-full h-68 border-b">
            {links.map(({ id, link }) => (
              <ul
                key={id}
                className="font-medium text-gray-700 px-2 cursor-pointer py-1.5 text-sm"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </ul>
            ))}
            <div className="flex flex-col space-y-3 pb-10">
              <button className="font-semibold text-black bg-gray-100 p-1 mx-2 rounded-xl relative cursor-pointer overflow-hidden transform transition duration-300 hover:scale-110">
                <span className="text-sm px-1">Log in</span>
              </button>
              <button className="font-semibold text-white bg-gray-900 p-1 rounded-xl relative cursor-pointer overflow-hidden transform transition duration-300 hover:scale-110">
                <span className="text-xs px-1">Get Started</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
