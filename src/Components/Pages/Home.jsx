
import Wrapper from '../Wrapper'
import Fresh from '../Fresh'
import Best from '../Best'
import Testimonal from '../Testimonal'
import '../../App.css';
import { motion } from 'framer-motion';
import {  Link } from 'react-router-dom';
import { useProductContext } from '../../context/productcontext';
import FeatureProduct from './FeatureProduct';


const Home = () => {

  const { myName} = useProductContext();

  return (
    <div>
   {myName}
   <FeatureProduct/>
    <div className='relative flex h-full w-full'>
      <img src="./public/assets/hero-img.jpg" alt="bg-hero"  className=' h-full w-full object-cover '/>
       <div className='absolute flex flex-col justify-start items-center ml-[100px] pt-[200px] max-w-[500px]'>
        <h2 className='text-xl font-bold'>100% Organic Pickle</h2>
        <h1 className='text-3xl font-bold pt-2'>GAUNKO  <span className='text-hard'>AACHAR</span></h1>
        <p className='text-xl pt-4'>Welcome to Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nobis eos sint cum voluptatem numquam sunt est sit provident repellat! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor deleniti similique qui cumque maxime, exercitationem dolore. Magnam quidem neque quaerat.</p>
        <Link to="/Shop">
  <button className='bg-hard text-white mt-[50px] border-navbar border-2 rounded-xl p-2 pl-6 pr-6'>
    Buy Now
  </button>
</Link>
        </div> 
        <div className='absolute flex right-0   mr-[100px] pt-[100px]'>
          <img src="./public/assets/pickle.png" alt="pickle" className='h-[550px] w-[500px] ' />
        </div>
    </div>
        <Wrapper/>
        <Fresh/>

        {/* 15% PAGE */}
        <motion.div
        
        
        whileInView={{ opacity: [0, 1], scale: 1, x: [-200, 0], transition: { duration: 0.7, delay: 0.7 } }} 
        className='flex flex-row items-center justify-between bg-navbar mt-[100px]'>
        



          <div className='flex flex-col items-center pl-[100px]  pb-[80px] pt-[80px] max-w-[500px] ' >
            <h1 className='text-2xl font-bold pb-4'>100% Organic pickle in our store</h1>
            <p className='text-xl  pb-6'>Handcrafted with locally sourced ingredients, our 100% organic pickle delivers authentic flavors while promoting sustainability and environmental consciousness.</p>
            <div className='flex flex-row gap-1 pl-[150px] items-center  '>
            <input type='text' placeholder='Name of the pickle' className='p-4 w-[550px] rounded-xl text-black' />
           <button className='bg-customGray text-white  border-green-500 border-2 rounded-xl p-2 pl-6 pr-6 '>Search</button>
          </div>
          </div>

          <motion.div
          whileHover={{ scale: 0.9, y: -10 }}
          
          className='flex items-end rounded pr-[50px] pt-8 pb-10'>
            <img src="./public/assets/pickle.png" alt="pickle" className='h-[350px] w-[550px] ' />
          </motion.div>

        </motion.div>

        <Best/>
        <Testimonal/>
    </div>
  )
}

export default Home
