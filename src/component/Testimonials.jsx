import React from "react";
import { feedback } from "../constants";
import { FeedBackCard } from "../component";
import { motion } from "framer-motion";
import { i } from "framer-motion/client";

function Testimonials() {
  return (
    <section id="clients" className="flex flex-col gap-10">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex md:flex-row flex-col items-center justify-between space-y-10 md:space-y-0"
      >
        <h1 className=" w-full md:w-1/2 font-Poppins font-[600] text-[40px] md:text-[48px] leading-[150%] text-white max-w-[470px]">
          What people are <br className="md:block hidden" /> saying about us
        </h1>
        <p className="w-full lg:mr-30 mr-0 md:w-1/2 font-Poppins text-[15px] md:text-[18px] leading-[180%] text-[#FFFFFFB2] max-w-[450px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </motion.div>

      <div className="flex flex-wrap md:flex-row flex-col items-center justify-center">
        {feedback.map((feed, index) => {
          return (
            <FeedBackCard
              index={index}
              key={feed.id}
              content={feed.content}
              name={feed.name}
              title={feed.title}
              img={feed.img}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Testimonials;
