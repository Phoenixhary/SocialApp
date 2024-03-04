import { Avatar } from '@mui/material';
import React from 'react'

const WhoToFollow = ({avatar, displayName, description}) => {
  return (
    <div className='px-3 '>
        <div className=''>
            <div className='flex p-2 justify-evenly w-[290px] items-center'>
                <Avatar src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png' alt='' />
                <div className='mx-4'>
                    <h1 className='font-bold text-gray-800'> Phoenixhary </h1>
                    <p className='text-gray-500 whitespace-nowrap font-sans'> web 3.0 developer </p>
                </div>
                <div className='border-[1px] rounded-xl border-gray-300 p-1 whitespace-nowrap text-gray-800 font-medium text-[14px] px-4'>+  follow</div>
            </div>
        </div>
    </div>
  )
};

export default WhoToFollow;