import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full h-[70px] fixed top-0 bg-black/30 flex justify-between items-center px-6 shadow-lg z-50">
      <div className="flex items-center">
        <h4 className="text-lg font-semibold text-orange-500">DEEPANSHU</h4>
        <span className="ml-2 text-sm text-orange-500">/ WEB DEVELOPER</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-sm">
        <Link to="/" className="text-black hover:text-blue-600">ABOUT ME</Link>
        <Link to="/resume" className="text-black hover:text-blue-600">RESUME</Link>
        <Link to="/projects" className="text-black hover:text-blue-600">PROJECTS</Link>
        <Link to="/contact" className="text-black hover:text-blue-600">CONTACT</Link>
      </nav>

      {/* Hamburger for Mobile */}
      <div className="md:hidden text-xl">
        <a onClick={toggleMenu}>
          
              {
              menuOpen
                ?  <IoMdClose />
                : <IoMenu />
              }
            
          
        </a>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-black py-6 text-center flex flex-col gap-6 text-lg md:hidden">
          <Link to="/" onClick={toggleMenu}>ABOUT ME</Link>
          <Link to="/resume" onClick={toggleMenu}>RESUME</Link>
          <Link to="/projects" onClick={toggleMenu}>PROJECTS</Link>
          <Link to="/contact" onClick={toggleMenu}>CONTACT</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
