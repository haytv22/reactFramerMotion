import React from "react";
import { arrowUp } from "../assets";
import { motion } from "framer-motion";
function GetStarted() {
  return (
    <motion.div
      drag={true}
      dragSnapToOrigin
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="flex justify-center items-center size-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer"
    >
      <div className="size-full bg-primary rounded-full flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <p className="font-medium font-poppins text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="" />
        </div>
        <p className="font-medium font-poppins text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </motion.div>
  );
}

export default GetStarted;
