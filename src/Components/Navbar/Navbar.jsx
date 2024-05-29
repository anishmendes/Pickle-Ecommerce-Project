import React from 'react'
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
   <div className='flex flex-col bg-white  overflow-hidden'>
    <div className='flex flex-row justify-around pl-[180px] pt-[30px]'>
    <span className=' text-cyan-600 font-bold '>Kathmandu,Nepal</span>
      <span className=' text-cyan-600 font-bold'>guankoachar@gmail.com</span>
        
        <span className='text-cyan-600  font-bold pr-[80px]'>+977 9876000000</span>
    </div>
      <img src="./src/assets/logo.png" alt="logo"    className='max-h-[80px] w-[100px] '/>

      <div className="flex justify-end ">
      <div className='bg-cyan-400  flex justify-evenly gap-[100px] mr-[60px] pt-4 pb-8' >
        
      <NavLink to="/">Home</NavLink>
            <NavLink to="/Shop">Shop</NavLink>
            <NavLink to="/Ourstory">Ourstory</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
            <NavLink to="/Checkout">Checkout</NavLink>
      </div>
      </div>
   </div>
  )
}

export default Navbar
