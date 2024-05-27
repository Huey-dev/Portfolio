import React, { useState, useEffect, useRef } from "react";
import "./Navbar.scss";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { AiOutlineDownload } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClicksOutsideMenu = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("click", handleClicksOutsideMenu);

    return () => {
      document.removeEventListener("click", handleClicksOutsideMenu);
    };
  }, []);

  const handleLinkClick = () => {
    setToggle(false);
  };

  const handleDownloadClick = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/matthew.docx";
    downloadLink.download = "resume.docx";
    downloadLink.click();
  };

  const slideInAnimation = {
    x: [300, 0],
    transition: { duration: 0.85, ease: "easeIn" },
  };

  const slideOutAnimation = {
    x: [0, 300],
    transition: { duration: 0.85, ease: "easeOut" },
  };

  return (
    <div>
      <nav className="app__navbar">
        <button className="app__navbar-download" onClick={handleDownloadClick}>
          Download CV
          <AiOutlineDownload />
        </button>

        <ul className="app__navbar-links">
          {["home", "My works", "testimonials", "contact"].map(
            (item) => (
              <li className="app__flex p-text" key={`link-${item}`}>
                <a href={`#${item}`}>{item}</a>
              </li>
            )
          )}
        </ul>

        <div className="app__navbar-menu" ref={menuRef}>
          <HiMenuAlt3 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              initial={false}
              animate={toggle ? slideInAnimation : slideOutAnimation}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["home", "My works", "testimonial", "contact"].map(
                  (item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={handleLinkClick}>
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
