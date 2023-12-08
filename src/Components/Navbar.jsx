import React from 'react'
import { useState } from 'react';
import styles from '../styles'
import { BsMenuUp, BsMenuDown } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu5Fill } from "react-icons/ri";

const Navbar = () => {

  const [toggle, SetToggle] = useState(false);

  return (
    <nav className='w-full fixed top-0 px-6 md:px-16 bg-secondaryBackground flex py-6 items-center z-[5] justify-between'>
      <h1 className='font-poppins text-accentColor font-bold text-2xl'>dev.brian</h1>

      <ul className='list-none sm:flex gap-6 hidden justify-end items-center flex-1'>

        <li className="font-poppins text-l font-semibold text-white self-stretch hover:text-accentColor hover:scale-[1.05] ">
          <a href="#home"  rel="noopener noreferrer">
            Home
          </a>
        </li>
        <li className="font-poppins text-l font-semibold text-white self-stretch hover:text-accentColor hover:scale-[1.05]">
          <a href="#about"  rel="noopener noreferrer">
            About
          </a>
        </li>
        <li className="font-poppins text-l font-semibold text-white self-stretch hover:text-accentColor hover:scale-[1.05]">
          <a href="#projects"  rel="noopener noreferrer">
            Projects
          </a>
        </li>
        <li className="font-poppins text-l font-semibold text-white self-stretch hover:text-accentColor hover:scale-[1.05]">
          <a href="#contact"  rel="noopener noreferrer">
            Contact
          </a>
        </li>

      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <RiMenu5Fill className={`${!toggle ? 'flex' : 'hidden' } text-white`} fontSize={32} 
          onClick={()=>{SetToggle(!toggle)}}  />

          <AiOutlineClose className={`${toggle ? 'flex' : 'hidden' } text-accentColor`} fontSize={24} 
          onClick={()=>{SetToggle(!toggle)}}  />

        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-secondaryBackground absolute top-20 right-0 mx-4 my-2 min-w-[200px] sidebar`}>
        <ul className="list-none flex justify-end gap-7 items-start flex-1 flex-col">
              <li
                className={`font-poppins font-semibold cursor-pointer text-white text-[16px] `}>
                <a href={`#home`}>Home</a>
              </li>
              <li
                className={`font-poppins font-semibold cursor-pointer text-white text-[16px] `}>
                <a href={`#about`}>About</a>
              </li>
              <li
                className={`font-poppins font-semibold cursor-pointer text-white text-[16px] `}>
                <a href={`#projects`}>Projects</a>
              </li>
              <li
                className={`font-poppins font-semibold cursor-pointer text-white text-[16px] `}>
                <a href={`#contact`}>Contact</a>
              </li>
          </ul>
        </div>

      </div>

    </nav>
  )
}

export default Navbar

