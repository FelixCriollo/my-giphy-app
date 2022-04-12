import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import './carousel.css'

export function Carousel({ children }) {
  const move = (direction = 'rigth' ) => {
    const container = document.querySelector(".Carousel__item") 
    if (direction === 'rigth') {
      container.scrollLeft += (container.clientWidth / 1.5)
    } else {
      container.scrollLeft -= (container.clientWidth / 1.5)
    }
  }
  
  return (
    <div className="Carousel">
      <button type='button' 
        className='Carousel__control'
        onClick={() => move('left')}
        aria-label='carousel left control'>

        <AiOutlineArrowLeft  size={28} color="#fff" />
      </button>
      
      <div className="Carousel__item">
        {children}
      </div>
      
      <button type='button' 
        className='Carousel__control'
        onClick={() => move()}
        aria-label='carousel right control'>
        <AiOutlineArrowRight  size={28} color="#fff"/>
      </button>
    </div>
  )
}