import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 flex items-start p-5 z-20 justify-between max-w-7xl mx-auto xl:items-center'>
    <motion.div
    initial={{
        x:-500,
        opacity:0,
        scale: 0.5
    }}
    animate={{
        x:0,
        opacity: 1,
        scale: 1
    }}
    transition={{
        duration: 1.5,
    }}
    className="flex flex-row items-center">
      {/* Social Icons */}
      <SocialIcon
        url="https://www.linkedin.com/in/vasanth-r-595115248/"
        fgColor="grey"
        bgColor="transparent"
      />
      <SocialIcon
        url="https://github.com/vasanth-2211"
        fgColor="grey"
        bgColor="transparent"
      />
      <SocialIcon
        url="https://www.instagram.com/___.vazanth.___/"
        fgColor="grey"
        bgColor="transparent"
      />
    
      </motion.div>
      <motion.div 
      initial={{
          x: 500,
          opacity:0,
          scale: 0.5
      }}
      animate={{
          x:0,
          opacity: 1,
          scale: 1
      }}
      transition={{
          duration: 1.5,
      }}
      className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon 
        className="cursor-pointer" 
        network="email"
        fgColor="gray"
        bgColor="transparent"
        url='#contactme'/>
        <p className ="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p>
      </motion.div>
    </header>
  );
};

export default Header;
