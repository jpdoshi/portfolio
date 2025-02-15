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
          <div className="w-full max-w-[650px] mx-auto bg-white rounded-[16px] p-[16px]">
            <div className="border-b-[#D4D4D8] border-b p-[8px]">
              <Image
                src={"/images/companies/wings-tech.jpg"}
                height={80}
                width={200}
                alt="Wings Tech Solutions"
              />
            </div>
            <div className="border-b-[#D4D4D8] p-[8px]">
              <Image
                src={"/images/companies/phoenix.jpg"}
                height={80}
                width={200}
                alt="Phoenix Code Labs"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
