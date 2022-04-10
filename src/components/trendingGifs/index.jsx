import { GifContainer } from "../gif/gifList";
import { fetchTrendingGifs } from "../../api/gifs";
import { useState, useEffect } from "react";
import { Carousel } from "../carousel";
import './trendingGifs.css';

export function TrendingGifs() {
  const [trending, setTrending] = useState('')

  useEffect(() => {
    const fetchTrends = async () => {
      const res = await fetchTrendingGifs()
      setTrending(res.data)
    }
    fetchTrends()
  }, [])

  return (
    <section className="TrendingGifs">
      <div className="container">
        <h2 class='TrendingGifs__title'>Popular Gifs</h2>

        <Carousel>
          <GifContainer gifs={trending ? trending : []} fixed_size="height"/>
        </Carousel>
      </div>
    </section>
  )
} 