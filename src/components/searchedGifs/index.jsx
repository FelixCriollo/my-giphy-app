import './searchedGifs.css'

export function SearchedGifs({ search, children }) {
  return (
    <section className="SearchedGifs">
      <div className="container">
        <h2 className='SearchedGifs__title'>{search}</h2>

        <ul className="SearchedGrid">
          {children}
        </ul>

        <button 
          className='More__gifs'
          type='button' aria-aria-label='Load more Gifs'
          >
          Load more Gifs
        </button>
      </div>
    </section>
  )
} 