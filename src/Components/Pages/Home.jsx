import React from 'react'
import Wrapper from '../Wrapper'
import Fresh from '../Fresh'
import Best from '../Best'
import Testimonal from '../Testimonal'

const Home = () => {
  return (
    <div>

    <div className='relative flex h-full w-full'>
      <img src="./src/assets/hero-img.jpg" alt="bg-hero"  className=' h-full w-full object-cover '/>
       <div className='absolute flex flex-col justify-start items-center ml-[100px] pt-[200px] max-w-[500px]'>
        <h2 className='text-xl font-bold'>100% Organic Pickle</h2>
        <h1 className='text-3xl font-bold pt-2'>GAUNKO  <span className='text-hard'>AACHAR</span></h1>
        <p className='text-xl pt-4'>Welcome to Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nobis eos sint cum voluptatem numquam sunt est sit provident repellat! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor deleniti similique qui cumque maxime, exercitationem dolore. Magnam quidem neque quaerat.</p>
        <button className='bg-hard text-white mt-[50px] border-navbar border-2 rounded-xl p-2 pl-6 pr-6  '>Buy Now</button>
        </div> 
        <div className='absolute flex right-0   mr-[100px] pt-[150px]'>
          <img src="./src/assets/pickle.png" alt="pickle" className='h-[650px] w-[550px] ' />
        </div>
    </div>
        <Wrapper/>
        <Fresh/>

        {/* 15% PAGE */}
        <div className='flex flex-row items-center justify-between bg-slate-300 mt-[100px]'>
        



          <div className='flex flex-col items-center pl-[100px]  pb-[80px] pt-[80px] max-w-[500px] ' >
            <h1 className='text-2xl font-bold pb-4'>100% Organic pickle in our store</h1>
            <p className='text-xl  pb-6'>Handcrafted with locally sourced ingredients, our 100% organic pickle delivers authentic flavors while promoting sustainability and environmental consciousness.</p>
            <div className='flex flex-row gap-0 pl-[100px] items-center  '>
            <input type='text' placeholder='Name of the pickle' className='p-3 w-[550px] rounded-xl text-black' />
           <button className='bg-customGray text-white  border-green-500 border-2 rounded-xl p-2 pl-6 pr-6 '>Search</button>
          </div>
          </div>

          <div className='flex items-end rounded pr-[50px] pt-8 pb-10'>
            <img src="./src/assets/pickle.png" alt="pickle" className='h-[350px] w-[550px] ' />
          </div>

        </div>

        <Best/>
        <Testimonal/>
    </div>
  )
}

export default Home
