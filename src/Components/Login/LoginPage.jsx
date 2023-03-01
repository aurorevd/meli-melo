import axios from "axios"
import { useForm } from 'react-hook-form';
import { useAuth } from './Auth';
import { useNavigate,useLocation } from "react-router-dom";
import '../Home/Style.css'
import Logo from "../../assets/bg.png";
import { Link } from 'react-router-dom';
import React, {useState} from 'react';


function LoginPage () {
  const {register,handleSubmit} = useForm();
  const location =useLocation()
  const [user, setUser] = useState('');
  const auth = useAuth();
  const redirectPath = location.state?.path || '/'

 let navigate = useNavigate();
  const onSubmit = async (data = {}) => {
    console.log(data)
     axios
      .post("/user/login", data)
      .then((response) => {
       const userId = response.data.id;
        console.log(userId);
        localStorage.setItem("user_id", userId);
        auth.login(user);
        navigate(redirectPath, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        navigate ("/signup");
       });
   }
  return (
    <div>
      <div className="flex-row">
        <nav className="loginNavBar navbar navbar-expand-lg   container-xxl flex-wrap flex-lg-nowrap  ">
          <div className="navbar w-50" >
            <Link  to="/" >
              <img src={Logo} alt="logo" className="img-fluid object-fit-cover  rounded m-0 ms-5 my-0 loginimg"  />
            </Link>
          </div>
          <div className="d-flex navBarDiv">
          <form onSubmit={handleSubmit(onSubmit)}>
          <ul className="navbar-nav ms-auto my-2 mt-lg-0">
          <li className="nav-item active">
          <div className="col-md-10 ms-2">
                <div className="form-outline">
                    <label className="form-label ms-2 my-0 " for="typeText"><h5>Login </h5>
                    </label>
                    <input type="email" className="form-control mx-2 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"{...register("email")}/>
                    
                </div>
            </div>
          </li>
          
            <li className="nav-item active">
              <div className="col-md-10 ms-2">
                  <div className="form-outline">
                    <label  className="form-label " for="typeText"></label>
                    <input type="password" className="form-control m-2" id="exampleInputPassword1" placeholder="Password" {...register("password")}/>
                      
                  </div>
              </div>
            </li>
            <li>
              <Link className="nav-link width=auto "  to="/">
              <button type="button" className="btn mt-4">Log in</button></Link>
            </li>
          
          </ul>
          </form>

          </div>
          
         
          
        </nav>
      </div>
       
 
  
    </div>
   

  );

}

export default LoginPage;


