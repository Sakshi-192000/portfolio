import React from "react";
import { FaCode } from "react-icons/fa";
import Link from "next/link";

const ProjectSectionCard = ({ imgUrl, title, desciption ,gitURl , previewURL}) => {
  return (
    <div className="my-4">
      <div
        className=" h-72 relative group"
        style={{  background: `url(${imgUrl})` , backgroundSize: '100% 100%' , backgroundRepeat:'no-repeat' }}
      >
        <div className=" items-center justify-center absolute w-full h-full bg-cyan-100 dark:bg-white bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80  duration-500">
          <Link
            href={gitURl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-black hover:border-white group/Link"
          >
            <FaCode className="h-10 w-10 text-black m-2 cursor-pointer group-hover/Link:text-white" />
          </Link>
         
        </div>
      </div>
      <div className="text-black rounded-b-xl mt-2 bg-white dark:bg-black py-6 px-4">
        <h5 className="text-xl font-semibold mb-2 dark:text-white">{title}</h5>
        <p className="text-gray-600 dark:text-white" >{desciption}</p>
      </div>
    </div>
  );
};

export default ProjectSectionCard;
