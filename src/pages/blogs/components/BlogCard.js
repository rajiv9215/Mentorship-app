import React from 'react'

const BlogCard = ({ title, description, image, link }) => {
  return (
    <div className='bg-yellow-400 rounded-lg -rotate-2'>
    <div className="md:max-w-[25vw] max-w-[40vw] rotate-2 mx-auto bg-white rounded-lg shadow-lg hover:scale-105 transition-all">
      <img src={image} alt={title} className="w-full object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="md:text-2xl text-xl font-bold text-gray-900">{title}</h2>
        <p className="text-lg text-gray-600 h-16 md:h-full overflow-hidden">{description}</p>
        <a href={link} className="text-blue-600 hover:text-blue-800">Read More</a>
      </div>
    </div>
    </div>
  );
};

export default BlogCard
