import { hwrapper } from "../Data";

import React from 'react'

const Wrapper = () => {
  return (
    <section className="bg-cyan-600 flex ">
    
      <div className="flex items-center gap-[150px] pl-[180px] pt-8 pb-8">
        {hwrapper.map((val) => {
          return (
            <div className="flex items-center justify-between flex-col " >
              <div className="pr-[50px] flex flex-col">
                <img src={val.cover} alt='img' />
              </div>
              <div className="pt-6 pb-6">
                <h1 className="text-xl font-bold text-white">{val.data}</h1>
                <h3 className="text-xl mt-6 text-white">{val.title}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </section>
 
  )
}

export default Wrapper
