import './searchedGifs.css'

export function SearchedGifs({ search, children }) {
  return (
    <section className="SearchedGifs">
      <div className="container">
        <h2 class='SearchedGifs__title'>{search}</h2>

        <div className="SearchedGrid">
          {children}
        </div>
      </div>
    </section>
  )
} 