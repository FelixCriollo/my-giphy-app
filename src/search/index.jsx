import { BiSearchAlt2 } from 'react-icons/bi'
import './search.css'

export function Search() {
  return (
    <form action="" className='Search'>
      <button type="submit" className='Search__submit'>
        <BiSearchAlt2 />
      </button>
          
      <input type="text" placeholder="Search GIPHY" className='Search__input'/>
    </form>
  )
}