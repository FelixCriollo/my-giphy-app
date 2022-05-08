import { useState, createContext } from "react"
import { fetchGifs } from '../api/gifs'
import { useLocalStorage } from "@hooks/useLocalStorage"
import { useEffect } from "react"

export const GiphyContext = createContext()

export function GiphyContextProvider({children}) {
  // console.log("Item del local storage");
  // console.log(parsedItem);
  const { 
    item: lastGifs,
    saveItem: setLastGifs,
    loading: lastGifsLoading
  } = useLocalStorage("LSGIFS_1", [])

  const [ gifs, setGifs ] = useState([])
  const [ trending, setTrending ] = useState([])
  const [ currentSearch, setCurrentSearch ] = useState("")
  const [ loading, setLoading ] = useState(true)

  const actulizeData = async (search) => {
    const data = await fetchGifs(search, 50)
    setGifs(data.data)
    setLoading(false)
    console.log(loading);
  }

  useEffect(() => {
    const localStorageItem = localStorage.getItem("LSGIFS_1")
    let parsedItem = JSON.parse(localStorageItem)
    
    // Si ya hay data en el local storage
    if (parsedItem.length !== 0 && gifs.length > 0){
      setLastGifs({
        listGifs: gifs,
        current: currentSearch
      })
    } else if(parsedItem.length === 0) {
      // Si no hay data en el local storage
      setLastGifs({
        listGifs: gifs,
        current: currentSearch
      })
    }
  }, [gifs])


  return (
    <GiphyContext.Provider value={{
      gifs,
      setGifs,
      trending, 
      setTrending,
      currentSearch,
      setCurrentSearch,
      loading, 
      setLoading,
      lastGifs,
      lastGifsLoading,
      actulizeData
    }}>
      {children}
    </GiphyContext.Provider>
  )
}
