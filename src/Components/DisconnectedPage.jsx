import React from 'react';
import bgImage from '../assests/bg-image1.png';
// import ConnectButton from './ConnectButton';

import RubleCoin from '../assests/RubleCoin.png';
import Chat from '../assests/Chat.png';
import { Link } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const DisconnectedPage = () => {
  return (
    <div className='h-screen'>
      <div className='p-2 flex justify-end'>
         {/* <ConnectButton /> */}
         <ConnectButton /> 
       </div>
    <div style={{
      width: '100%',
      height: '100vh',
      position: 'fixed',
      backgroundImage: `url(${bgImage})`
    }}
    className=''>

            <div className='flex justify-center items-center w-full h-full'>
              <div className='mb-36 p-1'>
                  <div className='md:text-[96px] text-[45px] font-semibold text-center'> Welcome to the chat</div>
                  <div className='text-center p-1 text-[22px] md:text-[18px]'> 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Dignissimos assumenda modi deserunt asperiores?
                  </div>
                   <Link to="/Home" className='text-center m-2 p-2 flex justify-center'> <ConnectButton /> </Link>
                   <div className='flex justify-end  md:right-[290px] md:top-[700px] lg:top-[330px] right-24 absolute'> <img className='md:w-[260px] w-[200px]' src={Chat} alt="" /> </div>
             </div>
             </div>
    </div>
  </div>
  )
};

export default DisconnectedPage;