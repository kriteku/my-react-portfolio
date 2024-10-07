import { useState, useEffect } from "react";
import "./Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="nav-bar" style={{ display: showNavbar ? "block" : "none" }}>
      <div id="links-div">
        <a href="#home" className="links">
          <i className="bi bi-house-fill"></i>
        </a>
        <a href="#about" className="links">
          <i className="bi bi-info-circle-fill"></i>
        </a>
        <a href="#work" className="links">
          <i className="bi bi-briefcase-fill"></i>
        </a>
        <a href="#skills" className="links">
          <i className="bi bi-code-slash"></i>
        </a>
        <a href="#projects" className="links">
          <i className="bi bi-pencil-square"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
