import { useState } from 'react'
import { Header } from '../components/header'
import { Search } from '../components/search'
import { SearchedGifs } from '../components/searchedGifs'
import { GifContainer } from '../components/gif/gifList'
import { TrendingGifs } from '../components/trendingGifs'
import './app.css'

function App() {
  const [gifs, setGifs] = useState([])
  const [currentSearch, setCurrentSearch] = useState("")

  console.log("desde index");
  console.log(currentSearch);
  console.log(gifs);
  
  return (
    <div className="App">
      <Header>
        <Search setGifs={setGifs} setCurrentSearch={setCurrentSearch}/>
      </Header>

      <TrendingGifs />

      {
        gifs.length !== 0
          ? (
            <SearchedGifs search={currentSearch}>
              <GifContainer gifs={gifs}/>
            </SearchedGifs>
          )
          : null
      }
    </div>
  )
}

export default App
