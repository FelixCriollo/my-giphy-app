import { BiSearchAlt2 } from 'react-icons/bi'
import { useState, useCallback, memo } from 'react'
import { fetchGifs } from '../../api/gifs'
import './search.css'
import useGiphy from '../../hooks/useGiphy'

function Search() {
  const { setGifs, setCurrentSearch } = useGiphy();
  
  const [search, setSearch] = useState("")
  
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value)
  }
 
  const handleSubmit = useCallback(async (e) => {
    console.log("algo");
    const lower = search.toLocaleLowerCase()
    e.preventDefault() 
    
    if (lower !== "") {
      const gifs = await fetchGifs(lower)
      setGifs(gifs.data)
      setCurrentSearch(lower)
    }
  }, [search])

  return (
    <form onSubmit={handleSubmit} className='Search'>
      <button type="submit" className='Search__submit' aria-label='search button' tabIndex={0}>
        <BiSearchAlt2 />
      </button>
          
      <input 
        type="text" 
        name='inputSearch'
        placeholder="Search GIPHY" 
        className='Search__input'
        onChange={handleChange}
      />
    </form>
  )
}

export default memo(Search)