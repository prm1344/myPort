import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import { SiPython } from "react-icons/si";
import { BiLogoDjango } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiSqllite } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import{motion} from 'framer-motion';


const iconVarients=(duration)=>(
    {
        initial:{y:-10},
        animate:{
            y:[10,-10],
            transition:{
                duration:duration,
                ease:"linear",
                repeat:Infinity,
                repeatType:"reverse"
            }
        }
    }
)

export const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 py-20 pt-28 '>
        <motion.h1  whileInView={{opacity:1,y:0}} 
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className='mb-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div
        whileInView={{opacity:1,x:0}} 
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4  mb-28'>

            <motion.div
            variants={iconVarients(2)}
            initial="initial"
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-500' />
            </motion.div>

            <motion.div 
            variants={iconVarients(3)}
            initial="initial"
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoDjango className='text-7xl text-green-600' />
            </motion.div>

            <motion.div variants={iconVarients(5)}
            initial="initial"
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiPython className='text-7xl text-sky-600'  />
            </motion.div> 

            <motion.div variants={iconVarients(6)}
            initial="initial"
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiSqllite className='text-7xl text-purple-400' />
            </motion.div>

            <motion.div variants={iconVarients(4)}
            initial="initial"
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoTailwindCss className='text-7xl text-cyan-500' />
            </motion.div>

            <motion.div variants={iconVarients(2.5)}
            initial="initial"
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaAws className='text-7xl text-orange-400' />
            </motion.div>

        </motion.div>
        
    </div>
  )
}
