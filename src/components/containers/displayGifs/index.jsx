import { GifList } from '@gif/gifList'
import './displayGifs.css'


export function DisplayGifs({
    subtitle = "",
    title,
    gifs,
    loading
  }) {

  return (
    <>
      <h2 className='DisplayGifs__title'>
        <span className='DisplayGifs__subtitle'>{subtitle}</span>
        {title}
      </h2>
      
      <ul className="DisplayGifsGrid">
        <GifList gifs={gifs} list={true} loading={loading}/>
      </ul>
    </>
  )
}