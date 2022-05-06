import { Home } from '@routes/home'
import { SearchDone } from '@routes/search'
import { GiphyContextProvider } from '../context/GiphyContext'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './app.css'

function App() {
  return (
    <GiphyContextProvider>
      <div className="App"> 
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/search' element={<SearchDone />}/>
            <Route path='*' element={<Navigate replace to="/"/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </GiphyContextProvider>
  )
}

export default App
