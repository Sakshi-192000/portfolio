import React from "react";
import ProjectSectionCard from "./ProjectSectionCard";

const projectsData = [
  {
    id: 1,
    title: "Netflix Clone",
    description:"A Netflix clone made using reactjs and  uses firebase for authentication",
    image: "/netflix.jpg",
    gitUrl: "https://github.com/Sakshi-192000/react-netflix",
  },
  {
    id: 2,
    title: "FitFusion ",
    description: "A Fitness Mobile Application made using react native ",
    image: "/fit.jpg",
    gitUrl: "https://github.com/Sakshi-192000/reactnative-FitFusion",
  },
];

const ProjectSection = () => {
  return (
    <div>
      {projectsData.map((project) => (
        <ProjectSectionCard
          key={project.id}
          imgUrl={project.image}
          title={project.title}
          desciption={project.description}
          gitURl={project.gitUrl}
        />
      ))}
    </div>
  );
};

export default ProjectSection;
