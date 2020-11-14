import React from 'react';
import searchstyles from "./searchbar.module.css"

const SearchBar = () => {
    return (
        <div className={searchstyles.searchbarwrap}>
            <input type="text" placeholder="Search...." />
        </div>
    );
}
 
 
export default SearchBar;