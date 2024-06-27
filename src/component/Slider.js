import React ,{useState} from 'react'
import img1 from '../image/slider1.jpg'
import img2 from '../image/Slider2.jpg'
import img3 from '../image/Slider3.jpg'
import img4 from '../image/Slider4.avif'
import img5 from '../image/Slider5.jpg'
import img6 from '../image/Slider6.jpg'
import { BiSolidLeftArrowCircle } from "react-icons/bi";
import { BiSolidRightArrowCircle } from "react-icons/bi";
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  const slideImages = [
    { id: 1, name: img1 },
    { id: 2, name: img2 },
    { id: 3, name: img3 },
    { id: 4, name: img4 },
    { id: 5, name: img5 },
    { id: 6, name: img6 },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slideImages.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slideImages.length - 1 : prevSlide - 1
    );
  };
  return (
    <div className='w-[90%] mt-20 h-[100%]  m-auto relative  overflow-y-hidden overflow-hidden '>
    <div className='transition ease-out duration-40'
    //  style={{
    //     transform: `translateX(-${currentSlide *100 }%)`
    // }}
    >
      <img src={slideImages[currentSlide].name} alt='' className='w-full h-auto max-h-full object-contain' />
    </div>
    <div className='top-0 absolute flex items-center justify-between h-full w-full text-white px-5 text-2xl'>
      <button onClick={prevSlide}>
        <BiSolidLeftArrowCircle />
      </button>
      <button onClick={nextSlide}>
        <BiSolidRightArrowCircle />
      </button>
    </div>

    <div className='bottom-0 absolute py-4 flex justify-center left-[45%]  gap-3'>
        {slideImages.map((s,i) =>(
            <div key={i} className={`rounded-full h-3 w-3  ${i == currentSlide ? "bg-white": "bg-gray-400"}`}></div>
        ))}
        
    </div>
  </div>
  )
}

export default Slider
