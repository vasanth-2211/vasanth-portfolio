import React from 'react'
import { motion } from 'framer-motion'
import EduCard from './EduCard'
import EduCard2 from './EduCard2'
import EduCard3 from './EduCard3'
import EduCard4 from './EduCard4'

type Props = {}

const Education = (props: Props) => {
  return (

<motion.div
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:1.5}}
className="h-screen mt-50 flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center ">
<h3
className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"> Education
</h3>

<div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#c13f3f]/80'>
    <EduCard />
    <EduCard2 />
    <EduCard3/>
    <EduCard4 />
</div>
</motion.div>
  )
}

export default Education