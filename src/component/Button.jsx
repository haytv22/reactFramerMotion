import React from "react";
import { motion } from "framer-motion";
function Button() {
  return (
    <motion.button
      whileHover={{
        scale: [null, 1.1, 1.3],
        transition: {
          duration: 0.5,
          times: [0, 0.6, 1],
          ease: ["easeInOut", "easeOut"],
        },
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="bg-blue-gradient w-[170px] h-[64px] rounded-[10px] cursor-pointer text-black font-[500] font-Poppins text-[18px]"
    >
      Get Started
    </motion.button>
  );
}

export default Button;
