"use client";

import { motion } from "framer-motion";

const SkillCard = ({ icon, href, title }) => {
  return (
    <a href={href} target="_blank">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileHover={{ rotate: 5, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1, viewTarget: 0.5 }}
        viewport={{ once: true }}
        className="relative group"
      >
        <div className="border border-[#eee] shadow-lg shadow-stone-200 flex rounded-[12px] p-[24px]">
          <div className="mx-auto">{icon}</div>
        </div>
        <p className="absolute right-0 top-0 text-[#666] font-medium p-1 px-2.5 text-xs tracking-normal transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          {title}
        </p>
      </motion.div>
    </a>
  );
};

export default SkillCard;
