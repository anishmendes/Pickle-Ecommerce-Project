import React from 'react'

import '../App.css'

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
           <div className="flex items-center bg-navbar1 justify-around flex-col mt-[50px] max-w-[400px]   max-h-[650px] shadow-2xl" >
             <div  >
               <img src={val.cover} alt='img'  className='flex max-w-[300px] max-h-[300px]'/>
             </div>
             <div className="pt-6 pb-6 p-7">
               <h1 className="text-xl font-bold text-black cursor-pointer  hover:bg-yellow-100 hover:text-black  border border-hard border-[3px] rounded p-2 ">{val.name}</h1>
              
             </div>
     
           </div>
         )
       })}

   </div>
    </div>
  )
}

export default Best

