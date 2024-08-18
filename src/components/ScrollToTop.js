import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Current pathname:", pathname);

    if (pathname === "/") {
      setTimeout(() => {
        const headerElement = document.getElementById("header");
        console.log("Header element:", headerElement);

        if (headerElement) {
          const headerRect = headerElement.getBoundingClientRect();
          const headerPosition = headerRect.top + window.scrollY;
          console.log("Header bounding rect:", headerRect);
          console.log("Header position:", headerPosition);

          window.scrollTo({
            top: headerPosition,
            left: 0,
            behavior: "auto"
          });
        } else {
          console.log("Header element not found");
        }
      }, 0); // Delay the calculation to ensure the DOM is fully rendered
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;