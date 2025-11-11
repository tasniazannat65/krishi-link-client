import React from 'react';
import HeroBanner from '../Components/HeroBanner';
import { Link, useLoaderData } from 'react-router';
import CropsCard from '../Components/CropsCard';
import Container from '../Container/Container';
import { FaArrowCircleRight } from 'react-icons/fa';
import HowItWorks from '../Components/HowItWorks';
import Blogs from '../Components/Blogs';

const Home = () => {
    const crops = useLoaderData();
    return (
        <div>
            <section>
                <HeroBanner/>
                
            </section>
           <Container>
             <section>
                <div className='text-center pt-14'>
                     <h2 className='font-bold text-2xl md:text-3xl  lg:text-4xl text-[#1B5E20]'>🌻 Latest  <span className='text-[#F9A825]'>Crops </span></h2>
            <p className=' font-medium text-lg  md:text-xl lg:text-xl text-gray-600 hind-siliguri-font max-w-3xl mx-auto mt-5'>Stay updated with the newest crops added to our collection. Check out what’s trending in the fields right now.</p>
                </div>
  
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 md:py-10 lg:py-12'>
                           {
                               crops.map(crop=> <CropsCard key={crop._id} crop={crop}/>)
                           }
                          </div>

                         <Link to='/all-crops' className='flex justify-center mb-8 '>
                             <button className='relative inline-flex items-center justify-center p-[5px] overflow-hidden font-semibold text-white poppins-font cursor-pointer transition-all duration-300 bg-gradient-to-r from-green-500 via-lime-500  to-green-700 rounded-lg active:scale-90 hover:shadow-lg shadow-xl shadow-green-300/40'>
                           
                            <span className='w-full h-full bg-green-900 transition-all duration-300 hover:bg-transparent px-10 py-3 rounded-md flex items-center gap-1'>View All
                                <FaArrowCircleRight size={20}/>
                            </span>
                          </button>
                         </Link>

                         


                        

                     
            </section>
            <section>
                <HowItWorks/>
            </section>
            <section>
                <Blogs/>
            </section>
           </Container>
        </div>
    );
};

export default Home;