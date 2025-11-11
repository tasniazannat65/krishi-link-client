import React, { useEffect, useRef, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const containerVariant = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.3}
  }

};
const itemVariants = {
  hidden: {opacity: 0, y: -50},
  visible: {opacity: 1, y: 0, transition: {duration: 0.9}}
};


const HeroBanner = () => {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  useEffect(()=>{
    fetch('http://localhost:5000/hero-slider')
    .then(res=>res.json())
    .then(data=>{
      setSlides(data);
      
    })
  },[])
  const startAutoSlide = ()=>{
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(()=>{
      setCurrent((prev)=> (prev + 1) % slides.length);
    }, 5000)
  }
  useEffect(()=>{
    if(!slides.length)return;
    startAutoSlide();
    return ()=> clearInterval(intervalRef.current)
     
  },[slides])

  const handleUsersSlideChange = (index)=> {
    setCurrent(index);
    startAutoSlide();
  }
  const handleNext = ()=>{
    setCurrent((prev)=> (prev + 1) % slides.length);
    startAutoSlide();
  }
  const handlePrev = () => {
    setCurrent((prev)=> (prev - 1 + slides.length) % slides.length);
    startAutoSlide();
  }
  const handleThumbnailClick = (index)=>{
    handleUsersSlideChange(index);
  }
  const handleSwipe = (direction)=>{
    if(direction === 'left'){
      handleNext();
    }
    else{
      handlePrev();
    }
  }
  
  if(!slides.length){
    return <LoadingSpinner/>
  }


  return (
    <div className='relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden'>
      <AnimatePresence
      mode='wait'
      >
        <motion.div
        key={current}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.9}}
        className='w-full h-full absolute'
        drag='x'
        dragConstraints={{left: 0, right: 0}}
        onDragEnd={(e, info)=>{
          if(info.offset.x < -50){
            handleSwipe('left');
          }
          if(info.offset.x > 50){
            handleSwipe('right')
          }
        }}
        >
          <img src={slides[current].image} alt={slides[current].name} loading='lazy' className='w-full h-full object-cover brightness-50' />
          <motion.div
          variants={containerVariant}
          initial='hidden'
          animate='visible'
          exit='hidden'
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-2 lg:px-4'
          >
            <motion.h1
            variants={itemVariants}
            className='text-3xl md:text-4xl lg:text-7xl
            font-bold bg-gradient-to-r from-green-600 to-emerald-200 text-transparent bg-clip-text pb-2 poppins-font'
            >
              {slides[current].name}

            </motion.h1>
            <motion.p
            variants={itemVariants}
            className='mt-2 lg:mt-4 text-[16px] md:text-xl lg:text-2xl text-gray-300 font-semibold hind-siliguri-font tracking-wide'
            >
              {slides[current].details}
            </motion.p>
             <motion.button
           initial={{opacity: 0, y: 20}}
           animate={{opacity: 1, y: 0}}
           exit={{opacity: 0, y: 20}}
           transition={{duration: 0.6, delay: 0.3}}
           
           className='relative inline-flex items-center justify-center p-[5px] mt-2 lg:mt-4 overflow-hidden font-semibold text-white poppins-font cursor-pointer transition-all duration-300 bg-gradient-to-r from-green-500 via-lime-500  to-green-700 rounded-lg active:scale-90 hover:shadow-lg shadow-xl shadow-green-300/40'>
                           
                            <span className='w-full h-full  transition-all duration-300 hover:bg-transparent px-4 py-1 lg:px-6 lg:py-2 rounded-md flex items-center gap-1'>Explore More
                                
                            </span>
                          </motion.button>


 
          </motion.div>

          

        </motion.div>
      </AnimatePresence>
      <button onClick={handlePrev} className='absolute top-1/2 left-5 transform -translate-y-1/2 bg-black opacity-40 text-white p-2 rounded-full hover:opacity-60 z-10'><FaArrowLeft size={20}/></button>
      <button onClick={handleNext} className='absolute top-1/2 right-5 transform -translate-y-1/2 bg-black opacity-40 text-white p-2 rounded-full hover:opacity-60 z-10'><FaArrowRight size={20}/></button>
     

      <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2'>
      {
        slides.map((_, index)=>(
           <button key={index}
          onClick={()=> handleThumbnailClick(index)}
          className={`w-3 h-3 rounded-full ${current === index ? 'bg-green-500' : 'bg-white/50'}`}
          >

          </button>
        ))
      }

      </div>
      <div className='absolute bottom-10 md:bottom-12 lg:bottom-16 left-[99px] md:left-2/5 lg:left-5/12 transform -translate-x-1/2 flex space-x-2'>
      {
        slides.map((slide, index)=>(
          <img key={slide._id} src={slide.image} alt={slide.name} className={`w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 object-cover rounded-lg cursor-pointer border-2
             ${current === index ? 'border-green-500' : 'border-transparent'}`}
             
             onClick={()=> handleThumbnailClick(index)}
             />

        ))
      }

      </div>
      
    </div>
  );
};

export default HeroBanner;