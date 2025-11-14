import React from 'react';

const experts = [
  {
    id: 1,
    name: 'Dr. Riyad Ahmed',
    field: 'Crop Scientist',
    img: 'https://i.ibb.co.com/HLrF8Xht/ex2-1.webp',
    desc: 'Specializes in high-yield crop techniques.'
  },
  {
    id: 2,
    name: 'Dr. Sonia Rahman',
    field: 'Soil Expert',
    img: 'https://i.ibb.co.com/FkFhs7d2/ex6-1.jpg',
    desc: 'Helps farmers improve soil fertility naturally.'
  },
  {
    id: 3,
    name: 'Dr. Jahed Hossain',
    field: 'Agri Consultant',
    img: 'https://i.ibb.co.com/Z6rytN97/ex3.webp',
    desc: 'Provides expert advice on market-ready crops.'
  },
  {
    id: 4,
    name: 'Raisa Akter',
    field: 'Irrigation Specialist',
    img: 'https://i.ibb.co.com/mrn0dPR4/ex5-1.jpg',
    desc: 'Optimizes water usage for better yield.'
  },
  {
    id: 5,
    name: 'Dr. Haider Ali',
    field: 'Organic Farming Expert',
    img: 'https://i.ibb.co.com/PZq47C0H/ex1-1.jpg',
    desc: 'Teaches sustainable and organic farming.'
  },
  {
    id: 6,
    name: 'Riana Haque',
    field: 'Horticulture Specialist',
    img: 'https://i.ibb.co.com/5Wcwb2sv/ex4-1.jpg',
    desc: 'Guides farmers on fruit and vegetable production.'
  },
];


const FarmerExpert = () => {
  return (
    <div className='py-16  poppins-font'>
        <div className='text-center pt-14'>
                     <h2 className='font-bold text-2xl md:text-3xl  lg:text-4xl text-[#1B5E20]'> Our Agriculture  <span className='text-[#F9A825]'>Experts </span></h2>
            <p className=' font-medium text-lg  md:text-xl lg:text-xl text-gray-600 hind-siliguri-font  mt-5'>Helping farmers grow smarter and sustainable crops.</p>
                </div>
                <div className='pt-7'>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
                    {
                      experts.map((expert)=>(
                        <div key={expert.id} className='w-full w-64 bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300'>
                          <img src={expert.img} alt={expert.name}  className='w-32 h-32 rounded-full object-cover mx-auto'/>
                          <h3 className='text-xl font-bold text-center mt-4 text-green-700'>{expert.name}</h3>
                          <p className='text-green-500 font-semibold text-[16px] text-center mt-1'>{expert.field}</p>
                          <p className='mt-2 text-gray-600 text-center text-sm'>{expert.desc}</p>


                        </div>
                      ))
                    }

                  </div>

                </div>

    </div>


    
  );
};

export default FarmerExpert;
