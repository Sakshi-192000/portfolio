"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const page = () => {
  return (
    <div className="w-full h-screen text-center dark:bg-black">
      <div className="max-w-[1200px] w-full h-full flex justify-center items-center mx-auto p-2">
        <div>
          <h1>
            Hi , I am <span className="text-rose-600">Sakshi</span>
          </h1>
          <h1> A frontend developer</h1>
          <p className="max-w-[70%] py-4 text-gray-600 m-auto dark:text-white">
            I a software enginner who loves to build things for web and mobile .
            In addition to my passion for technology my keen interests are
            playing guitar , travelling and reading books.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
            <div className="rounded-full shadow-lg hover:scale-110 ease-in duration-500 shadow-gray-400 p-6  cursor-pointer">
              <a
                href={"https://www.linkedin.com/in/sakshi-ranglani-5b51b2192"}
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="rounded-full shadow-lg hover:scale-110 ease-in duration-500 shadow-gray-400 p-6 cursor-pointer">
              <a href={"https://github.com/Sakshi-192000"} target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
