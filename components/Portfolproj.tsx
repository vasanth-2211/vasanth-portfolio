import React from 'react'
import Image from 'next/image';
import portfolioimg from '../assets/portfolio.png';
import { motion } from 'framer-motion';

type Props = {}

const Portfolproj = (props: Props) => {
  return (
    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
        <motion.div
        initial={{
            y: -300,
            opacity:0,
        }}
            transition={{ duration: 1.2 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true}}>

    <Image className='w-[500px]  rounded-l'
    src={portfolioimg}
    alt='portfolio'/>
     </motion.div>
    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
    <h4 className="text-4xl font-semibold text-center"><span className="underline decoration-[#c13f3f]/50"> </span>{" "}My Portfolio </h4>
    <p className="text-lg text-center md:text-left">Netflix 2.0 app that has a Log In and Log Out Authentication with Google. It has a beautiful Home Screen with all the movies looking just like Netflix.
     There is also a subscription page where you can see your active monthly subscription. We also use Stripe Payments for the monthly Netflix</p>
    </div>
  </div>
  )
}

export default Portfolproj
