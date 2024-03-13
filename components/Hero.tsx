import Image from 'next/image'
import React from 'react'
import { Cursor,useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import me1 from '../assets/hero_page_3.jpg'
import Link from 'next/link';

type Props = {}

const Hero = (props: Props) => {
     const[text,count]= useTypewriter({
        words:["Hi, The Name's Vasanth",
        'Cybersecurity Gaurdian', 
        'Web Developer'],
        loop:true,
        delaySpeed:2000,
     });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <Image  className='relative rounded-full h-36 w-36 mx-auto object-cover '
        src={me1}
        alt='cyberprofile'
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>Security Analyst </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
        <span>{text}</span>
        <Cursor cursorColor='#c13f3f'/>
        </h1>
        <div className='pt-5'>
            <Link href="#about">
                <button className='heroButton'>About</button>
            </Link>
             <Link href="#education">
            <button className='heroButton'>Education</button>
            </Link>
             <Link href="#skills">

            <button className='heroButton'>Skills</button>
           </Link>
             <Link href="#projects">
            <button className='heroButton'>Projects</button>
           </Link> 
           <Link href="#certificates">
            <button className='heroButton'>Certifications</button>
           </Link> 
        </div>
        </div>
    </div>
  )
}

export default Hero