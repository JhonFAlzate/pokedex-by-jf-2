import { useNavigate } from 'react-router-dom'
import './styles/HeaderPages.css'
import { useEffect, useState } from 'react'
// import { Logo, Luna, Sol} from "./icons"

const HeaderPages = () => {
    const [dark, setDark] = useState(false)

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/pokedex')  
    } 

    const handledark = () => {
        setDark(!dark)
    }
    useEffect(() => {
        document.body.setAttribute('data-tema', dark)
    }, [dark])

  return (
    <header className="header">
          <div className="header_home_red">
            <button className='header_btn' onClick={handleClick}>Home</button>
            <button className='header_btn' onClick={handledark} >Mode Color</button>
            </div>
          <div className="header_home_black"></div>
          <img className="header_img" src="/pokedex1.png" alt="/pokedex1.png" />
              <div className="header_home_circle">
                  <div className="header_home_circle_two">
                      <div className="header_home_circle_3">
                          <div className="header_home_circle_4"></div>
                  </div>
              </div>
          </div>   
      </header>
  )
}

export default HeaderPages