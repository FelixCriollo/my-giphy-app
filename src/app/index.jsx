import Search from '../components/search'
import TrendingGifs from '../components/trendingGifs'
import { Header } from '../components/header'
import { SearchedGifs } from '../components/searchedGifs'
import { GiphyContextProvider } from '../context/GiphyContext'
import './app.css'

function App() {
  return (
    <GiphyContextProvider>
      <div className="App">
        <Header>
          <Search />
        </Header>

        <TrendingGifs />
        
        <SearchedGifs />
      </div>
    </GiphyContextProvider>
  )
}

export default App
