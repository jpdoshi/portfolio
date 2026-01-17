import { motion, type Variants } from "framer-motion";

type RollingTextProps = {
  children: string;
  className?: string;
  delay?: number;
};

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.012,
      delayChildren: 0.1,
    },
  },
};

const charVariants: Variants = {
  hidden: {
    opacity: 0.25,
  },
  visible: {
    opacity: 1,
  },
};

export default function RollingText({
  children,
  className = "",
  delay = 0,
}: RollingTextProps) {
  return (
    <motion.span
      className={`flex flex-wrap overflow-hidden ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ perspective: 1000 }}
      transition={{ delay }}
    >
      {children.split("").map((char, i) => (
        <span key={i} className="relative inline-block overflow-hidden">
          <motion.span
            variants={charVariants}
            className="inline-block"
            style={{ transformOrigin: "bottom center" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
