import React from "react";
import { stats } from "../constants";
function Stats() {
  return (
    <div className=" flex-wrap flex w-full justify-start md:p-0 p-10 md:justify-center items-center sm:space-x-14 space-y-10">
      {stats.map((stat, index) => {
        return (
          <div key={stat.id}>
            <div className="flex items-center justify-between " key={stat.id}>
              <div className="flex items-center justify-between space-x-4">
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
                index === stats.length - 1 ? "hidden" : "sm:flex"
              }  hidden h-[14px] w-[1px] bg-white rounded-full`}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default Stats;
