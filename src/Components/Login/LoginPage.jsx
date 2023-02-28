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
      <div class="flex-row">
        <nav class="loginNavBar navbar navbar-expand-lg   container-xxl flex-wrap flex-lg-nowrap  ">
          <div class="navbar w-50" >
            <Link  to="/" >
              <img src={Logo} alt="logo" class="img-fluid object-fit-cover  rounded m-0 ms-5 my-0 loginimg"  />
            </Link>
          </div>
          <div class="d-flex navBarDiv">
          <form onSubmit={handleSubmit(onSubmit)}>
          <ul class="navbar-nav ms-auto my-2 mt-lg-0">
          <li class="nav-item active">
          <div class="col-md-10 ms-2">
                <div class="form-outline">
                    <label class="form-label ms-2 my-0 " for="typeText"><h5>Login </h5>
                    </label>
                    <input type="email" class="form-control mx-2 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"{...register("email")}/>
                    
                </div>
            </div>
          </li>
          
            <li class="nav-item active">
              <div class="col-md-10 ms-2">
                  <div class="form-outline">
                    <label  class="form-label " for="typeText"></label>
                    <input type="password" class="form-control m-2" id="exampleInputPassword1" placeholder="Password" {...register("password")}/>
                      
                  </div>
              </div>
            </li>
            <li>
              <Link class="nav-link width=auto "  to="/">
              <button type="button" class="btn mt-4">Log in</button></Link>
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


