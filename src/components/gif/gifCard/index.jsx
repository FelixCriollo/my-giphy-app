import './gifCard.css'

export function GifCard({ props }) {
  const handleHover = () => {
    console.log(props.user);
  }
  const {
    images,
    id,
    title
  } = props

  return (
    <div className="gif" onMouseOver={handleHover}>
      <img 
          className="gif__img"
          src={images.fixed_width.url}
          alt={title} 
          key={id}
       />
    </div>
  )
}