import React from 'react'

const SidebarOption = ({active, text, Icon}) => {
  return (
    <div className='group font-medium font-sans cursor-pointer'>
      <div className={active ? 'bg-[#439398] flex items-center  rounded-xl text-white w-[161px]' : 'flex items-center hover:bg-[#439398] hover:transition-all hover:px-[15px] rounded-xl'}>
        <div className={active ? 'text-white' : 'text-[#439398] group-hover:text-white'}> <Icon /> </div>
        <h1 className='group-hover:text-white p-2 '> {text} </h1>
      </div>
    </div>
  )
};

export default SidebarOption;