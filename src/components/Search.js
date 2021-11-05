import React from 'react';
import searchIcon from '../assets/icon-search.svg';

// 
const Search = (props) => {
    return <div className="relative w-full drop-shadow-xl max-w-lg">
        <div className="absolute top-4 left-3"> 
            <img src={searchIcon} alt="" />
        </div> 
        <input value={props.value} onChange={props.onChange} type="text" className="h-16 bg-[#1E2A47] placeholder-white text-white font-spaceMono text-lg w-full pl-12 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder={props.placeholder} />
        <div className="absolute top-2 right-2"> 
            <button onClick={props.onClick} className="h-12 w-20 text-white rounded-lg bg-[#0079FF] hover:bg-[#60ABFF]">Search</button> 
        </div>
    </div>;
};

export default Search;
