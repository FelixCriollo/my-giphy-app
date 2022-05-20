import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Home } from '@routes/home'
import { Login } from '@routes/login'
import { SearchDone } from '@routes/search'
import { Detail } from '@routes/detail'
import { GiphyContextProvider } from '../context/GiphyContext'
import Header from '@containers/header'
import Search from '@elements/search'
import './app.css'

function App() {
  return (
    <GiphyContextProvider>
      <div className="App"> 
        <BrowserRouter>
          <Header>
            <Search />
          </Header>

          <main>
            <Routes>
              <Route index element={<Home />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/search/:searchName' element={<SearchDone />}/>
              <Route path='/gifs/:gifId' element={<Detail />}/>
              <Route path='*' element={<Navigate replace to="/"/>}/>
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </GiphyContextProvider>
  )
}

export default App
