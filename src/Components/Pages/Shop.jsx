import React from 'react'
import Fresh from '../Fresh'

import Slide from '../Pages/Slides/Slide'
import '../../App.css';


const Shop = () => {
  return (
    <div className='flex items-center flex-row justify-around '>
     <div className='flex  flex-col items-start mt-[100px] pr-[100px]'>
     <h1 className=' flex  text-2xl pl-[100px] font-bold pb-4 '>Our Products</h1>

<div className='flex flex-row gap-0 pl-[100px]   gap-1 pr-8 pb-[50px] '>
      <input type='text' placeholder='Name of the pickle' className='p-3 w-[550px] border border-hard rounded-xl text-black ' />
     <button className='bg-customGray text-white  border-hard border-2 rounded-xl p-2 pl-6 pr-6 '>Search</button>
    </div>

      <Slide/>
     </div>
    </div>
  )
}

export default Shop
