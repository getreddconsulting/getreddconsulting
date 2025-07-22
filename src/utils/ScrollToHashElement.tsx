import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHashElement() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    let attempts = 0;

    const scrollToElement = () => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts < 20) {
        attempts += 1;
        setTimeout(scrollToElement, 100); // Retry every 100ms
      }
    };

    scrollToElement();
  }, [hash, pathname]);

  return null;
}

export default ScrollToHashElement;
