import React from 'react'
import '../App.css'
import { motion } from 'framer-motion';
const pickle = [
    {
        cover: "/assets/akbore.jpg",
      name: "Akhabare Pickle",
      desc: "Akhabare pickle: a tantalizing blend of zesty flavours and fiery spices, delivering a spicy kick that leaves taste buds electrified with each bite.",
    },
    {
        cover: "/assets/sinchaun_pickle.jpg",
      name: "Sinchaun  Pickle",
      desc: "Sinchaun pickle: a fiery fusion of tangy vegetables and potent spices, igniting taste buds aith its bold, aromatic punch.",
    },
    {
        cover: "/assets/chilly.jpg",
      name: "Chilli Pickle",
      desc: "Chilli pickle: a fiery fusion of whole or chopped chilies, infused and spices, parking a punch of heat and flavour in every bite.",
    },
    
  ];




const Fresh = () => {
  return (
    <>
       <h1 className='text-2xl pt-[50px] flex items-center justify-center font-bold'>Fresh Organic Pickle</h1>
    <div className='flex flex-row  gap-[100px] justify-center item-center'>
      
       {pickle.map((val) => {
          return (
            <motion.div 
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            
            className="flex items-center justify-around flex-col mt-[50px]  max-w-[400px]  max-h-[700px] shadow-2xl bg-navbar " >
              <div >
                <img src={val.cover} alt='img'  className='w-full max-h-[380px] object-cover'/>
              </div>
              <div className="pt-6 pb-6 p-7">
                <h1 className="text-xl font-bold text-hard">{val.name}</h1>
                <h3 className="text-xl mt-6 text-black">{val.desc}</h3>
              </div>
        <div className='flex items-center  gap-[100px] flex-row  pb-[120px]'>
            <span className='text-customGray text-xl pr-[50px] font-bold'><span className='text-navbar1'>RS</span> 450</span>
            <button className='border-2 bg-hard text-white 0 rounded p-3   font-bold hover:border-yellow-400 hover:bg-navbar1 hover:text-white transition duration-300'> Add to Cart</button>
        </div>
            </motion.div>
          )
        })}

    </div>
        </>
  )
}

export default Fresh
