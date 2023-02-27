import {useAuth} from "./Auth"
import {Navigate, useLocation} from "react-router-dom"

export const RequireAuth = ({children }) =>{
  const Auth= useAuth()
  const location =useLocation()
  if(!Auth.user){
    return <Navigate to="/loginsignup" state={{path:location.pathname}}/>
  }
  return children

}
