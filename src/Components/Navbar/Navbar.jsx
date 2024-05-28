import React from 'react'
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
   <div className='flex flex-col bg-white  overflow-hidden'>
    <div className='flex flex-row justify-between pl-[180px] pt-[30px]'>
    <span className=' text-cyan-600 font-bold '>Kathmandu,Nepal</span>
      <span className=' text-cyan-600 font-bold'>guankoachar@gmail.com</span>
        
        <span className='text-cyan-600  font-bold pr-[80px]'>+977 9876000000</span>
    </div>
      <img src="./src/assets/logo.png" alt="logo"    className='max-h-[80px] w-[100px] '/>
  
      <div className='bg-cyan-400 flex flex-row items-center justify-around pt-4 pb-8' >
         <a href="/">Home</a>
         <a href="/">Home</a>
         <a href="/">Home</a>
         <a href="/">Home</a>
         <a href="/">Home</a>
      </div>
   </div>
  )
}

export default Navbar
