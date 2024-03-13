import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import cert from '../assets/5064265.jpg';
type Props = {}

function Certificates({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto'>
        <h3 className='absolute top-24 uppercase text-gray-500  tracking-[20px] text-2xl '>Certifications</h3>
        <motion.div
            className='mt-20 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:h-64 md:h:95 xl:w-[500px] xl:h-[600px]'
        initial={{
        x:-200, opacity: 0,}}
        transition={{
        duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>

    <Image 
    className='flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:h-64 md:h:95 xl:w-[500px] xl:h-[600px]'
    src={cert} 
    alt='Certificates alt'/>
    </motion.div>
    <div className='space-y-10 px-0 md:px-10'>
  <ul className="list-disc space-y-4 ml-5 text-lg">
    <li>Foundations of Cybersecurity{" - "}<a href='https://github.com/vasanth-2211/certifications/blob/05a3fa31d172260974726366a9570de96967a4fb/Foundations%20of%20Cybersecurity%20.pdf' className='text-xs text-[#c13f3f] uppercase'>click here</a ></li>
    <li>Crash Course on Python{" - "}<a href='https://github.com/vasanth-2211/certifications/blob/05a3fa31d172260974726366a9570de96967a4fb/Crash%20Course%20on%20Python.pdf' className='text-xs text-[#c13f3f] uppercase'>click here</a></li>
    <li>Python for Data Science, AI & Development{" - "}<a href='https://github.com/vasanth-2211/certifications/blob/05a3fa31d172260974726366a9570de96967a4fb/Introduction%20to%20Web%20Development%20with%20HTML%2C%20CSS%2C%20JavaScript.pdf' className='text-xs text-[#c13f3f] uppercase'>click here</a ></li>
    <li>Introduction to Cloud Computing	{" - "}<a href='https://github.com/vasanth-2211/certifications/blob/d2469d04d706958e6bbb5063c217fb5320c81d55/Introduction%20to%20Cloud%20Computing.pdf' className='text-xs text-[#c13f3f] uppercase'>click here</a></li>
    <li>Introduction to Web Development with HTML,CSS,JavaScript{" - "}<a href='https://github.com/vasanth-2211/certifications/blob/05a3fa31d172260974726366a9570de96967a4fb/Introduction%20to%20Web%20Development%20with%20HTML%2C%20CSS%2C%20JavaScript.pdf' className='text-xs text-[#c13f3f] uppercase'>click here</a></li>
    <li>Getting Started with Git and GitHub{" - "}<a href='https://github.com/vasanth-2211/certifications/blob/05a3fa31d172260974726366a9570de96967a4fb/Getting%20Started%20with%20Git%20and%20GitHub.pdf' className='text-xs text-[#c13f3f] uppercase'>click here</a></li>
    <li>Supervised Machine Learning: Regression and Classification{" - "}<a href='https://github.com/vasanth-2211/certifications/blob/05a3fa31d172260974726366a9570de96967a4fb/Supervised%20Machine%20Learning-%20Regression%20and%20Classification.pdf' className='text-xs text-[#c13f3f] uppercase'>click here</a></li>
  </ul>
    </div>
    
    </motion.div>
  )
}

export default Certificates