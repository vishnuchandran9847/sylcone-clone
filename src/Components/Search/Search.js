import React from 'react'
import "./Search.css";
import { CiSearch } from "react-icons/ci";


function Search() {
  return (
    <div className="search-container">
    <input type="text" placeholder="Search anything..."  className="search-bar" />
    <span className='search-icon'><CiSearch /></span>
    
</div>
  )
}

export default Search
