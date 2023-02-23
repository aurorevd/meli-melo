import React from "react";
import Logo from "../../assets/melimelo.gif"
import { Link } from "react-router-dom";
import '../Home/Style.css'
import PostPopUp from "./PostPopUp";
import axios from "axios"
import Logo2 from "../../assets/meli.png"
import { useState} from 'react';

const NavBar = () => {
    const [hover, setHover] = useState(false);
    const handleHover = () => {
      setHover(!hover);
    };
  
    const logoStyle = {
      display: "inline-block",
      width: "250px",
      height: "100px",
      backgroundImage: `url(${hover ? Logo : Logo2})`,
      backgroundSize: "cover",
    };

  const req = async () => {
    try {
      await axios.get("/user/logout", {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      });
      console.log("logout sucess")
    }
    catch (error) {
    console.log(error);
    }
  }
  return (
  <div class="containerNavBar" >
     <nav class="navbar  navbar-expand-lg navbar-light sticky container-xxl flex-wrap flex-lg-nowrap ">
        <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">
          </span>
        </button>
  
        <Link href="#" onMouseEnter={handleHover} onMouseLeave={handleHover} class="navbar-brand" to="/" >
          <img   alt="" style={logoStyle} class= "img-fluid object-fit-cover  rounded m-0 ms-4 my-0 logoimg"  />
        </Link>
      
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
          {/* <li>
            <input class="form-control  m-2 pr-5" type="search" placeholder="Search" aria-label="Search"></input>
          </li> */}
            <li class="nav-item active">
              <Link class="nav-link m-2"  to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link m-2"  to="/profile/:userId">
                Profile
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link width=auto m-2"  to="/groups">
                Groups
              </Link>
            </li>
            
            <Link class="nav-link width=auto "  to="/login">
              <button type="button" class="btn  me-2 ">Log In
              </button>
            </Link>
          
            <Link class="nav-link width=auto "  to="/signup">
              <button type="button" class="btn me-3">
                Sign Up
              </button>
            </Link>

            <button onClick={req} type="button" class="btn me-3">
              Logout
            </button>
          </ul>
        </div>
      </nav>
    </div>
  )
};

export default NavBar; 