import { GifContainer } from '../gif/gifList';
import useGiphy from '../../hooks/useGiphy'
import './searchedGifs.css'

export function SearchedGifs() {
  const { gifs, currentSearch } = useGiphy()

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
                    <GifContainer gifs={gifs} list={true}/>
                  </ul>

                  <button 
                    className='More__gifs'
                    type='button' aria-label='Load more Gifs'
                    >
                    Load more Gifs
                  </button>
                </>
              )
            : <p>Instroduce gifs</p>
        }
        
      </div>
    </section>
  )
} 