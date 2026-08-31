import React from 'react'
import { useState,useEffect } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      alert(`Searching API for: "${searchTerm}"`);
    }
  }, [searchTerm]); 

  return (
    <div >
      <h2>4. Search</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>Searching for: {searchTerm}</p>
    </div>
  );
}


export default Search
