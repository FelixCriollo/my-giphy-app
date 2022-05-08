import { FiTwitter,FiGithub } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { memo } from 'react'
import logo from '../../../images/logo.png'
import './header.css'

function Header(props) {
  const navigate = useNavigate()
  const toHome = () => navigate("/")
  return (
    <header className="Header">
      <div className="container">
        <img 
          src={logo} 
          alt="my gifs" 
          className='Header__logo'
          onClick={toHome}
        />

        {props.children}

        <ul className="social">
          <li className="social__item">
            <a href="https://twitter.com/Fabrzio_C" aria-label='twitter' target="_blank">
              <FiTwitter size={28} color="#000"/>
            </a>
          </li>

          <li className="social__item">
            <a href="https://github.com/FelixCriollo" aria-label='github' target="_blank">
              <FiGithub size={28}  color="#000"/>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default memo(Header)