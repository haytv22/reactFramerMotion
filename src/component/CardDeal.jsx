import React from "react";
import Button from "./Button";
import { card } from "../assets";

function CardDeal() {
  return (
    <section className="flex md:flex-row flex-col items-center justify-center md:space-y-0 space-y-15 space-x-0 mb:space-x-10">
      <div className="flex flex-col space-y-10 items-start justify-center w-full md:w-[60%]">
        <h2 className="font-Poppins font-[600] text-white leading-[160%] md:text[48px] text-[40px]">
          Find a better card deal <br className="md:block hidden" />
          in few easy steps.
        </h2>
        <p className="font-Abel leading-[170%] text-[#FFFFFFB2] text-[15px] md:text-[18px] max-w-[500px]">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <div>
        <img src={card} alt="" className="w-[513px] h-[450px] object-contain" />
      </div>
    </section>
  );
}

export default CardDeal;
