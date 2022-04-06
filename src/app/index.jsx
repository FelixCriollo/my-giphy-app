import { useState } from 'react'
import { Search } from '../search'
import './app.css'

function App() {
  const [gifs, setGifs] = useState([])

  console.log("pinta gifs en app");
  console.log(gifs);
  console.log("termina de pintar gifs en app");

  return (
    <div className="App">
      <header className="App-header">
        <Search setGifs={setGifs}/>
      </header>
    </div>
  )
}

export default App
