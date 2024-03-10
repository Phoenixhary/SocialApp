'use client'
import {get, ref} from 'firebase/database';
import React, { useEffect, useState } from 'react';
import {database} from './firebaseConfig';
// import StartFirebase from './firebase';
import ConnectButton from './ConnectButton';
import SearchBar from './SearchBar';
import SaySomethingBox from './SaySomethingBox';
import Post from './Post';
import RubleCoins from './RubleCoins';
import Sidebar from './Sidebar';
import MobileSidebar from './MobileSidebar';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';




const Feed = () => {
    const [nav, setNav] = useState(true);
    const [users, setUsers] = useState([]);

    const HandleClick = () => {
      setNav(!nav);
  };

    useEffect(() => {
        const usersRef = ref(database, 'users');
        get(usersRef).then((snapshot) => {
          if (snapshot.exists()) {
            const usersArray = Object.entries(snapshot.val()).map(([id, data]) =>({
              id,
              ...data,
            }));
            setUsers(usersArray);
          } else {
            console.log("no data available");
          }
        }) .catch((error) => {
          console.error(error);
        });

    }, []);

  return (
    <div id='feed' className='
     flex-[0.55] border-r-2 overflow-y-scroll scroll-smooth scrollbar-none scrollbar-webkit'>
    
          {/* Header */}
      <div> 
                                                                                               {/* !nav ? <FaBars /> : <FaTimes /> */}
        <div className='flex items-center justify-center md:block'>      
       <div onClick={HandleClick} className='md:hidden'> { !nav ? <CloseIcon fontSize='large' className='text-[#326E72]' /> : <MenuIcon fontSize='large' className='text-[#326E72]' /> } </div>
         <SearchBar /> 
        <div className='md:hidden'> <RubleCoins /> </div>
      <div className=' md:hidden'>   <ConnectButton /> </div>
        </div>

          <div className='border-[1px] p-2 '>
            <SaySomethingBox />
          </div>
                      {/* Post */}
          <div>
            {users.map( user => (
              <Post 
                  displayName={user.displayName}
                  userName={user.userName}
                  verified={user.verified}
                  text={user.text}
                  image={user.image}
              />
            ) )}
            
          </div>
      </div>
              {/* Overlay */}
      <div className={nav ? 'md:hidden bg-black/70 absolute w-full h-screen  top-0 right-[550px]  z-10' :
       'md:hidden bg-black/70 fixed w-full h-screen top-[75px] right-[0px] z-10 duration-500 transition-all'}>
            <div> <MobileSidebar /> </div>
        </div>
    </div>
  )
};

export default Feed;