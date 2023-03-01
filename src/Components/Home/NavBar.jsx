import React from "react";
import { Link } from "react-router-dom";
import '../Home/Style.css'
import axios from "axios"

const NavBar = () => {
   

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
  <div className="containerNavBar" >
     <nav className="navbar  navbar-expand-lg navbar-light sticky container-xxl flex-wrap flex-lg-nowrap ">
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
          </span>
        </button>

        <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
          <ul className="navbar-nav  mt-2 mt-lg-0 justify-start">
            <li className="nav-item active">
              <Link className="nav-link m-2 "  to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link m-2"  to="/profile" >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link width=auto m-2"  to="/groups">
                Groups
              </Link>
            </li>
          </ul>
        </div>
      
        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
          <div className="navbar-nav ms-auto mt-2 mt-lg-0">
            <Link className="nav-link width=auto "  to="/loginsignup">
              <button type="button" className="btn  me-2 ">Log In
              </button>
            </Link>
          
            <Link className="nav-link width=auto "  to="/loginsignup">
              <button type="button" className="btn me-3">
                Sign Up
              </button>
            </Link>

            <div className="nav-link width=auto">
            <button onClick={req} type="button" className=" btn me-3">
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