import React, {useState} from "react"

import SearchIcon from "../../assets/Home/SearchIcon.svg"


const SearchInput = () => {
  const [query, setQuery] = useState('');

  // const handleSearch = () => {
  //   alert(`검색어: ${query}`);
  // };

  return (
    <div className="relative flex items-center justify-center w-full max-w-md h-[42px] p-2">
      <img 
        className="absolute left-3 w-5 h-5 text-gray-400"
        src={SearchIcon} 
        alt='검색 아이콘' 
      />
      <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="검색"
      />
    </div>
  );
};

export default SearchInput