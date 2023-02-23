import { useState, useRef } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import { SearchContext } from './context/SearchContext';
function App() {

  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for Music')
  let searchInput = useRef('')

  const API_URL = 'https://itunes.apple.com/search?term='

  const handleSearch = (e, term) => {
    e.preventDefault()
    const fetchData = async () => {
      document.title = `${term} music`
      const response = await fetch(API_URL + term)
      const resData = await response.json()
      if (resData.results.length > 0) {
        setData(resData.results)
      } else {
        setMessage('Not found')
      }
    }
    fetchData()
    setSearch(term)
  }
  return (
    <div className="App">
      <SearchContext.Provider value={{
        term: searchInput,
        handleSearch: handleSearch
      }} >
        <SearchBar/>
      </SearchContext.Provider>
      <SearchBar handleSearch={handleSearch} />
      {message}
      <Gallery data={data}/>

    </div>
  );
}

export default App;
