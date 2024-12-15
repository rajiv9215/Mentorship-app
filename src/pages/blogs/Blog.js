import React from 'react'
import HeroBlog from './components/HeroBlog'
import BlogPost from './components/BlogPost'
import ScrollableButtonGroup from './components/ScrollableBtn'
import { FaRegSave } from "react-icons/fa";
import SearchBar from '../../components/SearchBar';

const Blog = () => {
  return (
    <div className='flex'>
      {/* <div className='w-[16vw] md:w-[6vw] bg-yellow-200 rounded-sm'>
        <FaRegSave className='text-4xl ml-6 mt-6'/>
      </div> */}
      
      <div className='w-full'> { /*md:w-[94vw] w-[84vw]*/}
      <SearchBar/>
        <ScrollableButtonGroup/>
      {/* <HeroBlog/> */}
      <div className='flex md:p-6 md:gap-16 gap-8 justify-center flex-wrap'>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      </div>
      </div>
    </div>
  )
}

export default Blog
