import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => location.pathname.startsWith(path);

  const linkClass = (path) =>
    `hover:text-orange-500 transition ${
      isActive(path) ? "text-orange-600 font-bold" : "text-black"
    }`;

  return (
    <header className="w-full h-[70px] fixed top-0 bg-black/30 flex justify-between items-center px-6 shadow-lg z-50">
      <div className="flex items-center">
        <h4 className="text-lg font-semibold text-orange-500">DEEPANSHU</h4>
        <span className="ml-2 text-sm text-orange-500">/ WEB DEVELOPER</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-sm">
        <Link to="/" className={linkClass("/")}>ABOUT ME</Link>
        <Link to="/resume" className={linkClass("/resume")}>RESUME</Link>
        <Link to="/projects" className={linkClass("/projects")}>PROJECTS</Link>
        <Link to="/contact" className={linkClass("/contact")}>CONTACT</Link>
      </nav>

      {/* Hamburger for Mobile */}
      <div className="md:hidden text-xl">
        <button onClick={toggleMenu} aria-label="Menu Toggle">
          {menuOpen ? <IoMdClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-black py-6 text-center flex flex-col gap-6 text-lg md:hidden">
          <Link to="/" onClick={toggleMenu} className={linkClass("/")}>ABOUT ME</Link>
          <Link to="/resume" onClick={toggleMenu} className={linkClass("/resume")}>RESUME</Link>
          <Link to="/projects" onClick={toggleMenu} className={linkClass("/projects")}>PROJECTS</Link>
          <Link to="/contact" onClick={toggleMenu} className={linkClass("/contact")}>CONTACT</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
