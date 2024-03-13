import React from 'react'
import Image from 'next/image'
import sslc from '../assets/EduCard4.jpg'
import { motion } from 'framer-motion'

type Props = {}

const EduCard4 = (props: Props) => {
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
            src={sslc}
            alt='studying'
            />
        </motion.div>
        <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light '>SSLC</h4>
        <p className= 'text-[#c13f3f] font-bold text-2xl mt-1'>State Board</p>
        <p className='uppercase py-5 text-gray-300'>From 2016 - 2017</p>
        <ul className=' space-y-4 ml-5 text-lg'>
            <li>Percentage{" "}:<span className='text-[#c13f3f] '>{" "}82%{" "}</span></li>
            <li>V.S Boys Higher Secondary School,</li>
            <li>Thiruvarur.</li>
        </ul>
        </div>
    </article>
  )
}

export default EduCard4