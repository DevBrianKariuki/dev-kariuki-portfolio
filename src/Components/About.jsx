import React from 'react'
import styles from '../styles'
import { about } from '../assets'


const About = () => {
  return (
    <section id='about' className={`w-full bg-secondaryBackground py-8 flex flex-col items-center md:flex-row ${styles.flexCenter} ${styles.paddingY}`}>
      <div className='md:w-[70%] flex flex-col items-center md:flex-row'>
        <div className={`flex ${styles.flexCenter} md:my-0 my-10 mx-5`}>
          <img src={about} className='w-[100%] h-[100%]' />
        </div>
        
        <div className='text-center justify-center md:w-[50%] md:text-left flex flex-col'>
          <span className='font-inter font-extrabold uppercase text-accentColor'>
            About me
          </span>

          <h1 className='text-white px-5 md:px-0 py-2 font-poppins font-bold text-[25px]'>A dedicated Front-end Developer
            based in Nairobi, Kenya 📍
          </h1>

          <p className='text-dimWhite font-inter px-3 md:px-0 leading-[26px] py-2'>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player 
            who thrives in collaborating with cross-functional teams to produce outstanding web applications.
          </p>

        </div>
      </div>

      

    </section>
  )
}

export default About