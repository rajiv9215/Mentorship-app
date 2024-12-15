import React from 'react';
import contact from '../Asset/img/contact.png';


const ContactPage = () => {


  return (
    <div className='bg-blue-600 w-[80vw] m-auto -rotate-2 z-20'>
    <div className=" bg-yellow-400  rotate-2 z-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 p-4">Get in Touch</h1>
      <div className="flex flex-wrap justify-center mb-4">
      <div className="w-full md:w-1/2 xl:w-3/6 px-4">
          <img src={contact} alt="Contact Image" className="w-full  rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 xl:w-3/6 p-4 xl:mt-8 ">
          <form className="flex flex-col">
            <label className="text-lg text-gray-600 mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" className="w-full p-2 mb-4 border border-gray-300 rounded-lg" />
            <label className="text-lg text-gray-600 mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full p-2 mb-4 border border-gray-300 rounded-lg" />
            <label className="text-lg text-gray-600 mb-2" htmlFor="message">Message</label>
            <textarea id="message" className="w-full p-2 mb-4 border border-gray-300 rounded-lg" />
            <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default ContactPage;