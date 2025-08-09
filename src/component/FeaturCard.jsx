import React from "react";
import { motion } from "framer-motion";

function featurCard({ icon, title, content, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="flex flex-row p-6 rounded-[20px] feature-card "
    >
      <div className="size-[64px] rounded-full flex justify-center items-center bg-[#09977C1A]">
        <img src={icon} alt="" className="size-[50%] object-contain" />
      </div>
      <div className="flex flex-1 flex-col ml-3">
        <h4 className="font-[600] font-Poppins text-[18px] text-white leading-[32px]">
          {title}
        </h4>
        <p className="font-[400] font-Poppins text-[16px] text-white opacity-[70%] leading-[23px]">
          {content}
        </p>
      </div>
    </motion.div>
  );
}

export default featurCard;
