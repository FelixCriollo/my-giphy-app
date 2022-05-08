import useGiphy from '@hooks/useGiphy'
import { DisplayGifs } from '@containers/displayGifs';
import './search.css'

export function SearchDone() {
  const { gifs, currentSearch, loading } = useGiphy()
  return (
    <>
      <p style={{textAlign: "center"}}>Busqueda maistra</p>
      
      <section className="SearchedGifs">
        <div className="container">
          <DisplayGifs title={currentSearch} gifs={gifs} loading={loading }/>
        </div>
      </section>
    </>
  )
}