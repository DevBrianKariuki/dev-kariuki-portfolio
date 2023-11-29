import React from 'react'
import styles from '../styles'
import { profile, htmlcss, reactnextjs, tailwindsaas, javatypescript } from '../assets'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id='home' className={`w-full md:py-32 mt-12 bg-primaryBackground py-8 flex flex-col items-center md:flex-row ${styles.flexCenter} ${styles.paddingY}`}>
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