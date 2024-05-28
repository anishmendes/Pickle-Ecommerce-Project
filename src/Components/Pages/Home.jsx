import React from 'react'
import Wrapper from '../Wrapper'

const Home = () => {
  return (
    <div>

    <div className='relative flex h-full w-full'>
      <img src="./src/assets/hero-img.jpg" alt="bg-hero"  className=' h-full w-full object-cover '/>
       <div className='absolute flex flex-col justify-start items-center ml-[100px] pt-[200px] max-w-[500px]'>
        <h2 className='text-xl font-bold'>100% Organic Pickle</h2>
        <h1 className='text-3xl font-bold pt-2'>GAUNKO  <span className='text-green-400'>AACHAR</span></h1>
        <p className='text-xl pt-4'>Welcome to Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nobis eos sint cum voluptatem numquam sunt est sit provident repellat! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor deleniti similique qui cumque maxime, exercitationem dolore. Magnam quidem neque quaerat.</p>
        <button className='bg-customGray text-white mt-[50px] border-green-500 border-2 rounded-xl p-2 pl-6 pr-6  '>Buy Now</button>
        </div> 
        <div className='absolute flex right-0   mr-[100px] pt-[150px]'>
          <img src="./src/assets/pickle.png" alt="pickle" className='h-[650px] w-[550px] ' />
        </div>
    </div>
        <Wrapper/>
    </div>
  )
}

export default Home
