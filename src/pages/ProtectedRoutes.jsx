
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
   const trainer =  useSelector(states => states.trainer)
  
    if(trainer.length>=3) {
        return <Outlet/> //Outlet es la que me permite ingresar a las rutas que están dentro de ésta.
    }else {
        return (<Navigate to ='/'/> )
         
    }  
}

export default ProtectedRoutes