import {useAuth} from '../Login/Auth'
import {useNavigate} from 'react-router-dom'

const ProfilePage = () => {
   const auth = useAuth()
   const navigate=useNavigate()

   const handleLogout = () =>{
      auth.logout()
      navigate('/')
   }

   return (
      <div>
      Welcom {auth.user}
      <button onClick={handleLogout}>Logout</button>
      </div>
   )
}


export default ProfilePage
