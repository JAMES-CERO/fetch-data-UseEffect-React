import { Fragment, useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import AlbumView from './components/AlbumView';
import ArtistView from './components/ArtistView';

function App() {

  let [search, setSearch] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for Music')

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        document.title = `${search} music`
        const response = await fetch(API_URL + search)
        const resData = await response.json()
        if (resData.results.length > 0) {
          setData(resData.results)
        } else {
          setMessage('Not found')
        }
      }
      fetchData()
    }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }
  return (
    <div className="App">
      {message}
      <Router>
        <Routes>
          <Route path='/' element={
              <Fragment>
                  <SearchBar handleSearch={handleSearch} />
                  <Gallery data={data}/>
              </Fragment>
          } ></Route>
          <Route path='/album/:id' element={ <AlbumView/>}></Route>
          <Route path='/artist/:id' element={ <ArtistView /> } ></Route>
        </Routes>
      </Router>
      <SearchBar handleSearch={handleSearch} />
      <Gallery data={data}/>
      <AlbumView />
      <ArtistView />

    </div>
  );
}

export default App;
