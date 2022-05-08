import { useState, useEffect } from 'react'
import useGiphy from '@hooks/useGiphy'
import { Carousel } from "@elements/carousel";
import { GifList } from '@gif/gifList'
import { fetchTrendingGifs } from '@api/gifs'
import "./home.css"
import { DisplayGifs } from '@containers/displayGifs';

export function Home() {
  // trending section
  const {trending, setTrending} = useGiphy()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTrends = async () => {
      console.log("una vez");
      const res = await fetchTrendingGifs()
      setTrending(res.data)
    }
    fetchTrends()
    setLoading(false)
  }, [])

  // last gifs searched
  const { lastGifs, lastGifsLoading } = useGiphy()
  return(
    <>
      <section className="TrendingGifs">
        <div className="container">
          <h2 className='TrendingGifs__title'>Popular Gifs</h2>

          <Carousel>
            <GifList gifs={trending ? trending : []} loading={loading}/>
          </Carousel>
        </div>
      </section>
      
      <section className='PrevSearch'>
        <div className="container">
          {
            lastGifs.current
              ?
                <DisplayGifs 
                  title={lastGifs.current} 
                  subtitle="Last Search: "
                  gifs={lastGifs.listGifs} 
                  loading={lastGifsLoading}
                />
              : null
          }
        </div>
      </section>
    </>
  )
}


