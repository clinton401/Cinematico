import { useState, useEffect } from 'react';
import logo from "../assets/watch-movie.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { AnimatePresence, color, motion } from "framer-motion";
  const containerVariant = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: '-50%',
      transition: {
        type: "spring",
        stiffness: 200,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: "100vw",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
function Login() {
    const [passwordValue, setPasswordValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showError, setShowError] = useState(false);
    function passwordHandler({ target }) {
        setPasswordValue(target.value);
    }
   useEffect(() => {
     let timeout;
     if (showError) {
       timeout = setTimeout(() => setShowError(false), 3000);
     }
     return () => clearTimeout(timeout);
   }, [showError]);
  function submitHandler(e) {
    e.preventDefault();
    setShowError(true)
  }

  return (
    <main className="w-full flex flex-col gap-8 items-center px-5half pb-16 pt-[150px] ">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-[400px] shadow-lg text-white bg-black  rounded-md flex flex-col gap-6 p-4"
      >
        <h2 className="font-cinzel font-black flex  items-center pb-2 text-2xl">
          Login
        </h2>
        <input
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
          className="w-full outline-none  bg-transparent border-b  placeholder:text-base text-white placeholder:italic  placeholder:font-cinzel  font-medium text-lg "
          placeholder="Email address"
        />
        <span className="w-full relative mb-2">
          <input
            type={!showPassword ? "password" : "text"}
            className="w-full outline-none  bg-transparent border-b  pr-[35px] placeholder:text-base text-white placeholder:italic  placeholder:font-cinzel  font-medium text-lg "
            placeholder="Password"
            required
            onChange={passwordHandler}
            value={passwordValue}
          />
          {passwordValue.length > 0 && (
            <FontAwesomeIcon
              icon={!showPassword ? faEye : faEyeSlash}
              className="w-[20px] aspect-square cursor-pointer flex items-center justify-center absolute right-0 top-2/4  translate-y-[-50%]"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            />
          )}
        </span>
        <button className="w-full button">Login</button>
        <p className="w-full text-center flex-wrap flex  text-xs items-center justify-center ">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="pl-2 text-[#FFD700]  outline-none hover:underline focus:underline"
          >
            Sign up{" "}
          </Link>{" "}
        </p>
      </form>
      <AnimatePresence>
        {showError && (
          <motion.span
            variants={containerVariant}
            animate="visible"
            initial="hidden"
            exit="exit"
            key="error modal"
            className="w-full fixed top-[100px] left-2/4 translate-x-[-50%] ipad:w-[40%] max-w-[350px] flex-col gap-2  shadow-lg rounded-md bg-white flex items-center justify-center font-bold p-3"
          >
            <h2 className="text-sm ipad:text-base text-primary font-cinzel ">
              Something went wrong
            </h2>
          </motion.span>
        )}
      </AnimatePresence>
    </main>
  );
}
export default Login;
