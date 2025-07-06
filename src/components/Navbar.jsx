import React from 'react'
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";

export const Navbar = () => {
  return (

    <>
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center text-4xl logoText'>
            Vr.
        </div>
        <div className='m-8 flex items-center gap-4 text-2xl cursor-pointer'>
        <a target="_blank" href  ="https://www.linkedin.com/in/pratik-mane-29Raj"><FaLinkedin/></a>
        <a target="_blank" href="https://github.com/pratik29602"><FaGithub/></a>
        <a target="_blank" href=""><FaSquareXTwitter/></a>
        <a target="_blank" href=""><FaInstagram/></a>
        
  
        </div>
    </nav>
    </>
    
  )
}


// import React from 'react'

// function Navbar() {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar