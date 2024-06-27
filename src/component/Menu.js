import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
const Menu = () => {
    const menuLinks = [
        {id:1,name:'Home' , link:""},
        {id:2, name:"Product" ,link:''},
        {id:3, name:"About", link:''},
        {id:4, name:"Contact Us" ,link:""}
    ]
    const [click,setClick] =useState(false)
    const handleClick =()=>{
  setClick(!click)
    }
  return (
    <nav className='overflow-hidden top-0 w-full fixed z-10 '>
    <div className=' '>
      <div className=' bg-white shadow-md py-4 '>
        <div className='container mx-auto  flex justify-between '>
      <div>Logo</div>
      <div className='flex space-x-8 text-lg font-medium'>
    
            <ul className='flex flex-row space-x-8 text-red-300'>
                <li className='hover:text-sky-600'>Home</li>
                <li className='hover:text-sky-600' onClick={() => handleClick()}>Product</li>
                <li className='hover:text-sky-600'>About</li>
                <li className='hover:text-sky-600'>Contact Us</li>
            </ul>
        
      </div>
      <div className='flex space-x-3 items-start text-red-300'>
        <FaCartShopping size={24} />
        <FaUser size={24} />
      </div>
      </div>
      </div>

      {click &&(
        <div className='bg-white shadow-xl container mx-auto h-auto w-3/4 p-10'>
          <div className='grid grid-cols-4 gap-4 items-center'>
 <div className='px-10 mt-3'>
  <h1 className='text-red-500 font-bold'>Women</h1>
  <ul className='flex flex-col space-y-5 mt-3'>
    <li >Woman Cloths</li>
    <li>Woman Cloths</li>
    <li>Woman Cloths</li>
    <li>Woman Cloths</li>
  </ul>
 </div>
 <div className='px-10 mt-3 '>
  <h1 className='text-red-500 font-bold'>Women</h1>
  <ul className='flex flex-col space-y-5 mt-3'>
    <li >Woman Cloths</li>
    <li>Woman Cloths</li>
    <li>Woman Cloths</li>
    <li>Woman Cloths</li>
  </ul>
 </div>
 <div className='px-10 mt-3'>
  <h1 className='text-red-500 font-bold '>Women</h1>
  <ul className='flex flex-col space-y-5 mt-3'>
    <li >Woman Cloths</li>
    <li>Woman Cloths</li>
    <li>Woman Cloths</li>
    <li>Woman Cloths</li>
  </ul>
 </div>
 <div className='px-10 mt-3'>
  <h1 className='text-red-500 font-bold'>Women</h1>
  <ul className='flex flex-col space-y-5 mt-3'>
    <li >Woman Cloths</li>
    <li>Woman Cloths</li>
    <li>Woman Cloths</li>
    <li>Woman Cloths</li>
  </ul>
 </div>
          </div>
        </div>
      )}
    </div>
    </nav>
  )
}

export default Menu
