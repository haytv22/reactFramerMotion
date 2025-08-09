import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

function CTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className="box-shadow flex flex-col md:flex-row items-start md:gap-0 gap-5 md:items-center justify-center w-full h-[293px] bg-black-gradient-2 rounded-[20px] p-[50px] md:p-[70px]"
    >
      <div className="flex flex-col gap-5 lg:gap-10 items-start justify-center flex-1">
        <h2 className="font-poppins text-[30px] md:text-[48px] leading-[140%] text-[#FFFFFF] font-[600]">
          Let’s try our service now!
        </h2>
        <p className="font-poppins text-[10px] md:text-[18px] leading-[160%] text-[#FFFFFFB2]">
          Everything you need to accept card payments{" "}
          <br className="hidden md:block" />
          and grow your business anywhere on the planet.
        </p>
      </div>
      <div>
        <Button />
      </div>
    </motion.div>
  );
}

export default CTA;
