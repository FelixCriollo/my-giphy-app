import { useParams } from 'react-router-dom'
import { GoVerified } from 'react-icons/go'
import { MdSubdirectoryArrowRight } from 'react-icons/md'
import useGiphy from '../../hooks/useGiphy'
import './detail.css' 
import { useLocalStorage } from '../../hooks/useLocalStorage'

export function Detail() {
  // obteniendo items del local storage
  const { getItemContent } = useLocalStorage("LSGIFS_1")
  const lsGifs = getItemContent().listGifs

  // obteniendo gifs del contexto con un hook que lo llama
  const {gifs, trending} = useGiphy() 

  // obteniendo el id del gif 
  const gifId = useParams();
  // buscando los datos del gif con id en los gifs del contextom, local storage o del trending
  const totalGifs = [...trending, ...lsGifs, ...gifs].filter(tGif => tGif.id === gifId.gifId)
  const gifDetail = totalGifs[0]

  return (
    <section className='Detail'>
      <div className="container">
        <aside className='Detail__aside'>
          {
            gifDetail.user === undefined
              ?
                null
              : 
                <>
                  <div className='Detail__user'>
                    <img src={gifDetail.user.avatar_url} alt={gifDetail.user.username}/>

                    <div>
                      <h4 className="Detail__pseudoName">
                        {gifDetail.user.display_name}
                      </h4>
                      <h3 className="Detail__userName">
                        @{gifDetail.user.username}
                        
                        {
                          gifDetail.user.is_verified
                            ? <GoVerified />
                            : null
                        }
                      </h3>
                    </div>
                  </div>

                  <p className='Detail__description'>{gifDetail.user.description}</p>
                </>
          }
          <a 
            className='Detail__source'
            href={gifDetail.source === "" ? gifDetail.user.website_url : gifDetail.source}
            >
            <MdSubdirectoryArrowRight />
            <span>
              {gifDetail.source === "" ? gifDetail.user.website_url : gifDetail.source}
            </span>
          </a>
        </aside>

        <div className='Detail__imp'>
          <h2 className='Detail__title'>{gifDetail.title}</h2>
          <img  
            className='Detail__img'
            src={gifDetail.images.fixed_width.webp} alt={gifDetail.title} />
        </div>
      </div>
    </section>
  ) 
}