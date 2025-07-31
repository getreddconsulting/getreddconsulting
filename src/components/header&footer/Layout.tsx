import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import LogoFooter from "../../assets/logo/GRC Logo.png";
import Contact from "../../pages/contact/contact";
import PrimaryButton from "../Buttons/primarybutton";
import type { Variants } from "framer-motion";

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 4 + 0.15 * i,
      duration: 0.4,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

export const Header = () => {
  const location = useLocation();
  const [getInTouchOpen, setGetInTouchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 950);
  const [isLeadershipModalOpen, setIsLeadershipModalOpen] = useState(false);

useEffect(() => {
  const handleLeadershipModalToggle = (e: CustomEvent) => {
    setIsLeadershipModalOpen(e.detail.open);
  };

  window.addEventListener("leadershipModalToggle", handleLeadershipModalToggle as EventListener);

  return () => {
    window.removeEventListener("leadershipModalToggle", handleLeadershipModalToggle as EventListener);
  };
}, []);

  const isMediaPage = location.pathname === "/media";

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 950);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
if (isMediaPage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMediaPage]);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "blog", label: "Leadership" },
  ];

const headerClass = `${
  isMediaPage ? "absolute top-0 left-0" : "fixed top-0"
} ${isLeadershipModalOpen ? "z-10" : "z-40"} w-full transition-all duration-300 px-2 lg:px-6 py-1 lg:py-3 lg:py-2 flex items-center justify-between ${
  scrolled
    ? "bg-gradient-to-b from-gray-900 to-gray-500 backdrop-blur-lg shadow-md h-20"
    : "bg-transparent"
}`;



  return (
    <header className={headerClass}>
      {/* Logo */}
      <div className="flex items-center">
       <img
  src={LogoFooter}
  alt="Logo"
  className={`transition-all duration-300 ease-in-out drop-shadow-lg ${
    scrolled ? "h-20 w-32" : "h-20 w-32 lg:h-28 lg:w-40 mt-4"
  }`}
/>

      </div>

      {/* Desktop Navigation */}
      {!isMobile ? (
        <motion.nav
          className="hidden md:flex items-center gap-6 text-sm font-normal"
          initial="hidden"
          animate="visible"
        >
          {navLinks.map(({ id, label }, i) => (
            <motion.div key={id} custom={i} variants={navItemVariants}>
              <HashLink
                smooth
                to={`/#${id}`}
                className="text-white hover:text-red-500 transition"
              >
                {label.toUpperCase()}
              </HashLink>
            </motion.div>
          ))}

          <motion.div custom={navLinks.length} variants={navItemVariants}>
            <HashLink
              to="/media"
              className="text-white text-sm hover:text-red-500 transition"
            >
              NEWS
            </HashLink>
          </motion.div>

          {/* Get In Touch Dropdown */}
          <motion.div
            custom={navLinks.length + 1}
            variants={navItemVariants}
            className="relative"
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
                setGetInTouchOpen((prev) => !prev);
              }}
              className="text-white hover:text-red-500 flex items-center text-sm gap-1 cursor-pointer"
            >
              GET IN TOUCH
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {getInTouchOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-xl border border-red-700 z-50 p-2"
              >
                <a
                  href="https://form.typeform.com/to/pWtAPyKf?typeform-source=getreddconsulting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-white hover:bg-red-700/20 hover:text-red-600 rounded-lg transition"
                  onClick={() => setGetInTouchOpen(false)}
                >
                  <span className="font-semibold">For Business Owners</span>
                </a>
                <a
                  href="https://form.typeform.com/to/BCPjYXxl?typeform-source=getreddconsulting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-white hover:bg-red-700/20 hover:text-red-600 rounded-lg transition"
                  onClick={() => setGetInTouchOpen(false)}
                >
                  <span className="font-semibold">For Institutions</span>
                </a>
              </div>
            )}
          </motion.div>

          {/* Contact Button */}
          <motion.div custom={navLinks.length + 2} variants={navItemVariants}>
            <PrimaryButton
              onClick={() => {
                setShowContact(true);
                setGetInTouchOpen(false);
              }}
              className="focus:outline-none hover:outline-none"
            >
              contact us
            </PrimaryButton>
          </motion.div>
        </motion.nav>
      ) : (
        // Mobile Menu Toggle
        <div
          className="text-white text-3xl cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>
      )}

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div className="absolute top-full right-0 w-64 bg-red-900 text-white flex flex-col gap-2 px-4 py-4 z-50 rounded-bl-xl">
          {navLinks.map(({ id, label }) => (
            <HashLink
              smooth
              key={id}
              to={`/#${id}`}
              className="px-4 py-2 rounded text-white hover:text-red-500 hover:bg-white/10 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </HashLink>
          ))}
          <HashLink
            to="/media"
            className="px-4 py-2 rounded text-white hover:text-red-500 hover:bg-white/10 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            News
          </HashLink>
          <button
            onClick={() => {
              setShowContact(true);
              setMenuOpen(false);
            }}
            className="mt-2 text-sm border border-red-500 hover:bg-red-700 rounded-lg px-4 py-2"
          >
            Contact Us
          </button>
        </div>
      )}

      {/* Contact Modal */}
      <Contact isOpen={showContact} onClose={() => setShowContact(false)} />
    </header>
  );
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [getInTouchOpen, setGetInTouchOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        getInTouchOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setGetInTouchOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [getInTouchOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <footer className="relative w-full bg-gradient-to-r from-red-950 via-red-700 to-red-950 text-white px-6 py-6 z-10">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 lg:gap-10 text-sm">
        {/* Column 1: Branding */}
        <div className="flex flex-col items-start  mb-8 md:mb-0">
          <div className="flex items-start -ml-8 justify-center gap-0  top-0">
            <img
              src={LogoFooter}
              alt="GRC Logo"
              className="w-24 h-24 lg:w-36 lg:h-28 drop-shadow-lg"
            />
            {/* <span className="text-2xl lg:text-2xl font-bold tracking-tight">
            GET<span className="text-red-500">REDD</span>
          </span> */}
          </div>
          <div className="flex flex-col items-start gap-3 mt-4">
            {/* Email */}
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 fill-none stroke-red-300 group-hover:stroke-red-500 transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26 26"
                strokeWidth="2"
              >
                <path d="M4 4h18c1.1 0 2 .9 2 2v14a2 2 0 0 1-2 2H4c-1.1 0-2-.9-2-2V6a2 2 0 0 1 2-2z" />
                <path d="M22 6 13 13 4 6" />
              </svg>
              <a
                href="mailto:getreddconsulting@gmail.com"
                className="text-white group-hover:text-red-400 transition-colors"
              >
                getreddconsulting@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 group">
              <svg
                className="w-6 h-6 fill-none stroke-red-300 group-hover:stroke-red-500 transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path d="M2 4.5c0-.8.7-1.5 1.5-1.5H7c.6 0 1.1.4 1.4 1l2 4a1.5 1.5 0 01-.3 1.7l-1.2 1.2a14.5 14.5 0 006.4 6.4l1.2-1.2a1.5 1.5 0 011.7-.3l4 2c.6.3 1 .8 1 1.4v3.5c0 .8-.7 1.5-1.5 1.5H18C9.7 22 2 14.3 2 6V4.5z" />
              </svg>
              <a
                href="tel:7864933374"
                className="text-white group-hover:text-red-400 transition-colors"
              >
                786-493-3374
              </a>
            </div>
          </div>
        </div>

        {/* Column 2 & 3: Quick Links + Stay in Touch */}
        <div className="flex flex-col sm:flex-row justify-end md:w-1/2 gap-4 lg:gap-16">
          <div>
            <motion.div
              custom={navLinks.length + 1}
              variants={navItemVariants}
              className="relative"
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setGetInTouchOpen((prev) => !prev);
                }}
                className="text-white hover:text-red-500 flex items-center text-sm gap-1 cursor-pointer"
              >
                GET IN TOUCH
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {getInTouchOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-xl border border-red-700 z-50 p-2"
                >
                  <a
                    href="https://form.typeform.com/to/pWtAPyKf?typeform-source=getreddconsulting.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-white hover:bg-red-700/20 hover:text-red-600 rounded-lg transition"
                    onClick={() => setGetInTouchOpen(false)}
                  >
                    <span className="font-semibold">For Business Owners</span>
                  </a>
                  <a
                    href="https://form.typeform.com/to/BCPjYXxl?typeform-source=getreddconsulting.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-white hover:bg-red-700/20 hover:text-red-600 rounded-lg transition"
                    onClick={() => setGetInTouchOpen(false)}
                  >
                    <span className="font-semibold">For Institutions</span>
                  </a>
                </div>
              )}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2 flex flex-col">
              <HashLink
                smooth
                to="/#home"
                className="text-white hover:text-red-500"
              >
                Home
              </HashLink>
              <HashLink
                smooth
                to="/#about"
                className="text-white hover:text-red-500"
              >
                About
              </HashLink>
              <HashLink
                smooth
                to="/#services"
                className="text-white hover:text-red-500"
              >
                Services
              </HashLink>
              <HashLink
                smooth
                to="/media"
                className="text-white hover:text-red-500"
              >
                News
              </HashLink>

              {/* <HashLink
              to="/media"
              className="text-white font-normal text-sm hover:text-red-500 transition"
            >
              NEWS
            </HashLink> */}

              <HashLink
                smooth
                to="/#blog"
                className="text-white hover:text-red-500"
              >
                Leadership
              </HashLink>
            </nav>
          </div>

          {/* Stay in Touch with Icons */}
          <div>
            <h3 className="text-lg font-semibold text-center  mb-4">Socials</h3>
            <div className="flex justify-center  items-center  gap-4">
              {/* LinkedIn */}
              <div className="flex flex-col items-center group relative">
                <a
                  href="https://www.linkedin.com/company/get-redd-consulting-inc/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-white px-3 py-2 rounded w-10 h-10 bg-red-700 hover:bg-red-800 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white fill-white stroke-red-300 hover:stroke-red-500 transition-colors"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.036-1.85-3.036-1.851 0-2.134 1.445-2.134 2.94v5.665h-3.554v-11.49h3.413v1.57h.049c.475-.896 1.636-1.844 3.37-1.844 3.601 0 4.267 2.37 4.267 5.455v6.309zM5.337 7.433c-1.144 0-2.071-.928-2.071-2.072 0-1.144.927-2.071 2.071-2.071 1.145 0 2.072.927 2.072 2.071 0 1.144-.927 2.072-2.072 2.072zM6.962 20.452H3.712v-11.49h3.25v11.49z" />
                  </svg>
                </a>
                <span className="absolute top-full mt-2 text-xs text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Follow us
                </span>
              </div>

              {/* Instagram */}
              <div className="flex flex-col items-center group relative">
                <a
                  href="https://www.instagram.com/getreddconsulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-white px-3 py-2 rounded w-10 h-10 bg-red-700 hover:bg-red-800 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white fill-white stroke-red-300 hover:stroke-red-500"
                    viewBox="0 0 26 26"
                  >
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.4.5.6.3 1 .7 1.4 1.3.4.5.6 1.2.7 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.4-.3.6-.7 1-1.3 1.4-.5.4-1.2.6-2.4.7-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.4-.5-.6-.3-1-.7-1.4-1.3-.4-.5-.6-1.2-.7-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.4.3-.6.7-1 1.3-1.4.5-.4 1.2-.6 2.4-.7 1.3-.1 1.7-.1 4.9-.1M12 0C8.7 0 8.3 0 7 .1c-1.3.1-2.2.3-3 .6-.9.3-1.7.8-2.4 1.5-.7.7-1.2 1.5-1.5 2.4C0 5.8 0 6.7 0 8v8c0 1.3 0 2.2.1 3 .1.9.3 1.7.6 2.4.3.9.8 1.7 1.5 2.4.7.7 1.5 1.2 2.4 1.5.8.3 1.7.5 3 .6 1.3.1 1.7.1 4.9.1s3.6 0 4.9-.1c1.3-.1 2.2-.3 3-.6.9-.3 1.7-.8 2.4-1.5.7-.7 1.2-1.5 1.5-2.4.3-.8.5-1.7.6-3 .1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.3-.3-2.2-.6-3-.3-.9-.8-1.7-1.5-2.4-.7-.7-1.5-1.2-2.4-1.5-.8-.3-1.7-.5-3-.6C15.6 0 15.2 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.6a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                  </svg>
                </a>
                <span className="absolute top-full mt-2 text-xs text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Follow us
                </span>
              </div>

              {/* Email (no "Follow us") */}
              <div className="relative group">
                <a
                  href="mailto:contact@getreddconsulting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-red-700 hover:bg-red-800 rounded transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    viewBox="0 0 26 26"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <rect x="4" y="4" width="18" height="16" rx="2" ry="2" />
                    <path d="M22 6 13 13 4 6" stroke="white" />
                  </svg>
                </a>
              </div>

              <div className="relative group">
                <a
                  href="https://linktr.ee/getreddconsulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-red-700 hover:bg-red-800 rounded transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 417 512.238"
                    className="w-5 h-5 text-white fill-white"
                  >
                    <path d="M171.274 344.942h74.09v167.296h-74.09V344.942zM0 173.468h126.068l-89.622-85.44 49.591-50.985 85.439 87.829V0h74.086v124.872L331 37.243l49.552 50.785-89.58 85.24H417v70.502H290.252l90.183 87.629L331 381.192 208.519 258.11 86.037 381.192l-49.591-49.591 90.218-87.631H0v-70.502z" />
                  </svg>
                </a>
                <span className="absolute top-full mt-2 text-xs text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  LinkTree
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
        <p className=" text-sm text-white/80 mt-2  ">
          Copyright &copy; {currentYear} GetRedd. All rights reserved.
        </p>
        {/* <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div> */}
      </div>
    </footer>
  );
};
