import React from 'react'
import { motion } from 'framer-motion'
import { testimonal } from '../Data'


import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation } from 'swiper/modules';
import "swiper/swiper-bundle.css";


const Testimonal = () => {
  return (
    <div className='p-[40px] mt-[50px]'>
         <h1 className='text-2xl pt-[20px] pb-[50px] flex items-center justify-center font-bold'>What Do Our Cilents Say About Us?</h1>
      
       
        <Swiper
          modules={[ Navigation]}
          spaceBetween={40}
          slidesPerView={3}
          loop={true}
          
          
          navigation={true}
          className=' flex mb-[20px] '
        >
          {testimonal.map((val, index) => (
            <SwiperSlide key={index} className=' flex   justify- center '>
              <motion.div
                whileHover={{ scale: 0.93 }}
                className=' flex flex-col  pb-[100px] p-[40px] rounded border-[10px] text-center border border-green-200 max-h-[350px]' 
              >
                <div className=' flex'>
                  <div className='img'>
  
                    <img src={val.cover} alt='' className='w-[120px] h-[120px] rounded-20p' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='p-[20px] flex items-center'>
                    <h2 className='text-xl font-semibold'>{val.name}</h2>
                    
                  </div>
                </div>
                <p className='text-xl pt-10'>{val.desc}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    
   
  )
}

export default Testimonal
