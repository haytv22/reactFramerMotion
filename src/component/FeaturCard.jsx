import React from "react";

function featurCard({ icon, title, content }) {
  return (
    <div className="flex flex-row p-6 rounded-[20px] feature-card ">
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
    </div>
  );
}

export default featurCard;
