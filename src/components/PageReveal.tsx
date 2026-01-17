import { motion } from "framer-motion";
import Logo from "../assets/images/logo.png";

const PageReveal = () => {
  return (
    <>
      <motion.div
        initial={{ top: 0 }}
        animate={{ top: "-100vh" }}
        transition={{ delay: 0.5 }}
        className="absolute top-0 left-0 h-screen w-screen bg-neutral-900 z-[999] flex justify-center items-center"
      >
        <img src={Logo} className="h-[120px] animate-bounce select-none" />
      </motion.div>
      <motion.div
        initial={{ top: 0 }}
        animate={{ top: "-100vh" }}
        transition={{ delay: 0.75 }}
        className="absolute top-0 left-0 h-screen w-screen bg-red-500 z-[99]"
      />
    </>
  );
};

export default PageReveal;
