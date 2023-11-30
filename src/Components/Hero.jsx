import React from 'react'
import styles from '../styles'
import { profile, htmlcss, reactnextjs, tailwindsaas, javatypescript } from '../assets'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id='home' className={`w-full justify-center md:py-28 mt-12 bg-primaryBackground relative py-8 flex flex-col items-center ${styles.flexCenter} ${styles.paddingY}`}>
      <div className='md:w-[70%] flex flex-col items-center md:flex-row-reverse'>
        <motion.div animate={{ y: [0, 15, 15, 0] }}  transition={{ repeat:Infinity, duration: 5 }} className={`flex ${styles.flexCenter} z-0 md:my-0 my-10 mx-10`}>
          <img src={profile} className='w-[100%] md:w-[85%]' />
        </motion.div>
        
        <div className='text-center w-full justify-center md:text-left  flex flex-col'>
          < BubbleText />
          <p className='text-dimWhite font-inter text-[16px] md:px-0 px-10 py-5 md:leading-[30px] '>Hi, I'm <span className='text-accentColor'>Brian Kariuki</span>.
             A passionate Front-end React and UI/UX Developer based in Nairobi, Kenya. 📍
          </p>

          <div className='flex justify-center md:justify-start py-2 gap-5'>
            <a href='https://www.linkedin.com/in/brian-kariuki-760275180'>
              <BsLinkedin className='text-white cursor-pointer hover:text-accentColor hover:scale-[1.1]' fontSize={26}/>
            </a>
            <a href='https://github.com/DeveloperAstra'>
              <BsGithub className='text-white cursor-pointer hover:text-accentColor hover:scale-[1.1]' fontSize={26} />
            </a>
            <a href='https://twitter.com/Dev_Kariuki'>
              <BsTwitter className='text-white cursor-pointer hover:text-accentColor hover:scale-[1.1]' fontSize={26} />
            </a>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:w-[70%] gap-6 md:justify-start items-center md:items-center md:flex-row my-12'>
        <p className='font-inter flex- font-bold text-xl gap-4 sm:text-lg flex items-center text-white'>Tech Stack <span className='font-thin hidden sm:flex'>|</span> </p>
        <div className='flex flex-col gap-6 md:flex-row'>
          <div className='flex gap-6'>
            <img src={htmlcss} className='md:w-[50%]' />
            <img src={reactnextjs} className='md:w-[50%]' />
          </div>
          <div className='flex gap-6 flex-row'>
            <img src={tailwindsaas} className='md:w-[50%]' />
            <img src={javatypescript} className='md:w-[50%]'/>
          </div>
        </div>
      </div>

    </section>
  )
}


const BubbleText = () => {
  return(
    <h1 className='font-poppins md:font-normal font-bold text-white md:text-gray text-4xl md:text-[55px] md:leading-[70px]'>
        {"Front-end React Developer 👋".split("").map((child, idx) =>(
          <span className='hoverText' key={idx}>
            {child}
          </span>
        )) }
      </h1>
  )
}

export default Hero