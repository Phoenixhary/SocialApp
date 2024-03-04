import React from 'react'

const TopSelectOption = ({active, text, Icon}) => {
  return (
    <div>
         <span className={active ? "font-bold border-b-[1px] border-opacity-70 border-[#439398] text-[15px] text-gray-800" : " text-[15px]"}> {text} </span>
    </div>
  )
};

export default TopSelectOption;