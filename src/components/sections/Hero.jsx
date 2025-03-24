"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import Button from "../Button";

const Hero = () => {
  return (
    <section className="content">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center"
        style={{ maxWidth: "650px", margin: "auto" }}
      >
        <Image
          src={"/images/pfp.png"}
          alt="profile picture"
          height={120}
          width={120}
          className="mx-auto block mb-[12px] shadow-lg rounded-full"
        />
        <p className="text-[18px]">Hi, I'm Jainam Doshi 👋</p>
        <div className="h-[16px]" />
        <h1
          className="text-[34px] md:text-[42px] xl:text-[48px] font-bold poppins"
          style={{ lineHeight: "125%" }}
        >
          Creating Amazing Mobile Apps, Digital Experiences & Solutions
        </h1>
        <div className="h-[32px]" />
        <div className="flex">
          <div className="flex mx-auto flex-col md:flex-row gap-[8px] md:gap-[16px]">
            <Button
              href={"mailto:jpdoshi2811@gmail.com"}
              text={"Contact Me"}
              sameTab={true}
            />
            <Button
              href={
                "https://github.com/jpdoshi/my-resume/blob/main/Jainam%20Doshi.pdf?raw=true"
              }
              text={"Get Resume"}
              secondary={true}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
