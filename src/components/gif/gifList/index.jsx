export function GifContainer({ gifs, fixed_size = "width" }) {
  return (
    <>
      { 
        gifs.map(gif => (
            <img 
              src={fixed_size === "width" ? gif.images.fixed_width.url : gif.images.fixed_height.url}
              alt="sspap" 
              key={gif.id} 
            />
        ))
      }     
    </>
  )
} 