// utils/ScrollToHashElement.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHashElement() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const scrollToElement = () => {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Try again in 100ms (in case the DOM isn't ready)
        setTimeout(scrollToElement, 100);
      }
    };

    scrollToElement();
  }, [hash, pathname]);

  return null;
}

export default ScrollToHashElement;
