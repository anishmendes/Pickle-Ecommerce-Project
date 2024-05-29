import React from 'react'
import Fresh from '../Fresh'

import Slide from '../Pages/Slides/Slide'


const Shop = () => {
  return (
    <div className='flex items-center flex-row justify-around'>
     <div className='flex  flex-col items-start mt-[100px] pr-[100px]'>
     <h1 className=' flex  text-2xl font-bold pb-4 '>Our Products</h1>

<div className='flex flex-row gap-0 pl-[100px] items-center gap-1 pr-8  '>
      <input type='text' placeholder='Name of the pickle' className='p-3 w-[550px] border border-green-600 rounded-xl text-black ' />
     <button className='bg-customGray text-white  border-green-500 border-2 rounded-xl p-2 pl-6 pr-6 '>Search</button>
    </div>

      <Slide/>
     </div>
    </div>
  )
}

export default Shop
