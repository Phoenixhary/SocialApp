import React from 'react'
import Sidebar from './Sidebar';
import Widget from './Widget';
import Feed from './Feed'

const OverallPage = () => {
  return (
    <div className='md:flex h-screen max-w-[1300px] p-[5px]'>
            <Sidebar /> 
             <Feed />
              <Widget />
    </div>
  )
};

export default OverallPage;