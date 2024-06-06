import React from 'react'

import '../App.css'
import { motion } from 'framer-motion';


const best = [
    {
        cover: "./src/assets/akbore.jpg",
      name: "Akhabare Pickle",
      
    },
    {
        cover: "./src/assets/chicken.jpg",
      name: "Chicken  Pickle",
      
    },
    {
        cover: "./src/assets/mutton.jpg",
      name: "Mutton Pickle",
      
    },
    {
        cover: "./src/assets/chilly.jpg",
      name: "Chilli Pickle",
      
    },
  ];

const Best = () => {
  
  return (
    <div>
       
       <h1 className='text-2xl pt-[50px] flex items-center justify-center font-bold'>Best Selling Pickles</h1>
      <div className='flex flex-row p-[50px]   gap-[80px] justify-center item-center'>
      
      {best.map((val) => {
         return (
           <motion.div
           initial={{ opacity: 0, scale: 0.3, x: -100 }}  // Start from off-screen to the left
           animate={{ opacity: 1, scale: 1, x: 0 }}  // Animate to its final position
           transition={{ duration: 1 }}  // Control the duration of the initial animation
           whileHover={{ scale: 1.1, y: -10, backgroundColor: 'rgb(253, 228, 158)', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)' }}  // Define the hover effect
           whileInView={{ opacity: 1, scale: 1, x: 0 }}  // Animate when the component is in view
           viewport={{ once: true, amount: 0.5 }}
           whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}
           className="flex items-center bg-navbar justify-around flex-col mt-[50px] max-w-[400px]   max-h-[650px] shadow-2xl" >
             <div  >
               <img src={val.cover} alt='img'  className='flex max-w-[300px] max-h-[300px]'/>
             </div>
             <div className="pt-6 pb-6 p-7">
               <h1
               
               
               className="text-xl font-bold text-white bg-navbar1 cursor-pointer  hover:bg-navbar1 hover:text-white   border border-hard border-[3px] rounded p-2 ">{val.name}</h1>
              
             </div>
     
           </motion.div>
         )
       })}

   </div>
    </div>
  )
}

export default Best

