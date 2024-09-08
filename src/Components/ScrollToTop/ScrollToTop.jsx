import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   useEffect(() => {
//     if ("scrollRestoration" in window.history) {
//       window.history.scrollRestoration = "manual";
//     }

//     return () => {
//       if ("scrollRestoration" in window.history) {
//         window.history.scrollRestoration = "auto";
//       }
//     };
//   }, []);

//   return null;
// };

// export default ScrollToTop;
