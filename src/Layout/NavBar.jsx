import React, { useState } from "react";
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from "../assets/watch-movie.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faHouse,
  faTv,
  faFilm,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";

 const containerVariant = {
   hidden: {
     opacity: 0,
     x: "-100vw",
   },
   visible: {
     opacity: 1,
     x: 0,
     transition: {
       duration: 0.5,
       // delay: 0.5,
       staggerChildren: 0.5,
       mass: 0.4,
       damping: 8,
       when: "beforeChildren",
       ease: "easeInOut",
     },
   },
   exit: {
     opacity: 0,
     x: "-100vw",
     transition: {
       duration: 0.5,
       ease: "easeInOut",
     },
   },
 };
 const textAnimation = {
   hidden: {
     opacity: 0,
     x: "-100vw",
   },
   visible: {
     opacity: 1,
     x: 0,
     transition: {
       type: "spring",
       stiffness: 200,
       duration: 0.5,
       ease: "easeInOut",
     },
   },
   exit: {
     opacity: 0,
     x: "-100vw",
     transition: {
       duration: 0.5,
       ease: "easeInOut",
     },
   },
 };
function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const [isOpen, setOpen] = useState(false)
    const navigate = useNavigate()
  return (
    <header className="fixed fixed_margin max-w-[1800px] z-30 top-0 left-2/4  translate-x-[-50%] w-full flex flex-wrap gap-x-1 gap-y-2 justify-between blurred items-center  text-white px-5half  py-4">
      <nav className=" flex gap-1  relative">
        <button
          className="flex xl:hidden absolute z-50  top-[-10px] "
          onClick={() => setNavOpen(!navOpen)}
        >
          <Hamburger size={25} toggled={isOpen} toggle={setOpen} />
        </button>
        <Link
          to="/"
          className="flex gap-1 iphone:gap-2 ml-[52px] xl:ml-0 font-bold text-sm sm:text-xl font-cinzel  items-center "
          aria-label="site logo "
        >
          <img src={logo} alt="logo" className="w-[30px] aspect-square " />
          <p className="ttl ">Cinematico</p>
        </Link>
      </nav>

      <ul className="font-cinzel xl:flex items-center hidden gap-8  header_ul  font-medium">
        <li className=" items-center flex justify-center ">
          <NavLink to="/" className="flex items-center gap-2">
            {" "}
            <FontAwesomeIcon icon={faHouse} className="text-[12px]" />
            HOME
          </NavLink>
        </li>
        <li className=" items-center flex justify-center ">
          <NavLink to="/movie" className="flex items-center gap-2">
            {" "}
            <FontAwesomeIcon icon={faFilm} className="text-[12px]" /> MOVIE
          </NavLink>
        </li>
        <li className=" items-center flex justify-center ">
          <NavLink to="/tv" className="flex items-center gap-2">
            {" "}
            <FontAwesomeIcon icon={faTv} className="text-[12px]" />
            TV SHOW
          </NavLink>
        </li>
        <li className=" items-center flex justify-center ">
          <NavLink to="/genre" className="flex items-center gap-2">
            {" "}
            <FontAwesomeIcon icon={faVideo} className="text-[12px]" />
            GENRE
          </NavLink>
        </li>
      </ul>
      {/* </nav> */}
      <nav className="flex items-center gap-1 sm:gap-6   ">
        <button className="p-1" onClick={() => navigate("/search")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button className="button" onClick={() => navigate("/login")}>
          Sign in
        </button>
      </nav>
      <AnimatePresence>
        {navOpen && (
          <motion.nav
            className="fixed fixed_margin top-0 left-0 pt-[70px] max-w-[1800px] flex items-center justify-center min-h-[400px] w-full h-dvh blurred"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            key="modal"
          >
            <ul className=" w-full flex flex-col items-center justify-center gap-6 header_ul">
              <motion.li
                onClick={() => {setNavOpen(!navOpen)
                setOpen(false)
                }}
                variants={textAnimation}
                className=" items-center flex justify-center "
              >
                <NavLink to="/" className="flex items-center gap-2">
                  {" "}
                  <FontAwesomeIcon icon={faHouse} className="text-[12px]" />
                  HOME
                </NavLink>
              </motion.li>
              <motion.li
                onClick={() => {setNavOpen(!navOpen)
                setOpen(false)
                }}
                variants={textAnimation}
                className=" items-center flex justify-center "
              >
                <NavLink to="/movie" className="flex items-center gap-2">
                  {" "}
                  <FontAwesomeIcon icon={faFilm} className="text-[12px]" />{" "}
                  MOVIE
                </NavLink>
              </motion.li>
              <motion.li
                onClick={() => {setNavOpen(!navOpen)
                setOpen(false)
                }}
                variants={textAnimation}
                className=" items-center flex justify-center "
              >
                <NavLink to="/tv" className="flex items-center gap-2">
                  {" "}
                  <FontAwesomeIcon icon={faTv} className="text-[12px]" />
                  TV SHOW
                </NavLink>
              </motion.li>
              <motion.li
                onClick={() => {setNavOpen(!navOpen)
                setOpen(false)
                }}
                variants={textAnimation}
                className=" items-center flex justify-center "
              >
                <NavLink to="/genre" className="flex items-center gap-2">
                  {" "}
                  <FontAwesomeIcon icon={faVideo} className="text-[12px]" />
                  GENRE
                </NavLink>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default NavBar
