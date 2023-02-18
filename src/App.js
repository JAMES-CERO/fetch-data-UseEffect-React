import { useEffect, useState } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';

function App() {

  let [search, setSearch] = useState('')
  let [data, setData] = useState ([])
  let [message, setMessage] = useState('Search for Music')

  useEffect(() => {
    const fetchData = async ()=> {
      document.title = `${search} music`
      const response = await fetch('https://itunes.apple.com/search?term=the%20grateful%20dead')
      const resData = await response.json()
      if(resData.results.length > 0){
        setData(resData.results)
      } else {
        setMessage('Not found')
      }
    }
    fetchData()
  }, {search})
  return (
    <div className="App">
      <SearchBar/>
      {message}
      <Gallery/>
    
    </div>
  );
}

export default App;
