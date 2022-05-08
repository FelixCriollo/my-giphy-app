import { useState, useCallback, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi'
import useGiphy from '@hooks/useGiphy'
import './search.css'

function Search() {
  const { 
    setCurrentSearch, 
    actulizeData, 
    setLoading
  } = useGiphy()

  const [ search, setSearch ] = useState("");
  const navigate = useNavigate();

  
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value)
  }
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault() 
    setLoading(true)
    const lower = search.toLocaleLowerCase()
    
    if (lower !== "") {
      setCurrentSearch(lower)
      actulizeData(lower)
      navigate(`/search/${lower}`) 
    }
  }, [search])

  return (
    <form onSubmit={handleSubmit} className='Search'>
      <button type="submit" className='Search__submit' 
        aria-label='search button' tabIndex={0}
      >
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