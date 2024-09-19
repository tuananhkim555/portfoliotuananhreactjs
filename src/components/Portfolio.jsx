/* eslint-disable no-unused-vars */
import React from "react";
import project1 from "../assets/Duanphim.png";
import project2 from "../assets/Shoptuananh.png";
import project3 from "../assets/Imoublog.png";
import project4 from "../assets/AI Portfolio.png";
import project5 from "../assets/Samarblog.png";
import project6 from "../assets/aiportfolio2.png";
import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: project1,
    title: "Project #1",
    description: "This is a UI project for a movie streaming website, built using React.js.",
    links: {
      site: "https://webxemphimtuananh.vercel.app",
      github: "https://github.com/tuananhkim555/webxemphimtuananh",
    },
  },
  {
    img: project2,
    title: "Project #2",
    description: "This is an e-commerce shop interface built with a fullstack approach using Next.js.",
    links: {
      site: "https://shoptuananh.vercel.app",
      github: "https://github.com/tuananhkim555/shoshop",
    },
  },
  {
    img: project3,
    title: "Project #3",
    description: "UI for frontend development using HTML, CSS, JS - Name: Imouz.",
    links: {
      site: "https://tuananhkim555.github.io/Imouz/",
      github: "https://github.com/tuananhkim555/Imouz",
    },
  },
  {
    img: project4,
    title: "Project #4",
    description: "UI for frontend development using HTML, CSS, JS.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project5,
    title: "Project #5",
    description: "UI for frontend development using HTML, CSS, JS.",
    links: {
      site: "https://tuananhkim555.github.io/SamarProject",
      github: "https://github.com/tuananhkim555/SamarProject",
    },
  },
  {
    img: project6,
    title: "Project #6",
    description: "UI for frontend development using ReactJS.",
    links: {
      site: "#",
      github: "#",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 md-8">Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } mb-12`}
        >
          <div className="w-full md:w-1/2 p-4">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex space-x-4 ">
                <a href={project.links.site} className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300">View Site</a>
                <a href={project.links.github}
                className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                ><AiOutlineGithub/></a>
            </div>
          </div>
        </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
