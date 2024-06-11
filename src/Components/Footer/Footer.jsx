import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='p-auto bg-navbar1 mt-[100px]'>
      <div className='flex flex-row items-center justify-center  pt-[50px] gap-[1.5px] '>
      <h1 className='text-3xl font-bold pt-2 text-hard flex pr-10 '><span className='text-green-800 hover:text-green-600 transition duration-300 ease-in-out pr-1'>GAUNKO </span>AACHAR</h1>
         <input type='text' placeholder='Enter Your Email' className='p-3 w-[550px] rounded-xl text-black' />
         <button className='bg-customGray text-black  border-green-500 border-2 rounded-xl p-[10px] pl-6 pr-6  '>Join Now</button>

         <div className='pl-[50px] flex items-center justify-around gap-6'>
       <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} className="text-blue-900 hover:text-blue-800 text-3xl transition duration-300 ease-in-out " />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="text-cyan-800 hover:text-cyan-500 text-3xl transition duration-300 ease-in-out" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="text-red-800 hover:text-red-600 text-3xl transition duration-300 ease-in-out" />
      </a>
      <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} className="text-green-700 hover:text-green-500 text-3xl transition duration-300 ease-in-out" />
      </a>
       </div>
      </div>

     
      


       <div className='flex flex-row pt-[20px] pb-[50px] justify-around  items-center'>

         <div className='flex flex-col max-w-[450px] '>
         
            <h2 className='text-2xl font-medium text-black'>Why people like us ?</h2>
            <p className='text-xl text-black pt-5'>People appreciate us because we offer organic pickles bursting with spices and tanginess. Our commitment to quality ingredients ensures a flavorful experience, satisfying the cravings of spice and sour lovers alike.</p>
          </div> 
         <div className='flex flex-col'>
          <h2 className='text-2xl font-semibold text-black'>Shop Info</h2>
          <ul className='pt-8 text-xl text-black font-medium'>
            <li className='pb-1 hover:bg-hard hover:text-white hover:cursor-pointer hover:rounded  transition-all duration-300 ease-out'>Aboutus</li>
            <li className='pb-1 hover:bg-hard hover:text-white hover:cursor-pointer hover:rounded  transition-all duration-300 ease-out'>Contact Us </li>
            <li className='pb-1 hover:bg-hard hover:text-white hover:cursor-pointer hover:rounded  transition-all duration-300 ease-out'>Privacy Policy</li>
            <li className='pb-1 hover:bg-hard hover:text-white hover:cursor-pointer hover:rounded  transition-all duration-300 ease-in'>Terms & Conditions</li>
            <li className='pb-1 hover:bg-hard hover:text-white hover:cursor-pointer hover:rounded  transition-all duration-300 ease-in'>FAQS & Help</li>
          </ul>
          </div> 
         <div className='flex flex-col pb-[65px] '>
         <h2 className='text-2xl font-semibold text-black '>Account</h2>
          <ul className='pt-8  text-xl text-black font-medium '>
           <li className='pb-1 hover:bg-hard hover:text-white hover:cursor-pointer hover:rounded  transition-all duration-300 ease-in'> My Account</li>
            <li className='pb-1 hover:bg-hard hover:text-white hover:cursor-pointer hover:rounded  transition-all duration-300 ease-in'>Shop Details </li>
            <li className='pb-1 hover:bg-hard hover:text-white hover:cursor-pointer hover:rounded  transition-all duration-300 ease-in'>Shopping Cart</li>
          
          </ul>
          </div> 
         <div className='flex flex-col pb-[65px]'>
         


         <h2 className='text-2xl font-semibold text-black'>Contact</h2>
          <ul className='pt-8 text-xl text-black font-medium '>
           <li className='pb-1 hover:bg-hard hover:text-white hover:cursor-pointer hover:rounded transition-all duration-300 ease-in'>  Address: New Baneshwor, Kathmandu 44600</li>
            <li className='pb-1 hover:bg-hard hover:text-white hover:cursor-pointer hover:rounded transition-all duration-300 ease-in'>Email: gaunnko@gmail.com </li>
            <li className='pb-1 hover:bg-hard hover:text-white hover:cursor-pointer hover:rounded  transition-all duration-300 ease-in'>Phone: (+977) 9808284192</li>
          
          </ul>
          </div> 
              
       </div>
    </div>
  )
}

export default Footer
