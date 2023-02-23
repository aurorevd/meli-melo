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

    <div>
      <LoginPage/>
      <div class="div m-5">   
     
   <form onSubmit={onSubmit}>
   <div class="form-group m-5 ">
    <h2 class="h3 mb-4">Sign Up</h2>
    <p>It's free and always will be!</p>
    <div class="row my-1">
        <div class="col-md-6">
            <div class="form-outline">
               
    <label htmlFor="username" class="m-5 w-50">Username</label>
    <input ref={inputRefUsername} class="form-control m-2 w-50" type="text"  placeholder="First Name"></input>
   <label for="exampleInputEmail1 m-5 w-50">First Name</label>
   <input ref={inputRefFirstName}  class="form-control m-2 w-50" type="text"  placeholder="First Name"></input>
   <label for="exampleInputEmail1 m-5 w-50">Last Name</label>
   <input ref={inputRefLastName} class="form-control m-2 w-50" type="text" placeholder="Last Name"></input>
   <label for="exampleInputEmail1 m-5 w-50">Email address</label>
  <input ref={inputRefEmail}  name="email" class="form-control m-2 w-50" type="email"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
    <label for="exampleInputPassword1">Password</label>
          <input ref={inputRefPassword} type="password" class="form-control m-2 w-50" id="exampleInputPassword1" placeholder="Password" />
          <label for="exampleInputPassword1">Confirm Password</label>
          <input ref={inputRefConfPassword} type="confirmpassword" class="form-control m-2 w-50" id="exampleInputPassword" placeholder="Password" />  
          <div class="form-check">
            <input class="form-check-input custom-checkbox" type="checkbox" vgit alue="" id="flexCheckChecked" checked/>
            <label class="form-check-label" for="flexCheckChecked">
                Accept the terms and conditions
            </label>
            </div> 
          <button type="submit" class="btn m-2 mt-5 button">Sign Up!</button>

          </div>
          </div></div>
   </div>
   </form>
    </div>
      </div>
   
   
  )
}
export default SignUp;