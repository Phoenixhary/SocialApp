import React from 'react'
import NotificationBar from './NotificationBar'
import WhoToFollow from './WhoToFollow'
import Recommended from './Recommended'
import StaffPicks from './StaffPicks'

const Widget = () => {
  return (
    <div className='md:flex md:flex-col hidden flex-[0.25] max-w-[320px] overflow-y-auto scroll-smooth scrollbar-none scrollbar-webkit'>
        <NotificationBar />
      <div className='border-y-[1px] p-2 mx-4 w-[340px]'>
        <StaffPicks />
        <StaffPicks />
        <div className='font-sans text-[#439398] px-2 ml-10 py-2 font-medium ' > see full lists</div>
      </div>
      
        
      <div>
           <div className='text-[21px] text-gray-700 p-1 mx-2 font-sans font-medium'> Recommended Topics</div>
           <div className='grid grid-cols-3 p-2 '>
                <Recommended Rtext="Wallet" />
                <Recommended Rtext="Games" />
                <Recommended Rtext="web 3.0" />
                <Recommended Rtext="Games" />
                <Recommended Rtext="Games" />
                <Recommended Rtext="Bitcoin" />
                <Recommended Rtext="Games" />
                <Recommended Rtext="Games" />
           </div>
           <div className='font-sans text-[#439398] px-2 mb-4 mt-2 font-medium'> Show more topics..</div>
      </div>
             {/*Who to follow */}
        <h1 className='font-bold text-gray-700 px-4 py-1'> Who to follow</h1>
        <WhoToFollow />
        <WhoToFollow />
        <WhoToFollow />
        
    </div>
  )
}

export default Widget