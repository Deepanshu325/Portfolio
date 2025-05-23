import React, { useState } from "react";

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
      title: "Project name 01",
      role: "Role Title",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem iste tenetur aperiam totam...",
      image:
        "https://img.freepik.com/free-photo/html-system-websites-collage-design_23-2150432963.jpg?size=626&ext=jpg",
    },
    {
      title: "Project name 02",
      role: "Role Title",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem iste tenetur aperiam totam...",
      image:
        "https://img.freepik.com/free-photo/html-system-websites-collage-design_23-2150432963.jpg?size=626&ext=jpg",
    },
    {
      title: "Project name 03",
      role: "Role Title",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem iste tenetur aperiam totam...",
      image:
        "https://img.freepik.com/free-photo/html-system-websites-collage-design_23-2150432963.jpg?size=626&ext=jpg",
    },
  ];

  return (
    <div className="bg-purple-800 text-black">

      {/* Projects */}
      <main className="pt-24 px-4 md:px-16">
        <h1 className="text-white text-center text-3xl md:text-4xl font-bold mb-10">
          Projects
        </h1>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white w-full md:w-[80%] mx-auto mb-10 shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row"
          >
            <div className="w-full md:w-1/2 p-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                {project.title}
              </h2>
              <p className="text-base font-medium mb-4">{project.role}</p>
              <p className="text-sm text-justify leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Projects;