import { createContext, useState, useEffect } from "react";
import Footer from "./Layout/Footer";
import NavBar from "./Layout/NavBar";
import Routess from "./Routess";

export const myContext = createContext()
function App() {
  const [documentTitle, setDocumentTitle] = useState('Cinematico');
  const [movieType, setMovieType] = useState(() => {
    const movieTypeParsed = window.localStorage.getItem("movieType");

    if (movieTypeParsed !== null && movieTypeParsed !== undefined) {
      return movieTypeParsed;
    } else {
      return "movie";
    }
  });
 const API_KEY = import.meta.env.VITE_REACT_API_KEY;
    const authParams = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
   useEffect(() => {
     window.localStorage.setItem("movieType", movieType);
   }, [movieType]);
    useEffect(() => {
      document.title = documentTitle;
    }, [documentTitle]);
  const contextValues = {
    imgUrl,
    authParams,
    scrollToTop,
    setDocumentTitle,
    movieType,
    setMovieType,
  };
  return (
    <div className="bg-dark max-w-[1800px] fixed_margin  font-merri w-full min-h-dvh">
      <myContext.Provider value={contextValues}>
        <NavBar />
        <Routess />
        <Footer />
      </myContext.Provider>
    </div>
  );
}

export default App;
