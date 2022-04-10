import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react'
import { fetchGifs } from '../../api/gifs'
import './search.css'

export function Search({ setGifs, setCurrentSearch }) {
  const [search, setSearch] = useState('')
  
  // Si hay un cambio en el input del form, pone ese valor en search
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value)
  }

  // Maneja el submit. Si search no esta blanco hace una consulta de gifs
  // con el valor que se encuentra en search y actualiza la lista de gifs 
  // de la app 
  const handleSubmit = async (e) => {
    const isBlank = e.target.inputSearch.value 
    e.preventDefault() 
    
    if (isBlank !== "") {
      const gifs = await fetchGifs(search)
      setGifs(gifs.data)
      setCurrentSearch(search)
    }
  }

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