import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="content nav">
      <Link
        href={"/"}
        className="poppins font-bold text-[20px]"
        style={{ lineHeight: "80px" }}
      >
        jpdoshi
      </Link>
      <ul className="flex gap-[32px] xl:gap-[48px] ml-[32px] xl:ml-0 whitespace-nowrap font-[500] overflow-x-auto">
        <li className="opacity-65 hover:opacity-100">
          <Link href="mailto:jpdoshi2811@gmail.com" target="_blank">
            E-mail
          </Link>
        </li>
        <li className="opacity-65 hover:opacity-100">
          <Link
            href="https://www.linkedin.com/in/jainam-doshi-24063a2a0"
            target="_blank"
          >
            LinkedIn
          </Link>
        </li>
        <li className="opacity-65 hover:opacity-100">
          <Link href="https://instagram.com/_jpdoshi" target="_blank">
            Instagram
          </Link>
        </li>
        <li className="opacity-65 hover:opacity-100">
          <Link href="https://github.com/jpdoshi" target="_blank">
            Github
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
