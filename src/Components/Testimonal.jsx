import React from 'react'
import { motion } from 'framer-motion'
import { testimonal } from '../Data'


import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation } from 'swiper/modules';
import "swiper/swiper-bundle.css";


const Testimonal = () => {
  return (
    <div>
      
      <div>
       
        <Swiper
          modules={[ Navigation]}
          spaceBetween={40}
          slidesPerView={3}
          loop={true}
          
          
          navigation={true}
        >
          {testimonal.map((val, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 0.93 }}
                className='items shadow'
              >
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    
                  </div>
                </div>
                <p>{val.desc}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    
    </div>
  )
}

export default Testimonal
