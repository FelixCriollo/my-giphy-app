import { useState, createContext } from "react"
import { fetchGifs } from '../api/gifs'

export const GiphyContext = createContext()

export function GiphyContextProvider({children}) {
  const [ gifs, setGifs ] = useState([])
  const [ currentSearch, setCurrentSearch ] = useState("")
  const [ limit, setLimit ] = useState(30)
  const [ loading, setLoading ] = useState(true)

  console.log(loading);
  const actulizeData = async (search, number = 20) => {
    const data = await fetchGifs(search, number)
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
      limit,
      setLimit,
      loading, 
      setLoading,
      actulizeData
    }}>
      {children}
    </GiphyContext.Provider>
  )
}
