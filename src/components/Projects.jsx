import React from 'react'
import {PROJECTS} from '../constants'
import{motion} from 'framer-motion'
import {FaGithub} from "react-icons/fa";

export const Projects = () => {
    return (
      <div className='border-b border-neutral-900 pb-4'>
        <motion.h1  
          whileInView={{opacity:1, y:0}} 
          initial={{opacity:0, y:-100}}
          transition={{duration:0.9}}
          className='my-20 text-center text-4xl'>Projects</motion.h1>
  
        <div>
          {PROJECTS.map((Project, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
              <div className='w-full lg:w-1/4'>
                <motion.img 
                  whileInView={{opacity:1, x:0}}
                  initial={{opacity:0, x:-100}}
                  transition={{duration:0.9}} 
                  src={Project.image} 
                  width={150} 
                  height={150} 
                  alt={Project.title} 
                  className='mb-6 rounded' 
                />    
              </div>  
              <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:0.9}} 
                className='w-full max-w-xl lg:w-3/4'>
                <h6 className='mb-2 font-semibold flex'>
                  {Project.title} 
                  <a 
                    href={Project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='text-sm bg-purple-900 text-neutral-300 rounded-lg p-1 ml-3 flex items-center hover:scale-105 cursor-pointer transition-transform duration-300 ease-out'
                  >
                    source code <FaGithub className='ml-2' />
                  </a>
                </h6> 
                <p className='mb-4 text-neutral-400'>{Project.description}</p>
                {Project.technologies.map((tech, index) => (
                  <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                    {tech}
                  </span>
                ))}
              </motion.div>             
            </div>
          ))}
        </div>
      </div>
    )
  }
  
