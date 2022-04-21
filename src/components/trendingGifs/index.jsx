import { GifContainer } from "../gif/gifList";
import { fetchTrendingGifs } from "../../api/gifs";
import { useState, useEffect, memo } from "react";
import { Carousel } from "../carousel";
import './trendingGifs.css';

function TrendingGifs() {
  const [trending, setTrending] = useState([])

  useEffect(() => {
    const fetchTrends = async () => {
      console.log("una vez");
      const res = await fetchTrendingGifs()
      setTrending(res.data)
    }
    fetchTrends()
  }, [])

  return (
    <section className="TrendingGifs">
      <div className="container">
        <h2 className='TrendingGifs__title'>Popular Gifs</h2>

        <Carousel>
          <GifContainer gifs={trending ? trending : []}/>
        </Carousel>
      </div>
    </section>
  )
} 

export default memo(TrendingGifs)