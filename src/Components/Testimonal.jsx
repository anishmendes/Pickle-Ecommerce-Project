
import { motion } from 'framer-motion'
import { testimonal } from '../Data'

import '../App.css'
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation } from 'swiper/modules';
import "swiper/swiper-bundle.css";




const Testimonal = () => {
  return (
    <motion.div
    whileInView={{ opacity: [0, 1], scale: 1, y: [-200, 0], transition: { duration: 0.8, delay: 0.8 } }} 
    className='p-[40px] mt-[50px]'>
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
                className=' flex flex-col  pb-[100px] p-[40px] rounded  text-center bg-navbar hover:bg-navbar1 hover:text-white transition duration-300 ease-in-out border border-hard   max-h-[350px]' 
              >
                <div className=' flex'>
                  <div className='img'>
  
                    <img src={val.cover} alt='' className='w-[120px] h-[120px] rounded-20p' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='p-[20px] flex items-center'>
                    <h2 className='text-2xl font-semibold text-hard '>{val.name}</h2>
                    
                  </div>
                </div>
                <p className='text-xl pt-10 font-medium'>{val.desc}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    
   
  )
}

export default Testimonal
