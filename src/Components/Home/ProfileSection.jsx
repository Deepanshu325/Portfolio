
import React from 'react'
import image from "/WhatsApp Image 2024-09-16 at 9.07.34 PM.jpeg"
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const ProfileSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center pt-[130px] md:pt-[200px] relative " >
    <div className="m-4 w-full md:w-[50%]  bg-gray-600 h-[80vh] fixed  top-[70px] hidden xl:hidden md:block rounded-md max-w-7xl"></div>
    <div className="md:ml-[35%] p-6 md:p-12 w-full md:w-[60%] z-10 flex flex-col md:flex-row gap-8 xl:m-auto">
      <div className="bg-gray-800 p-7 rounded shadow-md text-center w-full md:w-[30%] min-w-[280px] ">
        <img
          src={image}
          alt="Profile"
          className="w-[205px] h-[205px] object-cover rounded-full mx-auto"
        />
        <h4 className="text-xl mt-4 font-semibold">DEEPANSHU SHRIVASTAV</h4>
        <div className="w-1/4 h-[2px] bg-blue-500 mx-auto my-2"></div>
        <p className="text-sm">WEB DEVELOPER</p>
        <div className="flex justify-center gap-4 mt-4 ">
                 <a href="" className="text-xl"> <FaFacebookSquare /> </a>
                   <a href="" className="text-xl"><FaLinkedin /></a>
                   <a href="" className="text-xl"><FaInstagram /></a>
        </div>
      </div>

      <div className="w-full md:w-[60%]">
        <h1 className="text-6xl font-bold font-sans">Hello</h1>
        <h2 className="text-xl font-light mt-6">Here's who I am & what I do</h2>
        <div className="mt-6 flex gap-4">
      <Link to="/resume">  <button className="bg-blue-600 text-white rounded-full px-6 py-2">RESUME</button> </Link>  
       <Link to="/projects">  <button className="border border-black rounded-full px-6 py-2">PROJECTS</button> </Link> 
        </div>
        <p className="mt-8 text-sm text-blue-700">
         <span className='text-orange-500'>I’m Deepanshu Shrivastav </span> — a creative and detail-oriented Web Developer with a focus on building dynamic, user-friendly websites and applications using the MERN stack.
        </p>
        <p className="mt-4 text-sm text-blue-700">
          I specialize in React.js, Node.js, MongoDB, and Tailwind CSS, and I have hands-on experience developing responsive and high-performance web applications. I enjoy transforming complex ideas into seamless user interfaces that work beautifully across all devices.
        </p>
      </div>
    </div>
  </div>
);
}

export default ProfileSection