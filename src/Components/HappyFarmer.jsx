import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const farmers = [
    {
        id: 1,
        name: 'Rafiq Uddin',
        text: 'FasalBridge helped me sell my crops easily!',
        image:'https://i.ibb.co.com/MxG90ktJ/ffff-1.jpg'
    },
      {
        id: 2,
        name: 'Salma Begum',
        text: 'Found new buyers from another district!',
        image:'https://i.ibb.co.com/60n0Mwjw/f1.webp'
    },
      {
        id: 3,
        name: 'Jahirul Islam',
        text: 'Now I can showcase my products easily!',
        image:'https://i.ibb.co.com/8gQ6h0LL/f2.webp'
    },
      {
        id: 4,
        name: 'Mina Khatun',
        text: 'FasalBridge made farming business social & fun!',
        image:'https://i.ibb.co.com/rRr32kN3/farmer5-1.jpg'
    },
      {
        id: 5,
        name: 'Hasan Ali',
        text: 'Farming feels smarter now!',
        image:'https://i.ibb.co.com/MyWkJmCK/f5.jpg'
    },
      {
        id: 6,
        name: 'Rojina Begum',
        text: 'FasalBridge is a great farming platform!',
        image:'https://i.ibb.co.com/dJtZ4mtD/f3.webp'
    },
]
const HappyFarmer = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);
    useEffect(()=>{
        const zoomImage = ()=>{
            const container = containerRef.current;
            if(!container){
                return;
            }
             const centerX = container.getBoundingClientRect().width /2;
        const cards = Array.from(container.querySelectorAll('.farmer-card'));
        let closestIndex = null;
        let closestDistance = Infinity;
        cards.forEach((card, index)=>{
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.left + rect.width /2;
            const distance = Math.abs(cardCenter - centerX)
            if(distance < closestDistance){
                closestDistance = distance;
                closestIndex = index;
            }
        }) 

                setActiveIndex(closestIndex);

        }
       

        const interval = setInterval(zoomImage, 100);
        return ()=> clearInterval(interval);

    },[])
    const scrollingFarmers = [...farmers, ...farmers]
    return (
        <div className='py-10 poppins-font'>

              <div className='text-center  pb-8'>
                     <h2 className='font-bold text-2xl md:text-3xl  lg:text-4xl text-[#1B5E20]'>Our Happy <span className='text-[#F9A825]'>Farmers</span></h2>
            <p className=' font-medium text-lg  md:text-xl lg:text-xl text-gray-600 hind-siliguri-font  mt-5'>Farmers who found growth and connection through FasalBridge.</p>
                </div>
           
            <div ref={containerRef} className='relative overflow-hidden'>
                <Marquee gradient={false} speed={30} pauseOnHover={true}>
                    <div className='flex space-x-7 px-4'>
                        {
                            scrollingFarmers.map((farmer, index)=>(
                                <motion.div 
                                key={`${farmer.id} - ${index}`}
                                className='farmer-card relative w-64 h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300'
                                animate={{
                                    scale: activeIndex === index ? 1.15 : 0.9,
                                    y: activeIndex === index ? -25 : 0,
                                    zIndex: activeIndex === index ? 10 : 1,

                                }}
                                transition={{type: 'spring', stiffness: 200, damping: 15}}
                                >
                                    <img src={farmer.image} alt={farmer.name} className='w-full h-full object-cover' />
                                    <div className='absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white'>
                                    <h3 className='text-lg font-semibold'>{farmer.name}</h3>
                                    <p className='text-sm'>{farmer.text}</p>

                                    </div>

                                </motion.div>
                            ))
                        }

                    </div>

                </Marquee>

            </div>
            
        </div>
    );
};

export default HappyFarmer;