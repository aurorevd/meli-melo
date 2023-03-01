import React, { useRef,useState } from 'react';
import axios from "axios";
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
      <div className="div m-5">   
       <form onSubmit={onSubmit}>
        <div className="form-group m-5 ">
        <h2 className="h3 mb-4">Sign Up</h2>
        <p>It's free and always will be!</p>

          <div className="col-md-6">
            <div className="form-outline">
            <label className="form-label " for="typeText"></label>
            <input ref={inputRefUsername} className="form-control uname" type="text"  placeholder="User Name"></input>
            </div>
          </div>
          <div className="row my-1">
          <div className="col-md-6">
                    <div className="form-outline">
                        <label className="form-label " for="typeText"></label>
                        <input ref={inputRefFirstName} className="form-control  " type="text"  placeholder="First Name"></input>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="form-outline">
                    <label  className="form-label " for="typeText"></label>
                    <input ref={inputRefLastName}className="form-control  " type="text" placeholder="Last Name"></input>
                </div>
            </div>
          </div>
          
         
        <div className="col-md-6">
                <div className="form-outline">
                <label  className="form-label  " for="typeText"></label>
                <input ref={inputRefEmail} name="email" className="form-control emailInput" type="email"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                </div>
            </div>
            <div className="row my-1">
            <div className="col-md-6">
                <div className="form-outline">
                    <label className="form-label m-2" for="typeText"></label>
                    <input ref={inputRefPassword} type="password" className="form-control  " id="exampleInputPassword1" placeholder="Password" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-outline">
                <label  className="form-label m-2" for="typeText"></label>
                <input ref={inputRefConfPassword} type="confirmpassword" className="form-control  " id="exampleInputPassword1" placeholder="confirm Password" />  
                    {/* <input type="text" id="typeText" className="form-control" /> */}
                </div>
            </div>
        </div>
            <div className="mt-4">
                <div className="form-check">
                <input   className="form-check-input custom-checkbox" type="checkbox" value="" id="flexCheckChecked" checked/>
                <label className="form-check-label" for="flexCheckChecked">
                    Accept the terms and conditions
                </label>
                </div> 
            </div>
            
            <button type="submit" className="btn  mt-5 button">Sign Up!</button>
            </div>
          </form>
      </div>
         
    </div>
   
  )
}
export default SignUp;