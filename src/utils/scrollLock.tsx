let scrollPosition = 0;
let scrollLockCount = 0;

export const lockScroll = () => {
  scrollLockCount++;
  if (scrollLockCount === 1) {
    scrollPosition = window.scrollY || window.pageYOffset;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";
  }
};

export const unlockScroll = () => {
  scrollLockCount = Math.max(scrollLockCount - 1, 0);
  if (scrollLockCount === 0) {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.overflow = "";
    document.body.style.width = "";

    window.scrollTo({ top: scrollPosition, behavior: "instant" });
  }
};
