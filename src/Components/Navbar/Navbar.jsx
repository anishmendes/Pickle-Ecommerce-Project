import React from 'react'

const Navbar = () => {
  return (
   <div className='flex flex-row bg-blue-400 h-[150px] overflow-hidden'>
      <img src="./src/assets/logo.png" alt="logo"    className='max-h-[80px] mt-[50px]  '/>
    <div className='flex flex-row justify-between pl-[180px] pt-[30px]'>
    <span className='pr-[260px]'>Kathmandu,Nepal</span>
      <span className='pr-[500px]'>guankoachar@gmail.com</span>
        
        <span className=''>+977 9876000000</span>
    </div>

   </div>
  )
}

export default Navbar
