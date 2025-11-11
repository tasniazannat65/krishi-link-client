import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaLeaf, FaSeedling, FaShoppingBasket } from 'react-icons/fa';

const containerVariant = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.3}
  }

};
const itemVariant = {
  hidden: {opacity: 0, y: 40},
  visible: {opacity: 1, y: 0, transition: {duration: 0.6}}
};


const HowItWorks = () => {
    return (
        <div className='py-8 md:py-10 lg:py-14 px-6 md:px-10 lg:px-16   poppins-font rounded-lg'>
           <div className='text-center mb-10'>
             <h2 className='font-bold text-2xl md:text-3xl  lg:text-4xl text-[#1B5E20] mb-4 '>How Fasal<span className='text-[#F9A825] tracking-wide'>Bridge Works</span> </h2>
            <p className='font-medium text-lg  md:text-xl lg:text-xl text-gray-600 hind-siliguri-font max-w-3xl mx-auto'>FasalBridge connects farmers, traders, and consumers in one digital space. See how you can post, browse, and collaborate to grow together.</p>
           </div>




          <motion.div
          variants={containerVariant}
          initial='hidden'
          whileInView='visible'
          viewport={{once: true}}
          
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5'>


              <motion.div
              variants={itemVariant}
              whileHover={{scale: 1.05}}
            className='bg-white hover:bg-[#CFE2A3] shadow-md hover:shadow-lg  p-6 border-green-100 transition-all duration-300 rounded-xl text-center '>
                  <FaSeedling className='text-green-600 text-5xl mb-3 mx-auto'/>
              

            <h3 className='font-semibold text-xl  lg:text-2xl text-center text-[#2E7D32] mb-2 '>Post Your Crop</h3>
            <p className='text-[16px] lg:text-lg hind-siliguri-font   text-gray-700 font-medium'>Share what you are growing or selling with the community so others can discover it easily.</p>
            </motion.div>

              <motion.div
              variants={itemVariant}
              whileHover={{scale: 1.05}}
            className='bg-white hover:bg-[#CFE2A3] shadow-md hover:shadow-lg  p-6 border-green-100 transition-all duration-300 rounded-xl text-center'>
                <FaShoppingBasket className='text-green-600 text-5xl mb-3 mx-auto'/>

            <h3 className='font-semibold text-xl  lg:text-2xl text-center text-[#2E7D32] mb-2'>Browse Other Crops</h3>
            <p className='text-[16px] lg:text-lg hind-siliguri-font   text-gray-700 font-medium'>Explore crops posted by other farmers, traders, and consumers to find opportunities and collaborations.</p>
            </motion.div>
              <motion.div
              variants={itemVariant}
              whileHover={{scale: 1.05}}
            className='bg-white hover:bg-[#CFE2A3] shadow-md hover:shadow-lg  p-6 border-green-100 transition-all duration-300 rounded-xl text-center'>
                <FaHandshake className='text-green-600 text-5xl mb-3 mx-auto'/>

            <h3 className='font-semibold text-xl  lg:text-2xl text-center text-[#2E7D32] mb-2'>Show Interest & Connect</h3>
            <p className='text-[16px] lg:text-lg hind-siliguri-font   text-gray-700 font-medium'>Express your interest, start conversations, and connect with like-minded users directly.</p>
            </motion.div>
              <motion.div
              variants={itemVariant}
              whileHover={{scale: 1.05}}
            className='bg-white hover:bg-[#CFE2A3] shadow-md hover:shadow-lg  p-6 border-green-100 transition-all duration-300 rounded-xl text-center'>
                <FaLeaf className='text-green-600 text-5xl mb-3 mx-auto'/>

            <h3 className='font-semibold text-xl  lg:text-2xl text-center text-[#2E7D32] mb-2'>Collaborate & Grow Together</h3>
            <p className='text-[16px] lg:text-lg hind-siliguri-font   text-gray-700 font-medium'>Work together, exchange knowledge, and grow your agricultural business or network.</p>
            </motion.div>



    
          </motion.div>
            
        </div>
    );
};

export default HowItWorks;