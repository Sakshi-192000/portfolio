import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({backgroundImg , title , Url,tech}) => {
  return (
    <div className=' flex relative items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4
    group hover: bg-[#e11d48]'>
       <Image src={backgroundImg} className='rounded-xl group-hover:opacity-10'/>
       <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
           <h3 className='text-2xl tracking-wider text-center text-white'>{title}</h3>
           <p className='pb-4 pt-2 text-center text-white'>{tech}</p>
           <Link href={Url}>
           <p className='text-center py-3 bg-white rounded-lg font-bold'>More Info</p>
           </Link>
       </div>
   </div>
  )
}

export default ProjectItem