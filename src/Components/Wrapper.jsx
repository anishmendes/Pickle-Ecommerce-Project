import { hwrapper } from "../Data";

import React from 'react'
import '../App.css'
import { motion } from 'framer-motion';



const Wrapper = () => {
  return (
    <section className="bg-customGray flex ">
    
      <div className="flex items-center gap-[150px] pl-[180px] pt-8 pb-8">
        {hwrapper.map((val) => {
          return (
            <motion.div
            whileHover={{ scale: 1.1, y: -10 }}
            whileInView={{ opacity: [0, 1], scale: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } }}  // Animate opacity from 0 to 1 over 1 second after 1 second delay when the component is in view
             className="flex items-center justify-between flex-col " >
              <div  className="pr-[50px] flex flex-col ">
                <img src={val.cover} alt='img' />
              </div>
              <div className="pt-6 pb-6">
                <h1 className="text-xl font-bold text-white">{val.data}</h1>
                <h3 className="text-xl mt-6 text-white">{val.title}</h3>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
 
  )
}

export default Wrapper
