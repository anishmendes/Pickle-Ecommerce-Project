import React from 'react'

const Navbar = () => {
  return (
   <div className='flex flex-col bg-white h-[150px] overflow-hidden'>
      {/* <img src="./src/assets/logo.png" alt="logo"    className='max-h-[80px] mt-[50px] w-[100px] '/> */}
    <div className='flex flex-row justify-between pl-[180px] pt-[30px]'>
    <span className='pr-[260px] text-cyan-600 font-bold '>Kathmandu,Nepal</span>
      <span className='pr-[500px] text-cyan-600 font-bold'>guankoachar@gmail.com</span>
        
        <span className='text-cyan-600  font-bold pr-[80px]'>+977 9876000000</span>
    </div>
    <div className='bg-cyan-600 flex flex-row  pl-[60px]'>
      <a href="" >Home</a>
      <a href="">Home</a>
      <a href="">Home</a>
      <a href="">Home</a>
    </div>
      
   </div>
  )
}

export default Navbar
