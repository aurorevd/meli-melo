import React, { useRef,useState } from 'react';
import axios from "axios";

import Logo from "../../assets/bg.png";
import { Link } from 'react-router-dom';
import '../Home/Style.css'
import LoginPage from './LoginPage';


import { useNavigate, useLocation } from 'react-router-dom';



function SignUp() {
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || '/';
  const inputRefUsername = useRef();
  const inputRefEmail = useRef();
  const inputRefPassword = useRef();
  const inputRefLastName = useRef();
  const inputRefConfPassword = useRef();
  const inputRefFirstName =useRef();

  const onSubmit =  (e) => {
    e.preventDefault();
    const data = {
      username: inputRefUsername.current.value,
      last_name: inputRefLastName.current.value,
      first_name: inputRefFirstName.current.value,
      email: inputRefEmail.current.value,
      password: inputRefPassword.current.value,
      confirm_password: inputRefConfPassword.current.value,
    };
    console.log(data)
   
    axios
    .post("/user/register", data)
     .then((response) => {
        console.log(response);
        navigate(redirectPath, { replace: true });
      }) 
      .catch((error) => {
        console.log(error);
      }); 
    } 
  
  return (

    <div >
      <LoginPage/>
      <div class="div m-5">   
       <form onSubmit={onSubmit}>
        <div class="form-group m-5 ">
        <h2 class="h3 mb-4">Sign Up</h2>
        <p>It's free and always will be!</p>

          <div class="col-md-6">
            <div class="form-outline">
            <label class="form-label " for="typeText"></label>
            <input ref={inputRefUsername} class="form-control uname" type="text"  placeholder="User Name"></input>
            </div>
          </div>
          <div class="row my-1">
          <div class="col-md-6">
                    <div class="form-outline">
                        <label class="form-label " for="typeText"></label>
                        <input ref={inputRefFirstName} class="form-control  " type="text"  placeholder="First Name"></input>
                    </div>
                </div>
                <div class="col-md-6">
                <div class="form-outline">
                    <label  class="form-label " for="typeText"></label>
                    <input ref={inputRefLastName}class="form-control  " type="text" placeholder="Last Name"></input>
                </div>
            </div>
          </div>
          
         
        <div class="col-md-6">
                <div class="form-outline">
                <label  class="form-label  " for="typeText"></label>
                <input ref={inputRefEmail} name="email" class="form-control emailInput" type="email"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                </div>
            </div>
            <div class="row my-1">
            <div class="col-md-6">
                <div class="form-outline">
                    <label class="form-label m-2" for="typeText"></label>
                    <input ref={inputRefPassword} type="password" class="form-control  " id="exampleInputPassword1" placeholder="Password" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-outline">
                <label  class="form-label m-2" for="typeText"></label>
                <input ref={inputRefConfPassword} type="confirmpassword" class="form-control  " id="exampleInputPassword1" placeholder="confirm Password" />  
                    {/* <input type="text" id="typeText" class="form-control" /> */}
                </div>
            </div>
        </div>
            <div class="mt-4">
                <div class="form-check">
                <input   class="form-check-input custom-checkbox" type="checkbox" value="" id="flexCheckChecked" checked/>
                <label class="form-check-label" for="flexCheckChecked">
                    Accept the terms and conditions
                </label>
                </div> 
            </div>
            
            <button type="submit" class="btn  mt-5 button">Sign Up!</button>
            </div>
          </form>
      </div>
         
    </div>
   
  )
}
export default SignUp;