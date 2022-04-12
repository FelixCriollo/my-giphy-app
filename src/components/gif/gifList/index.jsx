import { GifCard } from "../gifCard";
import "./gifList.css"

export function GifContainer({ gifs, list = false }) {
  return (
    <>
      { 
        gifs.map(gif => (
          list
            ? 
              <li key={gif.id} className="Gif__item">
                <GifCard props={gif}/>
              </li>
            
            : <GifCard props={gif} key={gif.id}/>
          ))
      }     
    </>
  )
} 