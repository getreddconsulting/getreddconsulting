// src/hooks/useScrollLock.ts
import { useEffect } from "react";
import { lockScroll, unlockScroll } from "../utils/scrollLock";

const useScrollLock = (isLocked: boolean): void => {
  useEffect(() => {
    if (isLocked) {
      lockScroll();
    }
    // When isLocked becomes false (or on unmount), run unlockScroll
    return () => {
      if (isLocked) {
        unlockScroll();
      }
    };
  }, [isLocked]);
};

export default useScrollLock;
