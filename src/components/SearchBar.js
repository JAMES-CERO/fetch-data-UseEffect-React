// import React, { useState } from "react";

// const SearchBar = (props) => {

//     let [searchTerm, setSearchTerm] = useState('')

//     return(
//         <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
//             <input type='text' placeholder="Enter your Search" 
//             onChange={(e) => setSearchTerm(e.target.value)}/>
//             <input type='submit' />
//         </form>
//     )
// }

// export default SearchBar


import { useState } from 'react'

function SearchBar(props) {
    let [searchTerm, setSearchTerm] = useState('')
    
  return (
    <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
        <input type="text" placeholder="search here"
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input type="submit"/>
    </form>
  )
}

export default SearchBar
