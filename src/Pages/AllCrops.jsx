import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import CropsCard from '../Components/CropsCard';
import Container from '../Container/Container';
import { FaArrowLeft } from 'react-icons/fa';
import NoSearchFound from '../Components/NoSearchFound';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const AllCrops = () => {
    const cropsData = useLoaderData();
    const [crops, setCrops] = useState(cropsData);
    const [isSearch, setIsSearch] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleCropsSearch = (e)=>{
        e.preventDefault();
        const search_text = e.target.search?.value;
        if(!search_text){
          return;
        }
        setLoading(true);
        setIsSearch(true);

        fetch(`http://localhost:5000/search?search=${search_text}`)
        .then(res=>res.json())
        .then(data=>{
            setCrops(data);
            setLoading(false);
            e.target.reset();
        })
        
    }

    const reloadCrops = ()=>{
      setLoading(true);
     setIsSearch(false);
     setTimeout(()=>{
       setCrops(cropsData);
       setLoading(false);
     }, 1000)
    }
    
    
    
    return (
        <div>
         <Container>
       <div className='flex items-center justify-center flex-col text-center py-10'>
             <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl   text-[#1B5E20] poppins-font'>🌿 Explore All <span className='text-[#F9A825]'>Available Crops</span></h2>
            <p className=' font-semibold text-lg  md:text-xl lg:text-xl text-gray-400 hind-siliguri-font mt-5 mb-7'>Find fresh, high-quality crops directly from trusted farmers across the country. Browse, compare prices, and connect instantly through FasalBridge.</p>

             
       <form onSubmit={handleCropsSearch}>
        <div
  class="relative w-[350px] md:w-[400px] lg:w-[480px] bg-gray-100 rounded-2xl shadow-md p-1.5 hover:shadow-lg"
>
  <div
    class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none"
  >
    <svg
      class="h-5 w-5 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </div>
  <input
    type="search"
    name='search'
    class="w-full pl-8 pr-24 py-3 text-base text-gray-700 bg-transparent rounded-lg focus:outline-none"
    placeholder="Search Crops..."
  />
  <button
    class="absolute right-1 top-1 bottom-1 px-6 bg-[#2E7D32] text-white font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2E7D32]"
  >
    Search
  </button>
</div>
       </form>
       </div>
              <span className='flex gap-1 items-center text-green-700 hover:text-[#F9A825] justify-center md:justify-start lg:justify-start'>
                <FaArrowLeft size={20} />
                 <span className=' text-xl font-bold poppins-font'>
                    <Link to='/'>
                
                Back to Home
                </Link>
                    
                   </span>
                
                
                </span>


                {
                  loading ? (<LoadingSpinner/>) :  crops.length > 0 ? (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 md:py-10 lg:py-14'>
            {
               crops.map(crop=> <CropsCard key={crop._id} crop={crop}/>) 
            }
           </div>) : isSearch && <NoSearchFound reloadCrops={reloadCrops}/> 

                }


           
          
           
           

           
         </Container>
        </div>
    );
};

export default AllCrops;