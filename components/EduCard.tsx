import React from 'react'
import Image from 'next/image'
import mca from '../assets/EduCard.jpg'
import { motion } from 'framer-motion'
type Props = {}

const EduCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  w-[400px] md:w-[500px] xl:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-poiter transition-opacity duration-200 overflow-hidden'>
        <motion.div className=''
        initial={{
            y:-100,
            opacity:0,
        }}
        transition={{ duration:1.2 }}
        whileInView={{opacity: 1, y: 0 }}
            viewport={{ once:true }}
        >
            <Image className= 'w-32 h-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover object-center'
            src={mca}
            alt='studying'
            />
        </motion.div>
        <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light '>POSTGRADUATE</h4>
        <p className= 'text-[#c13f3f] font-bold text-2xl mt-1'>Masters of Computer Application</p>
        <p className='uppercase py-5 text-gray-300'>From 2022 - Present</p>
        <ul className=' space-y-4 ml-5 text-lg'>
            <li>CGPA{" "}:<span className='text-[#c13f3f] '>{" "}8.29{" "}</span><span className='text-sm uppercase opacity-45' >upto 2nd sem</span></li>
            <li>Anjalai Ammal Mahalingam Engineering College,</li>
            <li>Kovilvenni.</li>
        </ul>
        </div>
    </article>
  )
}

export default EduCard