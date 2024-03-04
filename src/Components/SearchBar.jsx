import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div>          
        <form>
            <div className='p-4 flex justify-center md:justify-start'>
             <span className='text-[#439398] absolute left-[22vw] md:left-[22vw] top-[27px] mx-2'> <SearchIcon /> </span> 
              <input className='md:placeholder:opacity-100
              bg-[#ECF4F5] px-[40px] py-[6px] rounded-2xl md:w-[27vw] w-[100px] outline-none focus:border-[1px] placeholder:text-[#439398] placeholder:font-medium placeholder:opacity-0'
               placeholder='search..'
                type='text' /> 
            </div>
        </form>
    </div>
  )
};

export default SearchBar;