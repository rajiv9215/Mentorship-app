import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    // Call API to search for results
    console.log('Searching for:', searchTerm);
    // Update search results state
    setSearchResults([
      { title: 'Result 1', description: 'This is the first result' },
      { title: 'Result 2', description: 'This is the second result' },
      { title: 'Result 3', description: 'This is the third result' },
    ]);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="max-w- mx-auto  md:p-6 mt-6 ">
      <form onSubmit={handleSearch} className="flex justify-center ">
        <input
          type="search"
          value={searchTerm}
          onChange={handleInputChange}
          className="p-2 w-[45vw]  border border-gray-300 rounded-xl px-4 mx-4 outline-none "
          placeholder="Search..."
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white  px-4 rounded-lg"
        >
          Search
        </button>
      </form>
      {/* {searchResults.length > 0 && (
        <div className="search-results">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Search Results</h2>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index} className="mb-4">
                <h3 className="text-lg font-bold text-gray-900">{result.title}</h3>
                <p className="text-gray-600">{result.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default SearchBar;