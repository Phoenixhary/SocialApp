import React from 'react'
import SearchBar from './SearchBar';
import NotificationBar from './NotificationBar';
import Sidebar from './Sidebar';

const CreateSpace = () => {
  return (
    <div className=''>
        <div className='md:flex '>
            <div> <Sidebar /> </div>

            <div>
                 <div className=' justify-center flex  items-center md:min-w-[1000px] max-w-[600px] border-b-[1px]'>
                   <div className=''> <SearchBar /> </div>
                    <NotificationBar />
                 </div>

                 <div className=' flex justify-center items-center h-fit h-[80vh]'>
                     <div className='flex flex-col justify-center items-center bg-[#ECF4F5] md:p-[60px] p-10 md:my-4 rounded-lg m-2 w-[70%]'>
                           <div className='p-1'>
                                <h1 className='font-bold text-gray-700 text-center md:text-left text-gray-700'> Create Space</h1>
                                <p className='font-sans text-gray-600 text-center md:text-left'> Share your interests, curate content, host, discussion and more</p>
                           </div> 
                           <form className='p-1 mt-2'>
                                <h1 className='font-bold text-gray-700 text-center md:text-left '> Name</h1>
                                <p className='font-sans mb-[10px] text-gray-600 text-center md:text-left'> This can be changed in Space settings </p>
                                <input className='p-2 border-[1px] outline-none md:w-[80%] rounded-xl border-[#439398] bg-[#ECF4F5]' type='text' />
                           </form> 
                           <form className='p-1 mt-2'>
                                <h1 className='font-bold text-gray-700 text-center md:text-left'> Brief Description</h1>
                                <p className='font-sans mb-8 text-gray-600 text-center md:text-left'> Include a few keywords to show people what to expect when they join </p>
                                <input className='flex  p-2 h-[7vw] border-[1px] outline-none md:w-[80%] rounded-xl border-[#439398] bg-[#ECF4F5]' type='text' />
                           </form> 
                                <button className='m-3 p-2 rounded-xl bg-[#439398] text-white w-[75%] font-sans '> Create Space</button>
                     </div>
                </div>
            </div>

        </div>
    </div>
  )
};

export default CreateSpace;