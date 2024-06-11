import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from 'swiper/modules';

import "swiper/swiper-bundle.css";
import { motion } from 'framer-motion'

const pickle = [
    {
        cover: "./public/assets/akhabare_pickle.png",
      name: "Akhabare Pickle",
      desc: "Akhabare pickle: a tantalizing blend of zesty flavours and fiery spices, delivering a spicy kick that leaves taste buds electrified with each bite.",
    },
    {
        cover: "./public/assets/sinchaun_pickle.png",
      name: "Sinchaun  Pickle",
      desc: "Sinchaun pickle: a fiery fusion of tangy vegetables and potent spices, igniting taste buds aith its bold, aromatic punch.",
    },
    {
        cover: "./public/assets/chilli_pickle.png",
      name: "Chilli Pickle",
      desc: "Chilli pickle: a fiery fusion of whole or chopped chilies, infused and spices, parking a punch of heat and flavour in every bite.",
    },

    {
        cover: "./public/assets/chicken_pickle.png",
      name: "Chicken Pickle",
      desc: "Chicken pickle: Perfectly infused with a robust mix of traditional spices and a touch of vinegar, this pickle promises to elevate any meal.",
    },
    {
        cover: "./public/assets/fenugreek_pickle.png",
      name: "Fenugreek Pickle",
      desc: "Fenugreek pickle: Each spoonful offers a delightful harmony of tangy, bitter, and savory notes, making it an irresistible treat for pickle lovers.",
    },
    {
        cover: "./public/assets/garlic_pickle.png",
      name: "Garlic Pickle",
      desc: "Garlic pickle: Each clove bursts with a rich medley of tangy, savory, and aromatic notes, creating an irresistible delight for pickle enthusiasts.",
    },
    {
        cover: "./public/assets/chilli_pickle.png",
      name: "Radhish Pickle",
      desc: "Each piece of radish offers a crisp, refreshing crunch combined with a harmonious medley of tangy, savory, and aromatic notes.",
    },
    {
        cover: "./public/assets/chilli_pickle.png",
      name: "Lapsi Pickle",
      desc: "Lapsi pickle: a tantalizing blend of zesty flavors and fiery spices, delivering a spicy kick that leaves taste buds electrified with each bite.",
    },
    {
        cover: "./public/assets/chilli_pickle.png",
      name: "Green Chilly Pickle",
      desc: "Green Chilly pickle: Each green chili bursts with a vibrant medley of tangy, hot, and savory notes, creating an irresistible delight for pickle lovers.",
    },
    {
        cover: "./public/assets/chilli_pickle.png",
      name: "Lemon Pickle",
      desc: "Lemon pickle: a tantalizing blend of zesty flavors and fiery spices, delivering a spicy kick that leaves taste buds electrified with each bite.",
    },
    {
        cover: "./public/assets/chilli_pickle.png",
      name: "Mango Pickle",
      desc: "Mango pickle:  Each piece of mango bursts with a refreshing medley of tangy, sour, and savory notes, creating an irresistible delight for pickle enthusiasts.",
    },
    {
        cover: "./public/assets/chilli_pickle.png",
      name: "Dalle Khursani Pickle",
      desc: "Dalle Khursani pickle: Infused with robust spices and a touch of vinegar, this lemon pickle promises to elevate any meal with its intense and unforgettable taste.",
    },
    {
        cover: "./public/assets/chilli_pickle.png",
      name: "Mix Pickle",
      desc: "Mix pickle: a tantalizing blend of zesty flavors and fiery spices, delivering a spicy kick that leaves taste buds electrified with each bite",
    },
    {
        cover: "./public/assets/chilli_pickle.png",
      name: "Mutton Pickle",
      desc: "Mutton pickle:Each piece of tender mutton bursts with a rich medley of tangy, savory, and aromatic notes, creating an irresistible delight for pickle enthusiasts.",
    },
    {
        cover: "./public/assets/chilli_pickle.png",
      name: "Imili Pickle",
      desc: "Imili pickle: Infused with robust spices and a touch of vinegar, this imli pickle promises to elevate any meal with its intense and unforgettable taste.",
    },
    {
        cover: "./public/assets/chilli_pickle.png",
      name: "Amala Pickle",
      desc: "Amala pickle: a tantalizing blend of zesty flavors and fiery spices, delivering a spicy kick that leaves taste buds electrified with each bite.",
    },
    {
        cover: "./public/assets/chilli_pickle.png",
      name: "Gundruk Pickle",
      desc: "Gundruk pickle: Each serving of fermented leafy greens bursts with a rich medley of tangy, earthy, and savory notes, creating an irresistible treat for pickle enthusiasts",
    },
    {
        cover: "./public/assets/chilli_pickle.png",
      name: "Tomato Pickle",
      desc: "Tomato pickle: Infused with robust spices and a touch of vinegar, this tomato pickle promises to elevate any meal with its intense and unforgettable taste.",
    },
    
  ];


const Slide = () => {
  return (
    <motion.span 
    whileInView={{ opacity: [0, 1], scale: 1, x: [800, 0], transition: { duration: 0.5, delay: 0.8 } }}
    >
      <h1 className='text-2xl pt-[50px] flex items-center justify-center pl-[100px] font-bold pb-[100px]'>Free Organic Pickle</h1>
      <div className="flex flex-row max-w-[1500px] pt-[50px] pl-10 " >

      <Swiper
     slidesPerView={3}
     grid={{
       rows: 2,
     }}
     spaceBetween={5}
     pagination={{
       clickable: true,
     }}
     loop={true} 
     modules={[Grid, Pagination]}
      
      className="ml-auto mr-auto w-full max-h-[1350px] mb-[50px]"
      >
        {pickle.map((val, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            
            
            className="flex items-center justify-around flex-col  max-w-[400px]  max-h-[650px] shadow-2xl  pb-[10px] mb-[80px] border border-hard border-x-4 ">
              <div className="pr-[50px] ">
                <img src={val.cover} alt='img' className='flex max-w-[300px] max-h-[300px]' />
              </div>
              <div className="pt-6 pb-6 p-7">
                <h1 className="text-xl font-bold text-green-700">{val.name}</h1>
                <h3 className="text-xl pt-6 text-black">{val.desc}</h3>
              </div>
              <div className='flex items-center gap-[100px] flex-row pt-7 pb-6'>
                <span className='text-green-700 text-xl pr-[50px] font-bold'><span className='text-navbar1'>RS</span> 450</span>
                <button className='border-2 bg-hard text-white 0 rounded p-3  font-bold hover:border-yellow-400 hover:bg-navbar1 hover:text-white transition duration-300'> Add to Cart</button>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
    </motion.span>
  )
}

export default Slide




