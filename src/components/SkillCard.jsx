"use client";

import { motion } from "framer-motion";

const SkillCard = ({ icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileHover={{ rotate: 5, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1, viewTarget: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-[#fff] flex rounded-[12px] p-[24px]">
        <div className="mx-auto">{icon}</div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
