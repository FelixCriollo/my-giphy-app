import { GifCard } from "../gifCard";
import "./gifList.css"

export function GifList({ gifs, loading, list = false }) {
  // console.log(loading);
  const gifsSkeleton = () => {
    // console.log("esqueleto");
    let arr = []
    for (let i = 0; i < 16; i++) {
      arr.push(
        <div key={i} >
          <div 
            className={!list ? "GifSkeleton" : "GifSkeleton GifSkeleton--list"}
          />
        </div>
      )
    }
    return arr
  }
  return (
    <>
      { 
        loading
         ? 
          gifsSkeleton()
         :
          gifs.map(gif => (
            list
              ? 
                <li key={gif.id} className="Gif__item">
                  <GifCard props={gif} list={list}/>
                </li>
              
              : <GifCard props={gif} key={gif.id} list={list}/>
          ))
      }     
    </>
  )
} 