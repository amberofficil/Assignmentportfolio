"use client"
import React, { useState } from 'react'

const Navebar = () =>{
const [isClick, setisClick] = useState(false);
const toggleNavebar = () : void => {
  setisClick(!isClick)
}
  return (
    <>
    <div className="container pt-8">
        <div className="flex justify-between items-center">
            <div className="text-xl font-medium">Amber</div>
            <ul className="gap-10 lg:gap-16 hidden md:flex">
                <li className="menuLink"><a href="#hero">Home</a></li>
                <li className="menuLink"><a href="#about">About</a></li>
                <li className="menuLink"><a href="#projects">Projects</a></li>
                <li className="menuLink"><a href="#skills">Skills</a></li>
                <li className="menuLink"><a href="#contact">Contact</a></li>
            </ul>
            <div className='md:hidden flex items-center'>
              <button
              className="inline-flex items-center justify-center p-2 rounded-md text-whit hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white "
              onClick={toggleNavebar} 
              >
                {isClick ? (
                  <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  >
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                    />

                  </svg>
                ) : (
                  <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  >
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16m-7 6h7'
                    />

                  </svg>
                )}

              </button>
            
        </div>
   </div>
</div>
{isClick && (
  <div className='md:hidden'>
   <div>
    <div  className='px-2 pt-1 space-y-1 sm:px-3'>
   <ul className='flex justify-between items-center'>
                <li className="menuLink"><a href="#hero">Home</a></li>
                <li className="menuLink"><a href="#about">About</a></li>
                <li className="menuLink"><a href="#projects">Projects</a></li>
                <li className="menuLink"><a href="#skills">Skills</a></li>
                <li className="menuLink"><a href="#contact">Contact</a></li>
            </ul>
            </div>
   </div>
  </div>
)}
        
    </>
  )
}

export default Navebar
