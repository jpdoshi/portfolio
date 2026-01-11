import { Link, useLocation } from "react-router";
import Logo from "../assets/images/logo.png";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <nav className="w-full grid grid-cols-3 p-6">
      <div className="col-span-1">
        <Link to="/">
          <img src={Logo} height={36} width={36} />
        </Link>
      </div>
      <div className="col-span-2 flex flex-col items-end">
        <Link
          to="/about"
          className={`font-semibold opacity-50 hover:opacity-100 duration-smooth uppercase ${
            pathname === "/about" && "opacity-100"
          }`}
        >
          About
        </Link>
        <Link
          to="/skills"
          className={`font-semibold opacity-50 hover:opacity-100 duration-smooth uppercase ${
            pathname === "/skills" && "opacity-100"
          }`}
        >
          Skills
        </Link>
        <Link
          to="/work"
          className={`font-semibold opacity-50 hover:opacity-100 duration-smooth uppercase ${
            pathname === "/work" && "opacity-100"
          }`}
        >
          Work
        </Link>
        <Link
          to="/contact"
          className={`font-semibold opacity-50 hover:opacity-100 duration-smooth uppercase ${
            pathname === "/contact" && "opacity-100"
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;
