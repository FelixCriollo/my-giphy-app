import { SearchedGifs } from '@containers/searchedGifs'
import { Header } from '@containers/header'
import Search from '@elements/search'
import './search.css'

export function SearchDone() {
  return (
    <>
      <Header>  
        <Search />
      </Header>

      <p style={{textAlign: "center"}}>Busqueda maistra</p>
      <SearchedGifs />
    </>
  )
}