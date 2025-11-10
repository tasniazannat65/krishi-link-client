import React from 'react';
import { FaCanadianMapleLeaf} from 'react-icons/fa';

const LoadingSpinner = () => {
    return (

        <div className='relative flex justify-center items-center min-h-screen'>
            <div className='absolute w-22 h-22  border-4 border-green-600 border-t-green-900 rounded-full animate-spin'></div>
            <FaCanadianMapleLeaf className='absolute w-10 h-10 text-green-700 animate-[spin_2s_linear_infinite] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'/>
            <svg className='absolute w-20 h-20 ' viewBox='0 0 200 200'>
                <defs>
                    <path id='circlePath' d='M100, 100 m-75, 0 a75, 75 0 1, 1 150,0 a75, 75 0 1,1 -150,0'>

                    </path>
                </defs>
                <text className='fill-yellow-600 font-bold text-[19px]'>
                   <textPath href='#circlePath' startOffset='50%' textAnchor='middle'>
                     FasalBridge * FasalBridge * FasalBridge * FasalBridge * 

                   </textPath>
                </text>

            </svg>

        </div>
   
    );
};

export default LoadingSpinner;