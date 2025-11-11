import React from 'react';
import blogImg1 from '../assets/blog1.jpg'
import blogImg2 from '../assets/blog2.jpg'
import blogImg3 from '../assets/blog3.webp'
import blogImg4 from '../assets/blog5.webp'
import blogImg5 from '../assets/blog4.jpg'
import blogImg6 from '../assets/blog6.avif'
import { motion } from 'framer-motion';
import { FaChartLine, FaLeaf, FaSeedling, FaSun, FaTractor, FaWater } from 'react-icons/fa';

const Blogs = () => {
    return (
        <div className='py-6 md:py-8 lg:py-10'>
           <div className='text-center mb-10'>
              <h2 className='font-bold text-2xl md:text-3xl  lg:text-4xl text-[#1B5E20] mb-4 tracking-wide poppins-font'>Latest Agro <span className='text-[#F9A825] '> Blogs</span> </h2>
                                     <p className='font-medium text-lg  md:text-xl lg:text-xl text-gray-600 hind-siliguri-font max-w-3xl mx-auto '>Explore the latest agricultural tips, trends, techniques, and success stories to help farmers, traders, and enthusiasts grow smarter together.</p>
            </div> 

           <motion.div
           className='flex flex-col md:flex-row lg:flex-row items-center gap-8'
           initial={{opacity: 0, x: -50}}
           whileInView={{opacity: 1, x: 0}}
           viewport={{once: true}}
           transition={{duration: 0.8}}
           >
            <div className='flex-1'>
                <img src={blogImg1} alt="Smart Irrigation Techniques" className='w-full h-64 md:h-72 lg:h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'/>

            </div>
            <div className='flex-1 space-y-4 mb-6 md:mb-0 lg:mb-0 text-center md:text-left lg:text-left'>
                <div className='flex items-center gap-2 justify-center md:justify-start lg:justify-start'>
                    <FaWater className='text-green-600 w-6 h-6'/>
                    <span className='text-gray-500 text-sm'>Nov 10, 2025</span>

                </div>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-green-700 poppins-font'>Smart Irrigation Techniques</h3>
                <p className='text-gray-700 text-[16px] md:text-lg lg:text-xl hind-siliguri-font'>
            Learn modern irrigation methods that help conserve water while improving crop yield. Farmers can implement simple strategies to save resources and increase productivity effectively.</p>

            </div>

            </motion.div>  

           <motion.div
           className='flex flex-col md:flex-row-reverse lg:flex-row-reverse items-center gap-8'
           initial={{opacity: 0, x: 50}}
           whileInView={{opacity: 1, x: 0}}
           viewport={{once: true}}
           transition={{duration: 0.8}}
           >
            <div className='flex-1'>
                <img src={blogImg2} alt="Organic Fertilizer Benefits" className='w-full h-64 md:h-72 lg:h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'/>

            </div>
            <div className='flex-1 space-y-4 mb-6 md:mb-0 lg:mb-0 text-center md:text-left lg:text-left'>
                <div className='flex items-center gap-2 justify-center md:justify-start lg:justify-start'>
                    <FaSeedling className='text-green-600 w-6 h-6'/>
                    <span className='text-gray-500 text-sm'>Oct 25, 2025</span>

                </div>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-green-700 poppins-font'>Organic Fertilizer Benefits</h3>
                <p className='text-gray-700 text-[16px] md:text-lg lg:text-xl hind-siliguri-font'>
                Organic fertilizers improve soil health and ensure sustainable farming. Learn how natural alternatives can replace chemical fertilizers and increase soil fertility for better harvests.
</p>

            </div>

            </motion.div>  

            <motion.div
           className='flex flex-col md:flex-row lg:flex-row items-center gap-8'
           initial={{opacity: 0, x: -50}}
           whileInView={{opacity: 1, x: 0}}
           viewport={{once: true}}
           transition={{duration: 0.8}}
           >
            <div className='flex-1'>
                <img src={blogImg3} alt="Farmers’ Success Stories" className='w-full h-64 md:h-72 lg:h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'/>

            </div>
            <div className='flex-1 space-y-4 mb-6 md:mb-0 lg:mb-0 text-center md:text-left lg:text-left'>
                <div className='flex items-center gap-2 justify-center md:justify-start lg:justify-start'>
                    <FaTractor className='text-green-600 w-6 h-6'/>
                    <span className='text-gray-500 text-sm'>Sep 15, 2025</span>

                </div>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-green-700 poppins-font'>Farmers’ Success Stories</h3>
                <p className='text-gray-700 text-[16px] md:text-lg lg:text-xl hind-siliguri-font'>
                        Read real-life success stories of farmers who adopted modern techniques and community collaboration to boost productivity and market access, inspiring others to grow smarter.
</p>

            </div>

            </motion.div> 

             <motion.div
           className='flex flex-col md:flex-row-reverse lg:flex-row-reverse items-center gap-8'
           initial={{opacity: 0, x: 50}}
           whileInView={{opacity: 1, x: 0}}
           viewport={{once: true}}
           transition={{duration: 0.8}}
           >
            <div className='flex-1'>
                <img src={blogImg4} alt="Climate Resilient Crops" className='w-full h-64 md:h-72 lg:h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'/>

            </div>
            <div className='flex-1 space-y-4 mb-6 md:mb-0 lg:mb-0 text-center md:text-left lg:text-left'>
                <div className='flex items-center gap-2 justify-center md:justify-start lg:justify-start'>
                    <FaSun className='text-green-600 w-6 h-6'/>
                    <span className='text-gray-500 text-sm'>Aug 20, 2025</span>

                </div>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-green-700 poppins-font'>Climate Resilient Crops</h3>
                <p className='text-gray-700 text-[16px] md:text-lg lg:text-xl hind-siliguri-font'>
                            Discover tips for selecting and cultivating crops that withstand climate changes. Adaptation strategies can help farmers minimize losses and maximize their yield under unpredictable weather.

</p>

            </div>

            </motion.div>  

             <motion.div
           className='flex flex-col md:flex-row lg:flex-row items-center gap-8'
           initial={{opacity: 0, x: -50}}
           whileInView={{opacity: 1, x: 0}}
           viewport={{once: true}}
           transition={{duration: 0.8}}
           >
            <div className='flex-1'>
                <img src={blogImg5} alt="Market Price Insights" className='w-full h-64 md:h-72 lg:h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'/>

            </div>
            <div className='flex-1 space-y-4 mb-6 md:mb-0 lg:mb-0 text-center md:text-left lg:text-left'>
                <div className='flex items-center gap-2 justify-center md:justify-start lg:justify-start'>
                    <FaChartLine className='text-green-600 w-6 h-6'/>
                    <span className='text-gray-500 text-sm'>Jul 10, 2025</span>

                </div>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-green-700 poppins-font'>Market Price Insights</h3>
                <p className='text-gray-700 text-[16px] md:text-lg lg:text-xl hind-siliguri-font'>
                                   Stay informed about market trends and price fluctuations to sell your crops at the best possible rates. Smart planning helps farmers optimize income and reduce losses.

</p>

            </div>

            </motion.div>   

             <motion.div
           className='flex flex-col md:flex-row-reverse lg:flex-row-reverse items-center gap-8'
           initial={{opacity: 0, x: 50}}
           whileInView={{opacity: 1, x: 0}}
           viewport={{once: true}}
           transition={{duration: 0.8}}
           >
            <div className='flex-1'>
                <img src={blogImg6} alt="Pest Management Tips" className='w-full h-64 md:h-72 lg:h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'/>

            </div>
            <div className='flex-1 space-y-4 mb-6 md:mb-0 lg:mb-0 text-center md:text-left lg:text-left'>
                <div className='flex items-center gap-2 justify-center md:justify-start lg:justify-start'>
                    <FaLeaf className='text-green-600 w-6 h-6'/>
                    <span className='text-gray-500 text-sm'>Jun 05, 2025</span>

                </div>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-green-700 poppins-font'>Pest Management Tips</h3>
                <p className='text-gray-700 text-[16px] md:text-lg lg:text-xl hind-siliguri-font'>
                                 Protect your crops with effective pest management practices. Learn eco-friendly and modern methods to prevent infestations and ensure healthy growth throughout the season.


</p>

            </div>

            </motion.div>       
                   
                     
                    
                   



            
        </div>
    );
};

export default Blogs;