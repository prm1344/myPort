import React from 'react'
import {HERO_CONTENT} from '../constants'
import { delay, motion } from "framer-motion"
import profilepic from '../assets/pratik.png'

// C:\Users\admin\Music\myPortfolio-main\src\assets\pratik.jpeg

const container = (delay)=>(
  {
    hidden:{x:-100 , opacity:0},
    visible:{
      x:0,
      opacity:1,
      transition:{duration:0.5 , delay:delay}
    }
  }
)

export const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl'>Pratik Mane</motion.h1>
                <motion.span variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                    Full Stack Developer
                </motion.span>
                <motion.p variants={container(1)}
                initial="hidden"
                animate="visible"
                className='my-2 max-w-xl py-6 font-light tracking-tight'>{HERO_CONTENT}</motion.p>
            </div>            
            </div>
            <div className='w-full lg:w-1/2  lg:p-8'>
               <div className='md:ml-24' >
                <motion.img 
                initial={{x:100,opacity:0}}
                animate={{x:0 ,opacity:1}}
                transition={{duration:1 ,delay:1.1}}
                className='md:imgprop rounded-full' 
                src={profilepic} alt="profilepic" />
               </div>
            </div>
        </div>
       
    </div>
  )
}
