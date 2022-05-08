import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GifUser } from '../gifUser';
import './gifCard.css'

export function GifCard({ props, list = false }) {
  const [userVisible, setUserVisible] = useState(false)
  const navigate = useNavigate()

  const {
    images,
    id,
    title,
    user
  } = props

  // console.log(images);

  const handleMouseOver = () => setUserVisible(true)

  const handleMouseLeave = () => setUserVisible(false)

  const navigateToDetail = () => navigate(`/gifs/${id}`)

  return (
    <div 
      className="Gif" 
      onMouseOver={handleMouseOver} 
      onMouseLeave={handleMouseLeave}
      onClick={navigateToDetail}
      style={list == true ? {height: `${images.fixed_width.height}px`} : null}
    >
      <img 
          className="Gif__img"
          src={images.fixed_width.webp}
          alt={title} 
          key={id}
       />

       <GifUser user={user} visible={userVisible} list={list}/>
    </div>
  )
}