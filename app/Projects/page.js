import React from "react";
import netflixxx from '../../public/netflixxx.jpg'
import ProjectItem from "./ProjectItem";
import fit from "../../public/fit.jpg";

const page = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto py-16 px-2">
        <p className="text-rose-600 text-xl font-bold uppercase py-4">
          My Projects
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            backgroundImg={netflixxx}
            title="Netflix Clone"
            Url="/Netflix"
            tech={"React Js"}
          />
          <ProjectItem
            backgroundImg={fit}
            title="Fit Fusion"
            tech={"React native"}
            Url={"/FitFusion"}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
