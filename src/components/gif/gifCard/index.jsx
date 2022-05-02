import { useState } from 'react';
import { GifUser } from '../gifUser';
import './gifCard.css'

export function GifCard({ props, list = false }) {
  const [userVisible, setUserVisible] = useState(false)

  const handleMouseOver = () => setUserVisible(true)

  const handleMouseLeave = () => setUserVisible(false)

  const {
    images,
    id,
    title,
    user
  } = props

  return (
    <div className="Gif" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <img 
          className="Gif__img"
          src={images.fixed_width.url}
          alt={title} 
          key={id}
       />

       <GifUser user={user} visible={userVisible} list={list}/>
    </div>
  )
}