import React from "react";
import { discount, robot } from "../assets";
import { GetStarted } from "../component";

function Hero() {
  return (
    <section id="Home" className="flex lg:flex-row flex-col sm:my-16 my-6">
      <div className="flex-1 flex justify-center items-start flex-col sm:px-16 px-6">
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img
            src={discount}
            className="size-[32px] relative -right-10"
            alt=""
          />
          <p className="font-poppins font-normal text-dimWhite lg:text-[18px] text-[17px] leading-[30.8px] ml-2">
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-semibold flex-1 font-poppins sm:text-[72px] text-[52px] text-white sm:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="sm:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="w-full font-poppins font-semibold sm:text-[68px] text-[52px] text-white sm:leading-[100px] leading-[75px]">
          Payment Method.
        </h1>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-5 max-w-[470px]">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="lg:w-[40%] w-[100%] flex flex-1 justify-center items-center md:my-0 my-10 relative">
        <img src={robot} alt="" className="w-[100%] h-[100%] relative z-5 " />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 rounded-full blue__gradient"></div>
      </div>
      <div className="sm:hidden flex justify-center items-center">
        <GetStarted />
      </div>{" "}
    </section>
  );
}

export default Hero;
