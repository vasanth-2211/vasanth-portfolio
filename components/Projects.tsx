import React from 'react';
import Image from 'next/image';
import portfolioimg from '../assets/portfolio.png';
import { motion } from 'framer-motion';
import Portfolproj from './Portfolproj';


type Props = {};

function Projects({}: Props) {
    const projects = [1,2,3,4,5];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl'>Projects</h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#c13f3f]/80">
<Portfolproj/>
        
        </div>
        
        
    <div className='w-full absolute top-[30%] bg-[#c13f3f]/10 left-0 h-[500px] -skew-y-12 z-0'/>
    </div>
);
}

export default Projects;
