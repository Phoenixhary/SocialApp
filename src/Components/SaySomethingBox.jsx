import { Avatar, Button } from '@mui/material';
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TopSelectOption from './TopSelectOption';

const SaySomethingBox = () => {
  return (
    <div className=''>
      <div className='flex justify-around items-center mx-auto p-2 font-medium font-sans text-gray-600'>
         <div> <TopSelectOption active text="For you" /> </div>
         <div> <TopSelectOption text="Following" /> </div>
         <div className='hidden md:block'> <TopSelectOption text="Artificial Intelligence" /> </div>
         <div className='hidden md:block'> <TopSelectOption text="Crypto" /> </div>
         <div className='hidden md:block'> <TopSelectOption text="Software Developers" /> </div>
         <div> <TopSelectOption text="Blockchain" /> </div>
          <div> <NavigateNextIcon /> </div>
      </div>
        <form>
            <div className='flex p-4 items-center '>
                <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                <textarea className='overflow-hidden outline-none px-[10px] py-2  rounded-lg h-32 border-2 mx-6 md:min-w-[390px] min-w-[290px] ' placeholder='Say something' type='text' />

                <div className='mb-2 hidden md:block'>
                  <h1 className='font-medium text-gray-700 font-sans m-4 whitespace-nowrap'>#Trending hashtags</h1>
                 <div className='grid grid-cols-2'>
                  <span className='bg-[#ECF4F5] p-2 rounded-xl m-2 text-gray-700 font-sans'>#tech </span>
                   <span className='bg-[#ECF4F5] p-2 rounded-xl m-2 text-gray-700 font-sans'> #elon </span>
                 </div>
                </div>
            </div>
           <div className=' flex justify-center pb-2 md:mr-[120px] ml-[80px] md:ml-[2px] '>
             <button className='md:w-[385px] w-[270px]  rounded-md opacity-80 p-1 hover:opacity-90 bg-[#439398] text-white font-medium'  > post </button>
              </div>
        </form>
        
    </div>
  
  )
};

export default SaySomethingBox;