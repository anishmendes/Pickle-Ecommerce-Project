import React from 'react'

const Shop = () => {
  return (
    <div className='flex items-center flex-row justify-around'>
     <div className='flex  flex-col'>
     <h1 className=' flex items-start text-2xl font-bold pb-4'>Our Products</h1>

<div className='flex flex-row gap-0 pl-[100px] items-center gap-1  '>
      <input type='text' placeholder='Name of the pickle' className='p-3 w-[550px] border border-green-600 rounded-xl text-black ' />
     <button className='bg-customGray text-white  border-green-500 border-2 rounded-xl p-2 pl-6 pr-6 '>Search</button>
    </div>
     </div>
    </div>
  )
}

export default Shop
