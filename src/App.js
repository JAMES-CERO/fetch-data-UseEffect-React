// import {  useEffect, useState } from 'react';
// import './App.css';
// import Gallery from './components/Gallery';
// import SearchBar from './components/SearchBar';

// function App() {

//   let [searchTerm, setSearchTerm] = useState('')
//   let [data, setData] = useState(null)
//   let [message, setMessage] = useState('Search for Music')

//   const API_URL = 'https://itunes.apple.com/search?term='

//   useEffect(() => {
//     if (searchTerm) {
//       document.title = `${searchTerm} Music`
//       const fetchData = async () => {
//         const response = await fetch(API_URL + searchTerm)
//         const resData = await response.json()
//         if (resData.results.length > 0) {
//           setData(resData.results)
//         } else {
//           setMessage('Not found')
//         }
//       }
//       fetchData()
//     }
//   }, [searchTerm])

//   const handleSearch = (e, term) => {
//     e.preventDefault()
//     setSearchTerm(term)
//   }
//   return (

//     <div className="App">
//       <SearchBar handleSearch={handleSearch} />
//       {message}
//       <Gallery data={data} />
//     </div>
//   );
// }

// export default App;

import './App.css';
import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'

function App() {
  let [searchTerm, setSearchTerm] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for Music!')

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
    if (searchTerm) {
      document.title=`${searchTerm} Music`
      const fetchData = async () => {
        const response = await fetch(API_URL + searchTerm)
        const resData = await response.json()
        if(resData.results.length > 0) {
          setData(resData.results)
        } else {
          setMessage('Not Found')
        }
      }
      fetchData()
  }
  }, [searchTerm])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearchTerm(term)
  }

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      <Gallery data={data} />
    </div>
  );
}

export default App;