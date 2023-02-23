import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const SearchBar = () => {

    const [term, handleSearch] = useContext(SearchContext)


    return(
        <form >
            <input ref={term} type='text' placeholder="Enter your Search" />
            <button onClick={(e) => handleSearch(e, term.current.value)} > Submit</button>
        </form>
    )
}

export default SearchBar