import React from "react";
import Image from "next/image";
import netflixxx from "../../public/netflixxx.jpg";
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from "next/link";

const page = () => {


  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] bg-white relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] z-10 lg:h-[40vh] bg-black/80" />
        <Image
          src="https://sakshi-192000.github.io/portfolio/netflixxx.jpg"
          className="absolute"
          layout="fill"
          objectFit="cover"
          unoptimized
        />
       
       <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Netflix Clone</h2>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-16'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I built this application in React JS and  hosted it on Firebase.
            This app features user authentication with firebase as well as the
            firestore cloud storage database.This application is pulling movie
            data from an the TMDB movie API and displaying different categories
            such as popular , top rated and upcoming .It features horizontal slider and also
             a featured Selection that allows us to add favourite movies to
            our list. The useContext hook is also being implemented for state
            Management.
          </p>
          <a
            href='https://github.com/Sakshi-192000/react-netflix'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://react-netflix-3b3ed.web.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Live</button>
          </a>
          
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-2 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                 <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TMDB API
              </p>
            </div>
          </div>
        </div>
        <Link href='/Projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>

    </div>
    </div>
  );
};

export default page;
