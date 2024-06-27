import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../slice/Product';

const Product = () => {
    const {prouct} = useSelector((state) => state.prodctState)
    console.log(prouct);
    const dispatch = useDispatch()
    useEffect(() =>{
 dispatch(getAllProducts())
    },[dispatch])
  return (
    <div className='mt-10 container mx-auto'>
      <div className='grid grid-cols-4 gap-5'>
        {prouct.slice(0,8).map((product) =>(
              <div className='bg-slate-100 h-auto rounded-md flex flex-col items-center justify-center'>
                <div className='h-40 w-full flex items-center justify-center'> <img src={product.images[0]} alt='' className='h-full object-cover' /></div>
                <div className=' h-40 flex flex-col space-y-3  items-center justify-center py-4'>
                <p className='font-base text-lg'>{product.title}</p>
                <p className='text-red-300 text-2xl'>${product.price}</p>
                <p>Brand: {product.brand}</p>
                </div>
                <div className='flex items-center justify-center mb-4'>
                    <button className='text-white px-8 py-2 bg-red-300 rounded-md text-sm font-bold'>BUY NOW</button>
                </div>
               
               
              <p></p>
          </div>
        ))}
      
      </div>
    </div>
  )
}

export default Product
