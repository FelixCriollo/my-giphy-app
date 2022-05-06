import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useRef } from 'react'
import './carousel.css'

export function Carousel({ children }) {
  const scroll = useRef(0)

  const move = (direction = 'right' ) => {
    const container = document.querySelector(".Carousel__item")
    const carousel = document.querySelector(".Carousel").clientWidth
    const controlLeft = document.querySelector(".Carousel__control--left") 
    const controlRight = document.querySelector(".Carousel__control--right") 
    
    if (direction === 'right') scroll.current -= carousel / 1.5
    else scroll.current += carousel / 1.5

    if (scroll.current >= 0) {
      scroll.current = 0
      controlLeft.classList.add("Carousel__control--none")
      controlRight.classList.remove("Carousel__control--none")
    } else if(scroll.current <= (-container.clientWidth  + carousel)) {
      scroll.current = -container.clientWidth + carousel
      controlRight.classList.add("Carousel__control--none")
      controlLeft.classList.remove("Carousel__control--none")
    } else {
      controlRight.classList.remove("Carousel__control--none")
      controlLeft.classList.remove("Carousel__control--none")
    }

    container.style.transform = `translateX(${scroll.current}px)`
  }


  return (
    <div className="Carousel">
      <button type='button' 
        className='Carousel__control Carousel__control--none Carousel__control--left'
        onClick={() => move('left')}
        aria-label='carousel left control'>

        <AiOutlineArrowLeft  size={28} color="#fff" />
      </button>
      
      <div className="Carousel__item">
        {children}
      </div>
       
      <button type='button' 
        className='Carousel__control Carousel__control--right'
        onClick={() => move('right')}
        aria-label='carousel right control'>
        <AiOutlineArrowRight  size={28} color="#fff"/>
      </button>
    </div>
  )
}