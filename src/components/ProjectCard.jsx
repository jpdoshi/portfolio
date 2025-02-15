"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ProjectCard = ({ imgSrc, href, title, description, techIcons }) => {
  return (
    <Link href={href} target="_blank">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          viewTarget: 0.5,
        }}
        viewport={{ once: true }}
        whileHover={{ scale: 0.95 }}
        exit={{ scale: 1 }}
        transition={{ type: "spring", damping: 16, mass: 0.8, stiffness: 300 }}
        className="bg-[#fff] rounded-[12px] h-full"
      >
        <img
          src={imgSrc}
          alt="Could not load image"
          loading="lazy"
          height={"auto"}
          width={"100%"}
          className="rounded-t-[12px]"
        />
        <div className="p-[16px] text-start">
          <h3 className="text-[18px] md:text-[21px] xl:text-[24px] font-bold poppins md:mb-1">
            {title}
          </h3>
          <p className="text-[16px] md:text-[18px] leading-[140%]">
            {description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
