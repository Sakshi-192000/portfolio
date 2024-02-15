import Image from "next/image";
import React from "react";
import girlee from "../../public/girlee.jpg";

const page = () => {
  return (
    <div className="w-full md:h-screen flex items-center p-2 py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ml-4">
        <div className="col-span-2">
          <p className="uppercase text-rose-600 font-semibold tracking-widest">
            About
          </p>
          <p className="py-2 text-gray-600">
            I am graduated in computer Science , during my college days
            fascinated with how intricated web programming can be I was drawn to
            learn more,I started with basic HTML , CSS and decided to pursue my
            career in web development I am now spending my time building
            projects in React js , React native and learning new technologies. I
            have also learnt building visualization dashboards using Microsoft
            powerBI.
          </p>
          <h3 className="text-rose-600">Experience</h3>
          <p className="font-bold">
            React Native Intern || AutoGolf App || Fortified Systems , US
          </p>
          <p>--Responsibilities</p>
          <div className="text-gray-600 py-2">
            <li>
              Responsible for building pixel perfect , smooth UI using
              react-native lib
            </li>
            <li>Responsible for implementing Navigation of the App</li>
            <li>Refactoring the App in Presentational / Container Pattern</li>
            <li>Implementing Global colors depending on the dark/light mode</li>
          </div>

          <h3>Certfication & Achievements</h3>
          <p className="text-gray-600">
            {" "}
            Hackerrank Badges -Silver level in python , Bronze level in SQL & C
          </p>
          <p className="text-gray-600">
            AWS Academy Graduate - AWS Academy Cloud Foundations
          </p>
        </div>
        <div className="w-full h-auto m-auto flex items-center justify-center roundex-xl p-4 hover:scale-105 ease duration-300">
          <Image src={girlee} />
        </div>
      </div>
    </div>
  );
};

export default page;
