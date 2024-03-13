import React from 'react'
import {motion } from 'framer-motion'
import Image from 'next/image'
import html from '../assets/vscode.svg'

type Props = {
    directionLeft?: boolean;
}

function SkillVSC({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer '>    
    <motion.div 
    initial={{
        x: directionLeft ? -200 : 200,
        opacity:0,
    }}
    transition= {{duration: 1 }}
    whileInView={{ opacity: 1, x: 0}}
    >
        <Image
        className=' rounded-full p-1 border border-gray-500 object-cover w-24 h-24 md:h-28 md:w-28 xl:w-32 xl:h-32'
        src={html}
        alt='VSC'
        />
        
    </motion.div>
    <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-slate-100 h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-0'>
    <div className="flex items-center justify-center h-full">
    <p className='text-3xl bold text-black opacity-100'>60%</p>
      </div>
    </div>
    </div>
  )
}

export default SkillVSC