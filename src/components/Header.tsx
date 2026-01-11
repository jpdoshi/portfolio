import { Link, useLocation } from "react-router";
import Logo from "../assets/images/logo.png";
import { useEffect } from "react";
import Aos from "aos";

const Header = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    Aos.refresh();
  }, [pathname]);

  return (
    <nav className="w-full grid grid-cols-3 p-6">
      <div className="col-span-1">
        <Link to="/">
          <img
            src={Logo}
            height={36}
            width={36}
            alt="logo"
            data-aos="fade-down"
          />
        </Link>
      </div>
      <div className="col-span-2 flex flex-col items-end">
        <Link
          to="/about"
          className={`font-semibold hover:text-black duration-smooth uppercase ${
            pathname === "/about" ? "text-black" : "text-neutral-500"
          }`}
          data-aos="fade-left"
          data-aos-delay="300"
        >
          About
        </Link>
        <Link
          to="/skills"
          className={`font-semibold hover:text-black duration-smooth uppercase ${
            pathname === "/skills" ? "text-black" : "text-neutral-500"
          }`}
          data-aos="fade-left"
          data-aos-delay="600"
        >
          Skills
        </Link>
        <Link
          to="/work"
          className={`font-semibold hover:text-black duration-smooth uppercase ${
            pathname === "/work" ? "text-black" : "text-neutral-500"
          }`}
          data-aos="fade-left"
          data-aos-delay="900"
        >
          Work
        </Link>
        <Link
          to="/contact"
          className={`font-semibold hover:text-black duration-smooth uppercase ${
            pathname === "/contact" ? "text-black" : "text-neutral-500"
          }`}
          data-aos="fade-left"
          data-aos-delay="1200"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;
