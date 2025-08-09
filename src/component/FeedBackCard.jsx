import React from "react";
import { quotes } from "../assets";
import { motion } from "framer-motion";

function FeedBackCard({ content, name, title, img, index }) {
  return (
    <motion.div
      initial={{ x: "80%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 * index }}
      className="p-10 flex flex-col items-start justify-between bg-black-gradient-hover rounded-[20px] w-[320px] h-[345px] md:w-[370px] md:h-[395px]"
    >
      <div>
        <img src={quotes} alt="" />
      </div>
      <div>
        <p className="font-poppins text-[18px] leading-[180%] text-white">
          {content}
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-5">
        <img
          src={img}
          alt=""
          className="size-[48px] rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h4 className="font-poppins text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins text-[16px] leading-full opacity-[50%] text-white">
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default FeedBackCard;
