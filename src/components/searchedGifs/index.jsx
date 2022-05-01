import { GifContainer } from '../gif/gifList';
import useGiphy from '../../hooks/useGiphy'
import './searchedGifs.css'
export function SearchedGifs() {
  const { gifs, currentSearch, actulizeData, limit, setLimit, loading } = useGiphy()

  const moreGifs = () => {
    if (limit <= 50) {
      console.log("algo");
      setLimit(limit + 10)
      actulizeData(currentSearch, limit)
    }
  }

  
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

                  {
                    !loading 
                      ?
                        <button 
                          className='More__gifs'
                          type='button' aria-label='Load more Gifs'
                          onClick={moreGifs}
                          >
                          Load more Gifs
                        </button>
                      :null
                  }
                </>
              )
            : <p>Instroduce gifs</p>
        }
        
      </div>
    </section>
  )
} 