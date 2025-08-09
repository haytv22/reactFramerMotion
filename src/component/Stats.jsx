import React from "react";
import { stats } from "../constants";
import { motion } from "framer-motion";
function Stats() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 50 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "linear" }}
      className=" flex-wrap flex w-full justify-start md:p-0 p-10 md:justify-center sm:gap-10 items-center md:space-y-0 space-y-10"
    >
      {stats.map((stat, index) => {
        return (
          <div
            key={stat.id}
            className="flex flex-row items-center justify-between gap-10"
          >
            <div className="flex items-center justify-between " key={stat.id}>
              <div className="flex items-center justify-center space-x-4">
                <h4 className="text-white font-Poppins xl:text-[40px] text-[30px] xl:leading-[53px] leading-[43px] font-[700] items-center">
                  {stat.value}
                </h4>
                <p className="font-Poppins font-normal xl:text-[25px] text-[15px] xl:leading-[26px] leading-[21px] text-gradient">
                  {stat.title}
                </p>
              </div>
            </div>
            <div
              className={`${
                index === stats.length - 1 ? "hidden" : "md:flex"
              }  hidden h-[14px] w-[1px] bg-white rounded-full`}
            ></div>
          </div>
        );
      })}
    </motion.div>
  );
}

export default Stats;
