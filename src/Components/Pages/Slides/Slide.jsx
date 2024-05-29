// className: "center",
// centerMode: true,
// infinite: true,
// centerPadding: "60px",
// slidesToShow: 3,
// speed: 500,
// rows: 2,
// slidesPerRow: 2

import React from 'react'

const pickle = [
    {
        cover: "./src/assets/akhabare_pickle.png",
      name: "Akhabare Pickle",
      desc: "Akhabare pickle: a tantalizing blend of zesty flavours and fiery spices, delivering a spicy kick that leaves taste buds electrified with each bite.",
    },
    {
        cover: "./src/assets/sinchaun_pickle.png",
      name: "Sinchaun  Pickle",
      desc: "Sinchaun pickle: a fiery fusion of tangy vegetables and potent spices, igniting taste buds aith its bold, aromatic punch.",
    },
    {
        cover: "./src/assets/chilli_pickle.png",
      name: "Chilli Pickle",
      desc: "Chilli pickle: a fiery fusion of whole or chopped chilies, infused and spices, parking a punch of heat and flavour in every bite.",
    },

    {
        cover: "./src/assets/chicken_pickle.png",
      name: "Chicken Pickle",
      desc: "Chicken pickle: Perfectly infused with a robust mix of traditional spices and a touch of vinegar, this pickle promises to elevate any meal.",
    },
    {
        cover: "./src/assets/fenugreek_pickle.png",
      name: "Fenugreek Pickle",
      desc: "Fenugreek pickle: Each spoonful offers a delightful harmony of tangy, bitter, and savory notes, making it an irresistible treat for pickle lovers.",
    },
    {
        cover: "./src/assets/garlic_pickle.png",
      name: "Garlic Pickle",
      desc: "Garlic pickle: Each clove bursts with a rich medley of tangy, savory, and aromatic notes, creating an irresistible delight for pickle enthusiasts.",
    },
    {
        cover: "./src/assets/chilli_pickle.png",
      name: "Radhish Pickle",
      desc: "Each piece of radish offers a crisp, refreshing crunch combined with a harmonious medley of tangy, savory, and aromatic notes.",
    },
    {
        cover: "./src/assets/chilli_pickle.png",
      name: "Lapsi Pickle",
      desc: "Lapsi pickle: a tantalizing blend of zesty flavors and fiery spices, delivering a spicy kick that leaves taste buds electrified with each bite.",
    },
    {
        cover: "./src/assets/chilli_pickle.png",
      name: "Green Chilly Pickle",
      desc: "Green Chilly pickle: Each green chili bursts with a vibrant medley of tangy, hot, and savory notes, creating an irresistible delight for pickle lovers.",
    },
    {
        cover: "./src/assets/chilli_pickle.png",
      name: "Lemon Pickle",
      desc: "Lemon pickle: a tantalizing blend of zesty flavors and fiery spices, delivering a spicy kick that leaves taste buds electrified with each bite.",
    },
    {
        cover: "./src/assets/chilli_pickle.png",
      name: "Mango Pickle",
      desc: "Mango pickle:  Each piece of mango bursts with a refreshing medley of tangy, sour, and savory notes, creating an irresistible delight for pickle enthusiasts.",
    },
    {
        cover: "./src/assets/chilli_pickle.png",
      name: "Dalle Khursani Pickle",
      desc: "Dalle Khursani pickle: Infused with robust spices and a touch of vinegar, this lemon pickle promises to elevate any meal with its intense and unforgettable taste.",
    },
    {
        cover: "./src/assets/chilli_pickle.png",
      name: "Lapsi Pickle",
      desc: "Lapsi pickle: a tantalizing blend of zesty flavors and fiery spices, delivering a spicy kick that leaves taste buds electrified with each bite.",
    },
    {
        cover: "./src/assets/chilli_pickle.png",
      name: "Lapsi Pickle",
      desc: "Lapsi pickle: a tantalizing blend of zesty flavors and fiery spices, delivering a spicy kick that leaves taste buds electrified with each bite.",
    },
    {
        cover: "./src/assets/chilli_pickle.png",
      name: "Lapsi Pickle",
      desc: "Lapsi pickle: a tantalizing blend of zesty flavors and fiery spices, delivering a spicy kick that leaves taste buds electrified with each bite.",
    },
    {
        cover: "./src/assets/chilli_pickle.png",
      name: "Lapsi Pickle",
      desc: "Lapsi pickle: a tantalizing blend of zesty flavors and fiery spices, delivering a spicy kick that leaves taste buds electrified with each bite.",
    },
    
  ];


const Slide = () => {
  return (
    <>
      <h1 className='text-2xl pt-[50px] flex items-center justify-center font-bold'>Free Organic Pickle</h1>
    <div className='flex flex-row  gap-[100px] justify-center item-center'>
      
       {pickle.map((val) => {
          return (
            <div className="flex items-center justify-around flex-col mt-[50px] max-w-[400px]  max-h-[650px] shadow-2xl" >
              <div className="pr-[50px] ">
                <img src={val.cover} alt='img'  className='flex max-w-[300px] max-h-[300px]'/>
              </div>
              <div className="pt-6 pb-6 p-7">
                <h1 className="text-xl font-bold text-green-400">{val.name}</h1>
                <h3 className="text-xl mt-6 text-black">{val.desc}</h3>
              </div>
        <div className='flex items-center  gap-[100px] flex-row pt-7 pb-6'>
            <span className='text-green-700 text-xl pr-[50px] font-bold'><span className='text-yellow-400'>RS</span> 450</span>
            <button className='border-2 border-yellow-400 rounded p-3 text-green-400 font-bold'> Add to Cart</button>
        </div>
            </div>
          )
        })}

    </div>
    </>
  )
}

export default Slide




