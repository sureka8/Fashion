import React from 'react'
import Slider from '../component/Slider'
// import img1 from '../image/slider1.jpg'
// import img2 from '../image/Slider2.jpg'
// import img3 from '../image/Slider3.jpg'
// import img4 from '../image/Slider4.avif'
// import img5 from '../image/Slider5.jpg'
// import img6 from '../image/Slider6.jpg'
import Banner from '../component/Banner'
import Product from '../component/Product'


const Home = () => {
//   let slide = [
//     img1,
//    img2,
//   img3,
 
//     img6,

//  ]
  return (
    <div className='h-auto' >
      <div className='h-[80vh]'>
   <Slider  />
   
   </div>
   <Product/>
   <Banner />
    </div>
  )
}

export default Home
