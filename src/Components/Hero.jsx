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
        
        <div className='text-center justify-center md:text-left  flex flex-col'>
          <h1 className='font-poppins font-bold text-white text-4xl md:text-[55px] md:leading-[70px]'>Front-end React Developer 👋</h1>
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

          {/* <div className='flex mt-12 w-full gap-6 md:gap-3 items-center justify-center flex-col md:flex-row'>
            <p className='font-inter flex gap-3 text-lg font-bold text-white'>Tech Stack <span className='hidden font-thin md:flex'>|</span> </p>
            <div className='grid items-center justify-evenly grid-cols-2'>
              <img src={htmlcss} className='w-[60%]' />
              <img src={reactnextjs} className='w-[60%]' />
              <img src={tailwindsaas} className='w-[60%]' />
              <img src={javatypescript} className='w-[60%]' />
            </div>
          </div> */}
        </div>
      </div>

      

    </section>
  )
}

export default Hero