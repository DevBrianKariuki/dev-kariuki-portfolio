import React from 'react'
import styles from '../styles'
import { cyburst, cyburstfull } from '../assets'
import { FiExternalLink } from "react-icons/fi";
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const ProjectCard = (title, photo , github, livedemo) => {
  return (
      <div className='w-full  bg-secondaryBackground p-5 rounded-xl flex flex-col items-center md:flex-row'>
        <div className={`flex md:w-[50%] ${styles.flexCenter} my-10`}>
          <img src={cyburst} className='w-[100%] h-[110%] object-cover rounded-xl' />
        </div>
        
        <div className='text-center justify-center md:w-[50%] md:text-left flex flex-col'>
          <span className='font-bold font-poppins text-center py-4 text-2xl text-white'>
            Cyburst Internet Solutions <br />
              <span className='text-sm italic font-normal text-gray-300' > (September 2023)</span>
          </span>

          <p className='text-white md:px-8 font-inter text-lg text-center pb-6'>This is an internet suppliers website for a company known as Cyburst Internet Solutions which was an upgrade 
            to the existing one.
          </p>

          <div className='flex justify-center flex-row gap-3 my-2'>
            <button className='bg-white p-3 text-black font-inter font-semibold text-md rounded-sm'>React</button>
            <button className='bg-white p-3 text-black font-inter font-semibold text-md rounded-sm'>Tailwind CSS</button>
          </div>

          <div className='flex justify-center my-5 gap-10'>
              <a href={'https://github.com/DeveloperAstra/cyburst'} className='flex gap-3 items-center text-white hover:text-accentColor hover:scale-[1.1] cursor-pointer'>
                <span className='font-inter font-medium text-l'>Code</span>
                <BsGithub className=' cursor-pointer' fontSize={20} />
              </a>
              <a href={'https://cyburst-new.vercel.app/'} className='flex gap-3 items-center text-white hover:text-accentColor hover:scale-[1.1] cursor-pointer'>
                <span className='font-inter font-medium text-l'>Live Demo</span>
                <FiExternalLink className=' cursor-pointer' fontSize={20} />
              </a>
          </div>
        </div>
      </div>
  )
}

export default ProjectCard;