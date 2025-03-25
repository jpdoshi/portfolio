"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      className="content nav"
    >
      <Link href={"/"} className="poppins font-bold text-[21px] tracking-tight">
        <motion.h1 whileHover={{ scale: 1.1 }}>jpdoshi.tech</motion.h1>
      </Link>
      <ul className="flex gap-[24px] xl:gap-[48px] ml-[24px] xl:ml-0 whitespace-nowrap font-[500] overflow-x-auto translate-y-[1px]">
        <motion.li
          transition={{ type: "tween", duration: 0.2 }}
          whileHover={{ y: -2 }}
          whileTap={{ y: -6 }}
          className="opacity-60 hover:opacity-100 cursor-pointer tracking-normal"
        >
          <Link href="mailto:jpdoshi2811@gmail.com" target="_blank">
            E-mail
          </Link>
        </motion.li>
        <motion.li
          transition={{ type: "tween", duration: 0.2 }}
          whileHover={{ y: -2 }}
          whileTap={{ y: -6 }}
          className="opacity-60 hover:opacity-100 cursor-pointer tracking-normal"
        >
          <Link
            href="https://www.linkedin.com/in/jainam-doshi-24063a2a0"
            target="_blank"
          >
            LinkedIn
          </Link>
        </motion.li>
        <motion.li
          transition={{ type: "tween", duration: 0.2 }}
          whileHover={{ y: -2 }}
          whileTap={{ y: -6 }}
          className="opacity-60 hover:opacity-100 cursor-pointer tracking-normal"
        >
          <Link href="https://instagram.com/_jpdoshi" target="_blank">
            Instagram
          </Link>
        </motion.li>
        <motion.li
          transition={{ type: "tween", duration: 0.2 }}
          whileHover={{ y: -2 }}
          whileTap={{ y: -6 }}
          className="opacity-60 hover:opacity-100 cursor-pointer tracking-normal"
        >
          <Link href="https://github.com/jpdoshi" target="_blank">
            Github
          </Link>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
