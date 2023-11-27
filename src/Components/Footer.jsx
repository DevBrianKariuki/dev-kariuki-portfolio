import React from 'react'
import styles from '../styles'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { motion } from 'framer-motion';


const Footer = () => {
  return (
    <section id='contact' className={`w-full bg-primaryBackground py-8 flex flex-col items-center md:flex-row ${styles.flexCenter} ${styles.paddingY}`}>
      <div className='md:w-[70%]'>
        
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center'>
          <p className='font-poppins text-center text-white font-bold text-lg'>
            Copyright © 2023. All rights are reserved
          </p>

          <motion.div animate={{ y: [0, 10, 10, 0] }}  transition={{ repeat:Infinity, duration: 5 }} className='flex gap-4 py-4'>
            <a href='https://www.linkedin.com/in/brian-kariuki-760275180'>
              <BsLinkedin className='text-white cursor-pointer hover:text-accentColor hover:scale-[1.1]' fontSize={24}  />
            </a>
            <a href='https://github.com/DeveloperAstra'>
              <BsGithub className='text-white cursor-pointer hover:text-accentColor hover:scale-[1.1]' fontSize={24} />
            </a>
            <a href='https://twitter.com/Dev_Kariuki'>
              <BsTwitter className='text-white cursor-pointer hover:text-accentColor hover:scale-[1.1]' fontSize={24} />
            </a>
          </motion.div>
        </div>
      </div>

      

    </section>
  )
}

export default Footer