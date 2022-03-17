import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search IMDB..."
        className="search-bar-input"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => onSubmit(searchTerm)} className="search-bar-btn">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
