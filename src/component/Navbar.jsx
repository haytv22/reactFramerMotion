import React, { useEffect, useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";
import { motion, useAnimation } from "framer-motion";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const controlsImg = useAnimation();
  const controlsMenu = useAnimation();
  useEffect(() => {
    controlsImg
      .start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8 },
      })
      .then(() => {
        controlsMenu.start((i) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            delay: 0.2 * i,
          },
        }));
      });
  }, []);
  return (
    <nav className="w-full flex py-6 justify-between items-center ">
      <motion.img
        src={logo}
        alt=""
        className="w-[124px] h-[32px]"
        initial={{ opacity: 0, x: "-50%" }}
        animate={controlsImg}
        transition={{ duration: 0.8 }}
      ></motion.img>
      <motion.ul className="list-none sm:flex hidden justify-end items-center flex-1 space-x-10">
        {navLinks.map((nav, index) => {
          return (
            <motion.li
              initial={{ opacity: 0, y: "-50%" }}
              custom={index}
              animate={controlsMenu}
              key={nav.id}
              className="font-poppins font-normal cursor-pointer text-[16px] text-white"
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </motion.li>
          );
        })}
      </motion.ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          className="size-[28px] object-contain"
          src={toggle ? close : menu}
          alt=""
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 space-y-4">
            {navLinks.map((nav, index) => {
              return (
                <li
                  key={nav.id}
                  className="font-poppins font-normal cursor-pointer text-[16px] text-white"
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
