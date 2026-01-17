import { Link, useLocation } from "react-router";
import Logo from "../assets/images/logo.png";
import { motion } from "framer-motion";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <nav className="w-full grid grid-cols-3 p-6">
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ delay: 1.0 }}
        className="col-span-1"
      >
        <Link to="/">
          <img src={Logo} height={36} width={36} alt="logo" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 1.0 }}
        className="col-span-2 flex flex-col items-end"
      >
        <Link
          to="/about"
          className={`font-semibold hover:text-black duration-smooth uppercase hover:animate-pulse ${
            pathname === "/about" ? "text-black" : "text-neutral-500"
          }`}
        >
          About
        </Link>
        <Link
          to="/skills"
          className={`font-semibold hover:text-black duration-smooth uppercase hover:animate-pulse ${
            pathname === "/skills" ? "text-black" : "text-neutral-500"
          }`}
        >
          Skills
        </Link>
        <Link
          to="/work"
          className={`font-semibold hover:text-black duration-smooth uppercase hover:animate-pulse ${
            pathname === "/work" ? "text-black" : "text-neutral-500"
          }`}
        >
          Work
        </Link>
        <Link
          to="/contact"
          className={`font-semibold hover:text-black duration-smooth uppercase hover:animate-pulse ${
            pathname === "/contact" ? "text-black" : "text-neutral-500"
          }`}
        >
          Contact
        </Link>
      </motion.div>
    </nav>
  );
};

export default Header;
