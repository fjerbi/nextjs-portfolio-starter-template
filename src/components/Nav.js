import { useEffect, useState } from "react";
import Logo from "../images/logojohndoe.png";
import { RiMenuLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";
import useDarkMode from "../utils/useDarkMode";
import Toggle from "./Toggle";

function Nav() {
  const [sidebar, setSidebar] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <motion.div
      initial={{ position: "relative" }}
      animate={
        navbar ? { position: "sticky", top: 0 } : { position: "relative" }
      }
    >
      <div
        className={
          navbar
            ? "stickyNavbarStyles dark:bg-gray-900"
            : "flex bg-[#F6F8FB] items-center  dark:bg-gray-900 justify-between w-full py-8 px-8 sm:px-16 z-50"
        }
      >
        <Link
          to="Section1"
          smooth={true}
          offset={-110}
          duration={200}
          activeClass="active"
          className="flex items-center space-x-3 cursor-pointer dark:bg-gray-900"
        >
          <h3 className="dark:bg-gray-900 text-2xl text-[#5C637C] font-light hidden md:flex">
            Your
            <span className="font-semibold dark:bg-gray-900">Name</span>
          </h3>
        </Link>
        <div className="flex dark:bg-gray-900  text-[#5C637C] items-center space-x-3">
          <div className="items-center hidden space-x-4 dark:bg-gray-900 lg:flex">
            <Link
              to="Section1"
              spy={true}
              smooth={true}
              offset={-110}
              duration={200}
              activeClass="active"
              className="dark:bg-gray-900 navLink"
            >
              Section1
            </Link>
            <Link
              to="Section2"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="active"
              className="dark:bg-gray-900 navLink"
            >
              Section2
            </Link>
            <Link
              to="Section3"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="active"
              className="dark:bg-gray-900 navLink"
            >
              Section 3
            </Link>
            <Link
              to="Section4"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="active"
              className="dark:bg-gray-900 navLink"
            >
              Section 4
            </Link>

            <Link
              to="Section5"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="active"
              className="dark:bg-gray-900 navLink"
            >
              Section 5
            </Link>
          </div>
        <Toggle/>
          <button
            className="lg:hidden dark:bg-gray-900 bg-white border border-transparent hover:shadow-md hover:border-gray-200 focus:outline-none font-medium text-[#5C637C] p-3.5 rounded-lg text-xl"
            onClick={() => setSidebar(true)}
          >
            <RiMenuLine />
          </button>
        </div>
      </div>

      <motion.div
        className="fixed top-0 z-50 flex items-center w-full h-screen dark:bg-gray-900 lg:hidden"
        initial={{ opacity: 0, x: "-100%" }}
        animate={sidebar ? "open" : "closed"}
        variants={variants}
      >
        <div className=" dark:bg-gray-900 flex items-center h-screen px-4 w-80 sm:w-96 bg-[#F6F8FB] flex-col overflow-y-scroll hide-scrollbar shadow-2xl bg-opacity-60 backdrop-filter backdrop-blur-md">
          <div className="flex items-center justify-between w-full py-8 dark:bg-gray-900">
            <div className="flex items-center space-x-2 dark:bg-gray-900">
              <img src={Logo} alt="John Doe" className="w-10 sm:w-12" />
              <h3 className="dark:bg-gray-900 text-xl text-[#5C637C] font-light">
                Your<span className="font-semibold">Name</span>
              </h3>
            </div>

            <button
              className="dark:bg-gray-900 lg:hidden bg-white border border-transparent hover:shadow-md hover:border-gray-200  focus:outline-none font-medium text-gray-500 p-3.5 rounded-lg text-xl"
              onClick={() => setSidebar(false)}
            >
              <IoMdClose />
            </button>
          </div>

          {/* Mobile First Menu */}
          <div className="flex flex-col items-center w-full py-5 space-y-2 dark:bg-gray-900">
            <Link
              to="Section1"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="active"
              className=" dark:bg-gray-900 sidebar-link"
              onClick={() => setSidebar(false)}
            >
              Section 1
            </Link>
            <Link
              to="Section2"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="active"
              className="dark:bg-gray-900 sidebar-link"
              onClick={() => setSidebar(false)}
            >
              Section 2
            </Link>
            <Link
              to="Section3"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="active"
              className="dark:bg-gray-900 sidebar-link"
              onClick={() => setSidebar(false)}
            >
              Section 3
            </Link>
            <Link
              to="Section4"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="active"
              className="dark:bg-gray-900 sidebar-link"
              onClick={() => setSidebar(false)}
            >
              Section 4
            </Link>

            <Link
              to="Section5"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="active"
              className="dark:bg-gray-900 sidebar-link"
              onClick={() => setSidebar(false)}
            >
              Section 5
            </Link>
          </div>
        </div>

        <div
          className="flex-grow h-screen bg-black bg-opacity-25 dark:bg-gray-900"
          onClick={() => setSidebar(false)}
        ></div>
      </motion.div>
    </motion.div>
  );
}

export default Nav;
