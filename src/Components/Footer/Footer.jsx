import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='p-auto bg-darkblue mt-[100px]'>
      <div className='flex flex-row items-center justify-center  pt-[50px] '>
      <h1 className='text-3xl font-bold pt-2 text-green-200 flex pr-10 '>GAUNKO AACHAR</h1>
         <input type='text' placeholder='Enter Your Email' className='p-3 w-[550px] rounded-xl text-black' />
         <button className='bg-customGray text-white  border-green-500 border-2 rounded-xl p-2 pl-6 pr-6  '>Join Now</button>

         <div className='pl-[50px] flex items-center justify-around gap-6'>
       <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} className="text-blue-200 hover:text-blue-800 text-3xl transition duration-300 ease-in-out " />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="text-blue-200 hover:text-cyan-500 text-3xl transition duration-300 ease-in-out" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="text-blue-200 hover:text-red-600 text-3xl transition duration-300 ease-in-out" />
      </a>
      <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} className="text-blue-200 hover:text-green-500 text-3xl transition duration-300 ease-in-out" />
      </a>
       </div>
      </div>

     
      


       <div className='flex flex-row pt-[20px] pb-[50px] justify-around  items-center'>

         <div className='flex flex-col max-w-[450px] '>
         
            <h2 className='text-2xl font-medium text-white'>Why people like us ?</h2>
            <p className='text-xl text-white pt-5'>People appreciate us because we offer organic pickles bursting with spices and tanginess. Our commitment to quality ingredients ensures a flavorful experience, satisfying the cravings of spice and sour lovers alike.</p>
          </div> 
         <div className='flex flex-col'>
          <h2 className='text-2xl font-semibold text-white'>Shop Info</h2>
          <ul className='pt-8 text-xl text-white font-medium'>
            <li className='pb-1'>Aboutus</li>
            <li className='pb-1'>Contact Us </li>
            <li className='pb-1'>Privacy Policy</li>
            <li className='pb-1'>Terms & Conditions</li>
            <li className='pb-1'>FAQS & Help</li>
          </ul>
          </div> 
         <div className='flex flex-col pb-[65px] '>
         <h2 className='text-2xl font-semibold text-white '>Account</h2>
          <ul className='pt-8  text-xl text-white font-medium '>
           <li className='pb-1'> My Account</li>
            <li className='pb-1'>Shop Details </li>
            <li className='pb-1'>Shopping Cart</li>
          
          </ul>
          </div> 
         <div className='flex flex-col pb-[65px]'>
         


         <h2 className='text-2xl font-semibold text-white'>Contact</h2>
          <ul className='pt-8 text-xl text-white font-medium'>
           <li className='pb-1'>  Address: New Baneshwor, Kathmandu 44600</li>
            <li className='pb-1'>Email: gaunnko@gmail.com </li>
            <li className='pb-1'>Phone: (+977) 9808284192</li>
          
          </ul>
          </div> 
              
       </div>
    </div>
  )
}

export default Footer
