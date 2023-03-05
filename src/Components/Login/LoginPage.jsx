import axios from "axios"
import { useForm } from 'react-hook-form';
import { useAuth } from './Auth';
import { useNavigate,useLocation } from "react-router-dom";
import '../Home/Style.css'
import Logo from "../../assets/2.png";
import { Link } from 'react-router-dom';
import React from 'react';


function LoginPage () {
  const {register,handleSubmit} = useForm();
  const location =useLocation()
  
  const auth = useAuth();
  const redirectPath = location.state?.path || '/'
 let navigate = useNavigate();
 
 const onSubmit = async (data = {}) => {
  console.log("button ok")
  axios
    .post("/user/login", data)
    .then((response) => {
      console.log(response);
      const userId = response.data.id;
      console.log(userId);
      localStorage.setItem("user_id", userId);
      auth.login(response.data.id); // login the user
      navigate(redirectPath); // redirect to the requested page after login
    })
    .catch((error) => {
      console.log(error);
    });
};
  return (
    <div>
      <div className="flex-row">
        <nav className="loginNavBar navbar navbar-expand-lg flex-wrap flex-lg-nowrap  ">
          <div className="navbar w-50" >
            <Link  to="/" >
              <img src={Logo} alt="logo" className="img-fluid object-fit-cover  m-0 ms-5 my-0 loginimg"  />
            </Link>
          </div>
          <div className="d-flex navBarDiv">
          <form onSubmit={handleSubmit(onSubmit)}>
          <ul className="navbar-nav ms-auto my-2 mt-lg-0">
         
          <li className="nav-item active">
            <div className="col-md-10 ms-2">
              <div className="form-outline">
                <input type="email" className="form-control  " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"{...register("email")}/>
              </div>
            </div>
          </li>
          
          <li className="nav-item active">
            <div className="col-md-10 ms-2">
              <div className="form-outline">
                <input type="password" className="form-control " id="exampleInputPassword1" placeholder="Password" {...register("password")}/>
              </div>
            </div>
          </li>
          <li>
            <button type="submit" class="buttonwhite">Login</button>
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


