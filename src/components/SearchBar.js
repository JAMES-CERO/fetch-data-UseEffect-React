import React, { useState } from "react";

const SearchBar = (props) => {

    let [searchItem, setSearchItem] = useState('')

    return(
        <form>
            <input type='text' placeholder="Enter your Search" />
            <input type='submit' />
        </form>
    )
}

export default SearchBar