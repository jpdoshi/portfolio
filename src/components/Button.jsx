"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Button = ({ href, text, icon, secondary, sameTab }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", damping: 18, mass: 1.2, stiffness: 300 }}
    >
      <Link
        href={href}
        target={sameTab ? "_self" : "_blank"}
        style={{
          height: "60px",
          lineHeight: "60px",
          display: "flex",
          backgroundColor: secondary ? "#fff" : "var(--dark-color)",
          border: "1px solid #eee",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
          color: secondary ? "black" : "white",
          borderRadius: "32px",
          paddingInline: "30px",
          gap: "6px",
          fontFamily: "Poppins",
          fontSize: "18px",
          fontWeight: 500,
        }}
      >
        <span className="text-nowrap">{text && text}</span>
        <span>{icon && icon}</span>
      </Link>
    </motion.div>
  );
};

export default Button;
