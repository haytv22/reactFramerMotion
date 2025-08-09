import React from "react";
import { apple, bill, google } from "../assets";
import { motion } from "framer-motion";
function Billing() {
  return (
    <section
      id="product"
      className="flex md:flex-row flex-col-reverse items-center justify-between w-full "
    >
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="md:w-[60%] relative"
      >
        <img
          src={bill}
          alt=""
          className="w-[530px] h-[455px] object-contain mx-auto"
        />
        <div className="bg-[rgba(255,255,255,_0.6)] blur-[300px] absolute -top-20 -left-10 z-1 w-[50%] h-[50%] rounded-full "></div>
        <div className="bg-[linear-gradient(90deg,_#f4c4f3_0%,_#fc67fa_100%)] blur-[200px] absolute bottom-0 left-0 z-1 w-[30%] h-[30%] rounded-full "></div>
      </motion.div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-1 flex-col justify-start items-center space-y-10 "
      >
        <h4 className="font-Poppins font-[600] text-[48px] lenading-[100%] lg:leading-[160%] text-white">
          Easily control your billing & invoicing.
        </h4>
        <p className="text-[#FFFFFFB2] text-[18px] font-Poppins">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex justify-start items-center space-x-5 w-full">
          <img
            src={apple}
            alt=""
            className="cursor-pointer w-[129px] h-[42px]  object-contain"
          />
          <img
            src={google}
            alt=""
            className="cursor-pointer w-[129px] h-[42px] object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Billing;
