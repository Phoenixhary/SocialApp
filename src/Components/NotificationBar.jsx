import React from 'react'
// import RubleCoin from '../assests/RubleCoin.png'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import RubleCoins from './RubleCoins';
import ConnectButton from './ConnectButton';

const NotificationBar = () => {
  return (
    <div>
        <div className='flex justify-evenly p-5 items-center'>
            <MailOutlineIcon className='text-gray-600 ' />
            <NotificationsNoneIcon className='text-gray-600 ' />
             <RubleCoins />
            <ConnectButton />

        </div>
    </div>
  )
};

export default NotificationBar;