import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  const [sub,setSub]= useState()
  const [error,setError] = useState()
  const validate =() =>{
    let error={}
    let valid = true
    if(!sub){
      valid = false
      error = "Required"
    }
    setError(error)
    return valid
  }
  const handleClick =()=>{
    let valid = validate()
    if(valid){
      alert(sub)
    }
  
  }
  return (
    <div className='border-t-2 border-red-300'>
    <div className='container mx-auto py-5'>
      <div className='grid grid-cols-4 gap-4'>
        <div className='flex space-x-3 items-center'>
          <div className='bg-slate-100 h-9 w-9 rounded-full p-2'><FaFacebookF className='text-red-300 text-xl ' /></div>
          <div className='bg-slate-100 h-9 w-9 rounded-full p-2'><FaTwitter className='text-red-300 text-xl ' /></div>
          <div className='bg-slate-100 h-9 w-9 rounded-full p-2'><FaInstagram className='text-red-300 text-xl ' /></div>
          <div className='bg-slate-100 h-9 w-9 rounded-full p-2'><TbWorld className='text-red-300 text-xl ' /></div>
        </div>
        <div>
            <p className='text-lg font-bold  capitalize'>INFORMATIONS</p>
            <ul className='flex flex-col space-y-3 mt-3'>
            <li className='flex space-x-2 items-center '> <IoIosArrowForward className='text-red-300'/> <p>Home</p></li>
            <li className='flex space-x-2 items-center '> <IoIosArrowForward className='text-red-300'/> <p>Product</p></li>
            <li className='flex space-x-2 items-center '> <IoIosArrowForward className='text-red-300'/> <p>About Us</p></li>
            <li className='flex space-x-2 items-center '> <IoIosArrowForward className='text-red-300'/> <p>Contact Us</p></li>
      
            </ul>
        </div>
        <div>
            <p className='text-lg font-bold '>QUICK LINKS</p>
            <ul className='flex flex-col space-y-3 mt-3'>
                <li className='flex space-x-2 items-center '> <IoIosArrowForward className='text-red-300'/> <p>My Cart</p></li>
                <li className='flex space-x-2 items-center '> <IoIosArrowForward className='text-red-300'/> <p>Wish List</p></li>
                <li className='flex space-x-2 items-center '> <IoIosArrowForward className='text-red-300'/> <p>Brand</p></li>
                <li className='flex space-x-2 items-center '> <IoIosArrowForward className='text-red-300'/> <p>Categories</p></li>
            </ul>
        </div>
       <div>
        <div className='flex  items-center justify-center space-x-3 '>
          <input type='text' value={sub} onChange={(e) => setSub(e.target.value)} className='w-[80%] h-10 bg-slate-100 rounded-md '/>
          <button className='bg-red-300 rounded-md h-10 px-2 text-white' onClick={() => handleClick()}>Subscribe</button>
         
        </div> 
        {error && (
              <div><p className='text-red-500 text-xs'>{error}</p></div>
            )}
        </div> 
       
       
      </div>
    </div>
    <div className='bg-red-300 py-4'>Cpyright</div>
    </div>
  )
}

export default Footer
