import React, { useState } from "react";
import image1 from "../Assets/adventure rides.webp"
import image2 from "../Assets/Ridersconnect.webp"
const Projects = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const projects = [
    {
      title: "Project 01",

      name: "ADVENTURE RIDES",
      link : "https://adventure-rides.vercel.app/",
      description:
        "Adventure Rides is a modern, responsive web application dedicated to adventure tourism. Built with React.js and deployed on Vercel, the platform offers users an engaging interface to explore various outdoor activities and destinations. Emphasizing dynamic content and seamless navigation, the site reflects a commitment to delivering immersive digital experiences for travel enthusiasts.",
      image:
        image1
    },
    {
      title: "Project 02",
      name: "RIDERSCONNECT",
      link: "https://vocal-klepon-4ae023.netlify.app/",
      description:
        "RiderZConnect is a responsive web application dedicated to uniting motorcycle enthusiasts for group rides. Built with modern JavaScript frameworks and deployed on Netlify, the platform offers users an engaging interface to plan and share riding events. Emphasizing community building and seamless navigation, the site reflects a commitment to delivering immersive digital experiences for riders.",
      image:
        image2
    },
  ];

  return (
    <div className=" text-black ">

      {/* Projects */}
      <main className="pt-24 px-4 md:px-16 ">
        <h1 className="text-white text-center text-3xl md:text-4xl font-bold mb-10">
          Projects
        </h1>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white w-full md:w-[80%] mx-auto mb-10 shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row"
              data-aos="fade-right" >
            <div className="w-full md:w-1/2 p-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                {project.title}  
              </h2>
              
              <p className="text-base font-medium mb-4">{project.name}</p>
              <p className="text-sm text-justify leading-relaxed">
                {project.description}
              </p>
              <a href={project.link} className="cursor-pointer" target="_blank">Link : {project.link}</a>

            </div>
            <div className="w-full md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-fill"
              />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Projects;