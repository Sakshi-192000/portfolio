import React from "react";
import Main from "./Main/page";
import About from "./About/page";
import Skills from "./Skills/page";
import Projects from "./Projects/page";


export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
