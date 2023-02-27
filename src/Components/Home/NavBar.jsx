import React from "react";
import Logo from "../../assets/2.png"
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
    
      width: "250px",
      height: "100px",
      backgroundImage: `url(${hover ? Logo2 : Logo})`,
      backgroundSize: "cover",
      textDecoration: "none",
      border: "none !important",
      boxShadow: "none !important"
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

        <div class="collapse navbar-collapse " id="navbarTogglerDemo03">
          <ul class="navbar-nav  mt-2 mt-lg-0 justify-start">
            <li class="nav-item">
              <Link class="nav-link m-2"  to="/profile">
                Profile
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link width=auto m-2"  to="/groups">
                Groups
              </Link>
            </li>
          </ul>
        </div>
  
        <Link href="#" style={{ ...logoStyle, border: 'none !important' }}  onMouseEnter={handleHover} onMouseLeave={handleHover} class="border-0 text-decoration-none object-fit-cover shadow-none" to="/" >
        </Link>
      
        <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
          <div class="navbar-nav ms-auto mt-2 mt-lg-0">
            <Link class="nav-link width=auto "  to="/loginsignup">
              <button type="button" class="btn  me-2 ">Log In
              </button>
            </Link>
          
            <Link class="nav-link width=auto "  to="/loginsignup">
              <button type="button" class="btn me-3">
                Sign Up
              </button>
            </Link>

            <div class="nav-link width=auto">
            <button onClick={req} type="button" class=" btn me-3">
              Logout
            </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
};

export default NavBar; 