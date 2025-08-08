import React from "react";
import { features } from "../constants";
import { Button, FeatureCard } from "../component";
function Business() {
  return (
    <section
      id="features"
      className="w-full flex justify-between items-center lg:flex-row flex-col lg:space-x-20 space-y-10"
    >
      <div className="flex flex-col items-start justify-center space-y-10">
        <h2 className="font-poppins font-semibold lg:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          You do the business,
          <br className="sm:block hidden" /> we’ll handle the money.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] lg:max-w-[570px] max-w-[100%]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button></Button>
      </div>
      <div className="flex space-y-3 flex-col lg:w-[40%] w-[100%]">
        {features.map((feature, index) => {
          return (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              content={feature.content}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Business;
