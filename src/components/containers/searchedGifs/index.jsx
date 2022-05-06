import { GifContainer } from '@gif/gifList';
import useGiphy from '@hooks/useGiphy'
import './searchedGifs.css'
export function SearchedGifs() {
  const { gifs, currentSearch, loading } = useGiphy()
  
  return (
    <section className="SearchedGifs">
      <div className="container">
        {
          gifs.length !== 0
            ? 
              (
                <>
                  <h2 className='SearchedGifs__title'>{currentSearch}</h2>

                  <ul className="SearchedGrid">
                    <GifContainer gifs={gifs} list={true} loading={loading}/>
                  </ul>
                </>
              )
            : 
              <div className='BuscarGifs'>
                <p>No hay gifs buscados con anterioridad, usa el buscador</p>
              </div>
        }
        
      </div>
    </section>
  )
} 