import Image from 'next/image'
import React from 'react'
import me2 from '../assets/about_page.jpg'
import { motion} from 'framer-motion'
type Props = {}

const About = (props: Props) => {
  return ( 
    <motion.div
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto'>
        <h3 className='absolute top-24 uppercase text-gray-500  tracking-[20px] text-2xl '>About</h3>
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
    src={me2} 
    alt='me2'/>
    </motion.div>
    <div className='space-y-10 px-0 md:px-10'>
    <h4 className="text-4xl font-semibold">
Who am{" "}
<span className="underline decoration-[#c13f3f]/50">I?</span>
</h4>

      <p>
      Dedicated cybersecurity analyst with a proven track record in vulnerability assessment, incident response, and security architecture. Committed to fortifying organizations against evolving cyber threats through proactive measures. Skilled in developing and implementing security policies, collaborating with cross-functional teams, and fostering a security-conscious culture. Continuously staying updated on industry best practices to address emerging challenges. Ethical and proactive, I bring technical proficiency and strategic thinking to enhance the overall security posture of any organization.
      </p>
    </div>
    
    </motion.div>
  )
}

export default About