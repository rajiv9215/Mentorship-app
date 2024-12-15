import React from 'react';

const CardPricing = ({ title, price, features }) => {
  return (
    <div className='bg-blue-500 -rotate-3 min-h-fit rounded hover:scale-105 transition-all '>
    <div className="bg-yellow-300 rotate-3 rounded shadow-md p-8 w-80 h-full ">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-lg text-gray-600 mb-4">{price}</p>
      <ul className="list-none mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <svg
              className="w-4 h-4 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Sign Up
      </button>
    </div>
    </div>
  );
};
export default CardPricing;