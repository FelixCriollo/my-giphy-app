import { useState, useEffect } from 'react'
import { Search } from '../search'
import { searchGiphys } from '../api/giphy'
import './app.css'

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    searchGiphys('cat').then(res => {
      setGifs(res.data)
    })
  }, [])
  
  console.log(gifs)
  
  return (
    <div className="App">
      <header className="App-header">
        <Search />
      </header>
    </div>
  )
}

export default App
