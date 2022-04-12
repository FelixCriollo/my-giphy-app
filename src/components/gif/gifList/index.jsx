import { GifCard } from "../gifCard";

export function GifContainer({ gifs, list = false }) {
  return (
    <>
      { 
        gifs.map(gif => (
          list
            ? 
              <li key={gif.id}>
                <GifCard props={gif}/>
              </li>
            
            : <GifCard props={gif} key={gif.id}/>
          ))
      }     
    </>
  )
} 