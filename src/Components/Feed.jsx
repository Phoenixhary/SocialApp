import React, { useState } from 'react'
import ConnectButton from './ConnectButton';
import SearchBar from './SearchBar';
import SaySomethingBox from './SaySomethingBox';
import Post from './Post';
import RubleCoins from './RubleCoins';
import Sidebar from './Sidebar';
import MobileSidebar from './MobileSidebar';
import MenuIcon from '@mui/icons-material/Menu';

const Feed = () => {
    const [nav, setNav] = useState(true)

  return (
    <div id='feed' className='
     flex-[0.55] border-r-2 overflow-y-scroll scroll-smooth scrollbar-none scrollbar-webkit'>
    
          {/* Header */}
      <div> 

        <div className='flex items-center justify-center md:block'>      
       <div onClick={()=> setNav(!nav)} className='md:hidden'>  <MenuIcon fontSize='large' className='text-[#326E72]' /> </div>
         <SearchBar /> 
        <div className='md:hidden'> <RubleCoins /> </div>
      <div className=' md:hidden'>   <ConnectButton /> </div>
        </div>

          <div className='border-[1px] p-2 '>
            <SaySomethingBox />
          </div>
                      {/* Post */}
          <div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
      </div>
              {/* Overlay */}
      <div className={nav ? 'md:hidden bg-black/70 absolute w-full h-screen  top-0 right-[550px]  z-10' :
       'md:hidden bg-black/70 fixed w-full h-screen top-0 right-[0px] z-10 duration-500 transition-all'}>
            <div> <MobileSidebar /> </div>
        </div>
    </div>
  )
};

export default Feed;