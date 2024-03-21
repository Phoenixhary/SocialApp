import React from 'react'
// import RubleCoin from '../assests/RubleCoin.png';
import { ConnectButton } from '@rainbow-me/rainbowkit';


const connectButton = () => {
  return (
    <div className='flex items-center '>
        
            <div className='font-medium px-3 py-2  bg-[#326E72] hover:opacity-90 text-white rounded-md max-w-[500px] '>
                <ConnectButton/>
                 </div>
       </div>
  )
};

export default connectButton;

