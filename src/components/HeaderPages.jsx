import { useNavigate } from 'react-router-dom'
import './styles/HeaderPages.css'
import { useEffect} from 'react'
import { setDarkSlice } from "../store/slices/dark.slice"
import { useDispatch, useSelector} from "react-redux"


const HeaderPages = () => {
   

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const dark = useSelector(states => states.dark)

    const handleClick = () => {
        navigate('/pokedex')  
    } 

    const handledark = () => {
      
        dispatch(setDarkSlice(!dark))
    }
    console.log(dark)
    useEffect(() => {
        document.body.setAttribute('data-tema', dark)
    }, [dark])

  return (
    <header className="header">
          <div className="header_home_red">
            <button className='header_btn' onClick={handleClick}>Home</button>
            <button className='header_btn' onClick={handledark} >dark y light mode</button>
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