"use client"
import React,{useState} from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import girlee from "../../public/girlee.jpg";

import ProjectSection from "./ProjectSection";

const MainSection = () => {
   const[dark , setDark ] = useState(true)
    return (
    <div className={dark ?'dark' : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-black">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-black text-xl font-bold uppercase dark:text-white">
              portfolio
            </h1>
            <ul>
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl dark:text-white" onClick={()=>setDark(!dark)}/>
              </li>
              
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-black font-medium md:text-6xl dark:text-white">
              Sakshi Ranglani
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Frontend Developer.</h3>
            <p className="text-md py-2 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              My skills are HTML , CSS , JavaScript , React , React native ,
              powerBI
            </p>
             <p className="text-md py-2 text-gray-800 dark:text-white">
              I have also worked in a startup as React native trainee
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-cyan-700 rounded-full  w-80 h-80 mt-20 overflow-hidden md-:h-96">
            <Image src={girlee} layout="fill"  alt="girl with computer"/>
          </div>
        </section>

        <section>
          <h3 className="text-3xl py-2 text-black dark:text-white">My Projects</h3>
          <div>
          <ProjectSection/>
          </div>
        
        </section>
      </main>
    </div>
  );
};

export default MainSection;
