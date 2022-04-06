import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react'
import { searchGiphys } from '../api/giphy'
import './search.css'

export function Search({ setGifs }) {
  const [search, setSearch] = useState('')
  
  // Si hay un cambio en el input del form, pone ese valor en search
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  // Maneja el submit. Si search no esta blanco hace una consulta de gifs
  // con el valor que se encuentra en search y actualiza la lista de gifs 
  // de la app 
  const handleSubmit = async (e) => {
    const isBlank = e.target.inputSearch.value 
    e.preventDefault() 
    
    if (isBlank !== "") {
      const gifs = await searchGiphys(search)
      console.log("");
      console.log(`la consulta es: ${search}`);
      setGifs(gifs.data)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='Search'>
      <button type="submit" className='Search__submit'>
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