import React from 'react'
import styles from '../styles'
import { cyburst, cyburstfull } from '../assets'
import { FiExternalLink } from "react-icons/fi";
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const ProjectCard = ({title, photo, date, description , github, livedemo, direction}) => {
  return (
      <div className={` ${ direction === 'reverse' ? 'md:flex-row-reverse' :'' } w-full md:h-[350px] rounded-2xl  bg-secondaryBackground rounded-5xl flex flex-col items-center md:flex-row`}>
        
        <div className={`md:max-w-[50%]  ${ direction === 'reverse' ? 'md:ml-4' : 'md:ml-0' }`}>
            <img src={photo} className='object-contain  p-2 rounded-2xl'/>
        </div>
        <div className='text-center justify-center md:w-[50%] md:text-left flex flex-col'>
          <span className='font-bold font-poppins text-center py-4 text-2xl text-white'>
            {title} <br />
              <span className='text-sm italic font-normal text-gray-300' > ({date})</span>
          </span>

          <p className='text-white md:px-8 px-6 font-inter text-lg text-center pb-6'>{description}
          </p>

          <div className='flex justify-center flex-row gap-3 my-2'>
            <button className='bg-white p-3 text-black font-inter font-semibold text-md rounded-sm'>React</button>
            <button className='bg-white p-3 text-black font-inter font-semibold text-md rounded-sm'>Tailwind CSS</button>
          </div>

          <div className='flex justify-center my-5 gap-10'>
              <a href={github} className='flex gap-3 items-center text-white hover:text-accentColor hover:scale-[1.1] cursor-pointer'>
                <span className='font-inter font-medium text-l'>Code</span>
                <BsGithub className=' cursor-pointer' fontSize={20} />
              </a>
              <a href={livedemo} className='flex gap-3 items-center text-white hover:text-accentColor hover:scale-[1.1] cursor-pointer'>
                <span className='font-inter font-medium text-l'>Live Demo</span>
                <FiExternalLink className=' cursor-pointer' fontSize={20} />
              </a>
          </div>
        </div>
      </div>
  )
}

export default ProjectCard;