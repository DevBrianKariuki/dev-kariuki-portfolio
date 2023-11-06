import React from 'react'
import styles from '../styles'
import { cyburst } from '../assets'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id='projects' className={`w-full bg-primaryBackground px-4 py-8 flex flex-col items-center md:flex-row ${styles.flexCenter} ${styles.paddingY}`}>
      <div className='md:w-[70%] flex flex-col items-center'>
        <div className='text-center justify-center md:justify-start md:text-left flex flex-col'>
          <span className='font-inter font-extrabold text-center uppercase text-accentColor'>
            Portfolio
          </span>
          <h1 className='text-white px-5 md:px-0 py-4 font-poppins text-center font-bold text-[25px]'>
            Each project is a unique piece of development 👩‍💻
          </h1>

        </div>

        <div>
          <ProjectCard photo={cyburst} github={'https://github.com/DeveloperAstra/cyburst'} livedemo={'https://cyburst-new.vercel.app/'} />
        </div>

        <h1 className='my-6 text-white font-poppins font-bold text-2xl'>More projects coming soon... 🔜</h1>

      </div>

      

    </section>
  )
}

export default Projects