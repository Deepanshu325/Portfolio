import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black py-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-blue-400 relative z-10">
    <div>
      <p>@ 2035 by Maya Nelson.</p>
      <p>Powered and secured by Wix</p>
    </div>
    <div className="sm:flex sm:justify-around">
      <div className="sm:text-center">
        <h4 className="font-bold mt-2">Call</h4>
        <p>123-456-7890</p>
      </div>
      <div className="sm:text-center">
        <h4 className="font-bold mt-2">Write</h4>
        <p>info@mysite.com</p>
      </div>
      <div className="sm:text-center">
        <h4 className="font-bold mt-2">Follow</h4>
        <div className="flex gap-2 sm:justify-center mt-2">
          
        <a href="" className="text-xl"> <FaFacebookSquare /> </a>
          <a href="" className="text-xl"><FaLinkedin /></a>
          <a href="" className="text-xl"><FaInstagram /></a>
        </div>
      </div>
    </div>
  </footer>

  )
}

export default Footer