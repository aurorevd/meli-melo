import {useAuth} from '../Login/Auth'
import {useNavigate} from 'react-router-dom'
import './ProfilePage.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from "../../assets/2.png";
import { useState, useEffect} from "react"

const ProfilePageLayout = () => {
   const auth = useAuth()
   const navigate=useNavigate()
   const [infos, setInfos] = useState([]);
   const messages = [{ id: 15, content: "ne regarde pas derrière toi, il y a le monstre dont tu as peur qui nous suit", font_family: "random-class-2 monstre"},  { id: 18, content: "et un petit morceau de pain dans le bec du petit canard", font_family: "random-class-1"},{ id: 51, content: "Je suis un homme facile a vivre", font_family: "random-class-4"}];

   const req = async () => {
    try {
      await axios.get("/user/logout", {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      });
      console.log("logout sucess")
      auth.logout()
      navigate('/')
    }
    catch (error) {
    console.log(error);
    }
  }

    useEffect(() => {
    const getInfos = async () => {
        try {
          const response = await axios.get(`/user/profile`, {
            headers: {
              "ngrok-skip-browser-warning": "69420",
            },
          });
        const username=response.data.username
        const email=response.data.email
        const firstname=response.data.first_name
        const lastname=response.data.last_name
        const newInfos= {username, email, firstname, lastname}
        setInfos(newInfos);
      }
      catch (error) {
      console.log(error);
      }
    }
    getInfos() 
    }, []);

   return (     
    <div className="w-100 h-100">
      <nav className="navbar navbar-expand-lg w-100"   >
        <div className="collapse navbar-collapse w-100 " id="navbarTogglerDemo03">
          <ul className="navbar-nav mt-1 justify-start navuser">
            <Link  to="/" >
              <img src={Logo} alt="logo" className="img-fluid object-fit-cover rounded m-0 ms-5 my-0 loginimg"  />
            </Link>
          </ul>
        </div>

        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
          <div className="navbar-nav ms-auto mt-2 mt-lg-0">
            <div className="nav-link width=auto">
              <button onClick={req} type="button" className=" btn me-3">
                Logout
              </button>
            </div>
          </div>
        </div>

      </nav>

      <div className='d-flex mx-5 justify-content-between'>
        <div className='bulle'>
            <p class ='text'>"Hello,  I'm a young woman who is passionate about writing. I enjoy playing solo or in groups. I love immersing myself in the game's universe and discovering new possibilities."</p>
            <button class="rounded" >+</button>
        </div>

        <div style={{fontSize:'100px', fontWeight: "bold", flexDirection:"column", display:"flex", alignItems:"center"}}>
          HELLO {infos.username} !
          <div class=" custom-img" >
          <button class="rounded" style={{width:"50px" ,height:"50px", fontSize:"16px"}} >+</button>
          </div>
        </div>
      </div>

      <div class=" d-flex flex-column align-items-center">
      <h1 class=" font-weight-bold ">POSTS</h1>
      <div >
        {messages.map((msg) => (
          <div className={msg.font_family} key={msg.id}>
            <button class="rounded" style={{width:"30px" ,height:"30px", fontSize:"16px"}} >-</button>
             {msg.content}{" "}
           
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}


export default ProfilePageLayout;
