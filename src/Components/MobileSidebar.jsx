import React from 'react';
import SidebarOption from './SidebarOption';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';

const MobileSidebar = () => {
  return (
    <div className='max-w-[280px] opacity-90 md:hidden  md:flex-col md:flex-[0.2] justify-between bg-[#ECF4F5] h-screen max-w-[] border-2 p-2'>
        <CloseIcon fontSize='large' /> 
      <div className='p-[60px]'>
         <div className='mb-4'> <SidebarOption active Icon={RssFeedIcon} text="Feed" /> </div>
         <div className='hover:w-[162px]' > <SidebarOption  Icon={DynamicFeedIcon} text="Create space" /> </div>
     </div>

        <div className='p-20'>
          <div className='hover:w-[140px]'> <SidebarOption Icon={LogoutIcon}  text="Logout" /></div>
        </div>
        
    </div>
  )
};

export default MobileSidebar;