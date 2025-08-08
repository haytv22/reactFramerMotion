import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import { a, div } from "framer-motion/client";
function Footer() {
  return (
    <>
      <section className="p-10 flex flex-col lg:flex-row gap-20 lg:gap-30 w-full bg-[#07080d] items-start justify-between px-20 lg:px-40">
        <div className="flex flex-col items-start justify-between max-w-[312px] gap-5">
          <img
            src={logo}
            alt=""
            className="w-[206px] md:w-[266px] object-contain "
          />
          <p className="font-poppins md:text-[18px] text-[15px] text-[#FFFFFFB2] leading-[32px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 items-start justify-between flex-1">
          {footerLinks.map((footerLink, index) => {
            return (
              <div key={index} className="flex flex-col items-start gap-5">
                <div className="font-poppins text-[18px] font-[500] text-[#FFFFFF]">
                  {footerLink.title}
                </div>
                <div className="flex flex-col gap-4 items-start justify-between">
                  {footerLink.links.map((link, index) => {
                    return (
                      <a
                        key={index}
                        href={link.link}
                        className="font-poppins text-[16px] text-[#FFFFFFB2]"
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Footer;
