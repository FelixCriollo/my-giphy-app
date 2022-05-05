import { useState, createContext } from "react"
import { fetchGifs } from '../api/gifs'

export const GiphyContext = createContext()

export function GiphyContextProvider({children}) {
  const [ gifs, setGifs ] = useState([])
  const [ currentSearch, setCurrentSearch ] = useState("")
  const [ loading, setLoading ] = useState(true)

  const actulizeData = async (search) => {
    const data = await fetchGifs(search, 50)
    setGifs(data.data)
    setLoading(false)
    console.log(loading);
  }

  return (
    <GiphyContext.Provider value={{
      gifs,
      setGifs,
      currentSearch,
      setCurrentSearch,
      loading, 
      setLoading,
      actulizeData
    }}>
      {children}
    </GiphyContext.Provider>
  )
}
