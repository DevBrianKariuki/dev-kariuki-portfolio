import React from 'react'
import styles from '../styles'
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
 import { FaMapLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id='contact' className={`w-full bg-secondaryBackground py-8 flex flex-col items-center md:flex-row ${styles.flexCenter} ${styles.paddingY}`}>
      <div className='md:w-[70%] flex flex-col items-center md:flex-row'>
        
        <div className='text-center justify-center md:w-[50%] md:text-left flex flex-col'>
          <span className='font-inter font-bold uppercase text-accentColor'>
            Contact
          </span>

          <h1 className='text-white px-5 md:px-0 py-2 font-poppins font-bold text-[25px]'>Hit me up! Let's work together 👇
          </h1>

          <div className="flex flex-col w-full md:flex-row gap-10 md:gap-18 my-6">
              {/* <div className="flex w-full justify-center items-center flex-col md:flex-row">
                <FaMapLocationDot  className="text-white my-2" fontSize={32}/>
                <div className="flex flex-col justify-center md:ml-3">
                  <h4 className="font-inter font-bold text-l text-white">
                  Location
                  </h4>
                  <p className="font-inter font-normal  text-dimWhite">
                  Nairobi,Kenya
                  </p>
                </div>
              </div> */}
              <div className="flex w-full justify-center items-center flex-col md:flex-row">
                <BiMailSend  className="text-white my-1" fontSize={32}/>
                <div className="flex flex-col justify-center md:ml-4">
                  <h4 className="font-inter font-bold text-l text-white">
                  Mail
                  </h4>
                  <p className="font-inter font-normal  text-dimWhite">
                    <a href='mailto:devbriankariuki@gmail.com'>
                      devbriankariuki@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex w-full justify-center items-center flex-col md:flex-row">
                <BiPhoneCall  className="text-white my-1" fontSize={32}/>
                <div className="flex flex-col justify-center md:ml-4">
                  <h4 className="font-inter font-bold text-l text-white">
                  Phone
                  </h4>
                  <p className="font-inter font-normal  text-dimWhite">
                    <a href='tel:+254703814228'>
                      (+254)703814228
                    </a>
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>

      

    </section>
  )
}

export default Contact;