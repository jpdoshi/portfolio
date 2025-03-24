"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Button from "../Button";

const Experience = () => {
  return (
    <section className="content text-center">
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="poppins font-bold text-[30px] md:text-[36px] mb-[4px]">
          Work Experience
        </h2>
        <p className="text-[18px]">
          Check out my portfolio and my journey in the IT industry
        </p>
        <div className="h-[36px]" />
        <div className="flex text-start">
          <div className="w-full max-w-[650px] mx-auto bg-white rounded-[16px] px-[18px] md:px-[24px]">
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, viewTarget: 0.5 }}
              viewport={{ once: true }}
              className="border-b-[#D4D4D8] border-b py-[16px] md:py-[20px]"
            >
              <Image
                src={"/images/companies/wings-tech.jpg"}
                height={80}
                width={200}
                alt="Wings Tech Solutions"
              />
              <div className="h-[16px]" />
              <h2 className="text-[20px] md:text-[24px] font-bold poppins mb-1">
                Frontend Engineer (Aug 2024 - Jan 2025)
              </h2>
              <p className="text-[17px]">
                ReactJS, NextJS, Strapi CMS, Wordpress, Tailwind, Bootstrap
              </p>
            </motion.div>
          </div>
        </div>
        <div className="h-[36px]" />
        <div className="flex">
          <div className="flex mx-auto flex-col md:flex-row gap-[8px] md:gap-[16px]">
            <Button
              href={"https://www.linkedin.com/in/jainam-doshi-24063a2a0/"}
              text={"Hire Me - LinkedIn"}
              icon={
                <svg
                  className="translate-y-[20px]"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                    fill="#fff"
                  />
                </svg>
              }
            />
            <Button
              href={
                "https://github.com/jpdoshi/my-resume/blob/main/Jainam%20Doshi.pdf?raw=true"
              }
              text={"Get My Resume"}
              secondary={true}
              icon={
                <svg
                  className="translate-y-[20px]"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                    fill="#000000"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
