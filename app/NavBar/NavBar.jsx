"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");

  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/Projects" ||
      router.asPath === "/Skills" ||
      router.asPath === "/About"
    ) {
      setNavBg("transparent");
    } else {
      setNavBg("#ecf0f3");
    }
  });

  const handleNavBar = () => {
    setNav(!nav);
  };
  return (
    <div
      className="w-full fixed h-16 shadow-xl z-[100] dark:bg-white"
      style={{ backgroundColor: `${navBg}` }}
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-8 uppercase">
        <p className="font-bold">PORTFOLIO </p>

        <ul className="hidden md:flex">
          <Link href="/">
            <li className="ml-10 text-sm hover:border-b">Home</li>
          </Link>

          <Link href="/About">
            <li className="ml-10 text-sm hover:border-b">About</li>
          </Link>

          <Link href="/Projects">
            <li className="ml-10 text-sm hover:border-b">Projects</li>
          </Link>

          <Link href="/Skills">
            <li className="ml-10 text-sm hover:border-b">Skills</li>
          </Link>
        </ul>
        <div className="md:hidden" onClick={handleNavBar}>
          <AiOutlineMenu size={30} color="#000" />
        </div>
      </div>
      <div
        className={
          nav ? " md:hidden fixed top-0 left-0 bg-black/70 h-screen " : ""
        }
      >
        <div
          className={
            nav
              ? " md:hidden fixed top-0 left-0 w-[75%] md:w-[45%] bg-white h-screen ease-in duration-500 p-3"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex justify-between items-center w-full uppercase">
            <p></p>
            <div
              className="shadow-lg rounded-full p-3 shadow-gray-400 "
              onClick={handleNavBar}
            >
              <AiOutlineClose size={30} color={"#000"} />
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase font-semibold">
              <Link href={"/"} onClick={() => setNav(false)}>
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/About" onClick={() => setNav(false)}>
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href={"/Projects"} onClick={() => setNav(false)}>
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href={"/Skills"} onClick={() => setNav(false)}>
                <li className="py-4 text-sm">Skills</li>
              </Link>
            </ul>

            <div className="pt-16">
              <p className="uppercase text-rose-600 font-bold">Lets connect</p>
              <div className="flex justify-start items-center my-4 w-full">
                <div className="rounded-full shadow-lg shadow-gray-200 p-3 cursor-pointer hover:scale-105 ease-in duration-500 mr-8">
                  <a
                    href={
                      "https://www.linkedin.com/in/sakshi-ranglani-5b51b2192"
                    }
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-200 p-3 cursor-pointer hover:scale-105 ease-in duration-500 ml-8">
                  <a href={"https://github.com/Sakshi-192000"} target="_blank">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
