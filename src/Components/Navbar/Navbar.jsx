import React, { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='overflow-hidden'>
    {/* <div className='flex flex-row justify-around pl-[180px] pt-[30px]'>
    <span className=' text-cyan-600 font-bold '>Kathmandu,Nepal</span>
      <span className=' text-cyan-600 font-bold'>guankoachar@gmail.com</span>
        
        <span className='text-cyan-600  font-bold pr-[80px]'>+977 9876000000</span>
    </div> */}

      {/* <img src="./src/assets/logo.png" alt="logo"    className='max-h-[100px] w-[150px]  '/> */}
      <div className="flex justify-end">
      <div className="md:hidden flex items-center mr-4">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className={`bg-navbar1 mt-[10px] rounded-[20px] text-green-800 font-semibold  pl-[50px] pr-[50px] md:flex flex-col md:flex-row justify-evenly md:gap-[100px] gap-4 md:mr-[60px] mr-4 pt-8 pb-8 w-full md:w-auto ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        <NavLink to="/" className="text-center">Home</NavLink>
        <NavLink to="/Shop" className="text-center">Shop</NavLink>
        <NavLink to="/Ourstory" className="text-center">Ourstory</NavLink>
        <NavLink to="/Contact" className="text-center">Contact</NavLink>
        <NavLink to="/Checkout" className="text-center">Checkout</NavLink>
     
      <div className='flex flex-wrap gap-[50px] pl-[50px]'>
      <FontAwesomeIcon icon={faSearch} className="text-2xl text-white" />
      <NavLink to="/Cart">
  <FontAwesomeIcon icon={faShoppingCart} className="text-2xl text-white" />
</NavLink>
      </div>
      </div>
    </div>
   </div>
  )
}

export default Navbar
