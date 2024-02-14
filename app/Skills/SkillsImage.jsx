import React from 'react'
import Image from 'next/image'

const SkillsImage = ({image}) => {
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-1 gap-4 justify-center items-center'>
      <div className='m-auto'>
        <Image src={image} width={72} height={64}/>
      </div>
    </div>
  </div>
  )
}

export default SkillsImage