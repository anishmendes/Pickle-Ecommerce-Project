import React from 'react'

const Footer = () => {
  return (
    <div className='p-auto bg-green-800 mt-[100px]'>
      <div className='flex flex-row items-center justify-center  pt-[50px] '>
      <h1 className='text-3xl font-bold pt-2 text-green-200 flex pr-10 '>GAUNKO AACHAR</h1>
         <input type='text' placeholder='Enter Your Email' className='p-3 w-[550px] rounded-xl text-black' />
         <button className='bg-customGray text-white  border-green-500 border-2 rounded-xl p-2 pl-6 pr-6  '>Join Now</button>
      </div>

     
       <div className=' pt-[50px]'>
       <a href="https://www.facebook.com">
    <i className='fab fa-facebook-f icon'></i>
</a>
<a href="https://twitter.com">
    <i className='fab fa-twitter icon'></i>
</a>
<a href="https://www.instagram.com">
    <i className='fab fa-instagram icon'></i>
</a>
     
       </div>


       <div className='flex flex-row pt-[20px] pb-[50px] justify-around  items-center'>

         <div className='flex flex-col max-w-[450px] '>
         
            <h2 className='text-2xl font-medium text-white'>Why people like us ?</h2>
            <p className='text-xl text-white pt-5'>People appreciate us because we offer organic pickles bursting with spices and tanginess. Our commitment to quality ingredients ensures a flavorful experience, satisfying the cravings of spice and sour lovers alike.</p>
          </div> 
         <div className='flex flex-col'>
          <h2 className='text-2xl font-semibold text-white'>Shop Info</h2>
          <ul className='pt-8 text-xl text-white font-medium'>
            <li>Aboutus</li>
            <li>Contact Us </li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQS & Help</li>
          </ul>
          </div> 
         <div className='flex flex-col'>
         <h2 className='text-2xl font-semibold text-white'>Account</h2>
          <ul className='pt-8 text-xl text-white font-medium'>
           <li> My Account</li>
            <li>Shop Details </li>
            <li>Shopping Cart</li>
          
          </ul>
          </div> 
         <div className='flex flex-col'>
         


         <h2 className='text-2xl font-semibold text-white'>Contact</h2>
          <ul className='pt-8 text-xl text-white font-medium'>
           <li>  Address: New Baneshwor, Kathmandu 44600</li>
            <li>Email: gaunnko@gmail.com </li>
            <li>Phone: (+977) 9808284192</li>
          
          </ul>
          </div> 
              
       </div>
    </div>
  )
}

export default Footer
