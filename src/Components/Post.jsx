import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
const Post = ({
    displayName, userName, verified, text, image
}) => {
  return (
         /* Post container */
 <div className='p-3 border-b-[1px] flex items-center'>
    <div className=''>
     <div className='flex justify-around items-center'>
         <div className='max-w-[290px]'>
            <h1 className=''> <span className='font-bold'> {displayName} {""} </span>
                <span className='text-[#439398] '> { verified && <VerifiedIcon /> } {userName} </span>
                <div className='text-gray-700'> {text} </div>
           </h1>
         </div>

           <img className='w-1/3 rounded-xl' src={image} alt='' />
        </div>
           { /* Post container */ }
        <div className='flex justify-between p-3'>
            <div className='ml-12'> 
             <ThumbUpOffAltIcon fontSize='small' className='mx-4 text-gray-500' />
             <ChatBubbleOutlineIcon fontSize='small' className='text-gray-500' />
           </div>
            <div className='mr-14'> 
            <TurnedInNotIcon fontSize='small' className='mx-4 text-gray-500' />
            <CardGiftcardIcon fontSize='small' className='text-gray-500' />
           </div>
        </div>
     </div>
</div>
  )
};

export default Post;