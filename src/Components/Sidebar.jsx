import React from 'react'
import SidebarOption from './SidebarOption';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import LogoutIcon from '@mui/icons-material/Logout';
// import { Link } from '@mui/material';
 import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='min-w-[250px] hidden md:flex md:flex-col md:flex-[0.2] justify-between bg-[#ECF4F5] h-screen max-w-[] border-2 p-2'>
      <div className='p-[65px]'>
      <Link to="/Home" className='mb-4'> <SidebarOption active Icon={RssFeedIcon} text="Feed" /> </Link>
        <div className='mt-2 hover:w-[162px] w-[162px]'> <Link to="/CreateSpace" > <SidebarOption  Icon={DynamicFeedIcon} text="Create space" /> </Link> </div>
     </div>

        <div className='p-20'>
          <div className='hover:w-[120px]'> <SidebarOption Icon={LogoutIcon}  text="Logout" /></div>
        </div>
        
    </div>
  )
};

export default Sidebar;