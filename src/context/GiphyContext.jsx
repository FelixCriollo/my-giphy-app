import { useState, createContext } from "react"

export const GiphyContext = createContext()

export function GiphyContextProvider({children}) {
  const [gifs, setGifs] = useState([])
  const [currentSearch, setCurrentSearch] = useState("")

  console.log(gifs);

  return (
    <GiphyContext.Provider value={{
      gifs,
      setGifs,
      currentSearch,
      setCurrentSearch
    }}>
      {children}
    </GiphyContext.Provider>
  )
}
