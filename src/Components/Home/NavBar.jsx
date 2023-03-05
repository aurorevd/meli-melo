import React from "react";
import { Link } from "react-router-dom";
import '../Home/Style.css'

const NavBar = () => {
  
  return (
  <div className="containerNavBar" >
     <nav className="navbar  navbar-expand-lg navbar-light sticky container-xxl flex-wrap flex-lg-nowrap ">
       

        <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
          <ul className="navbar-nav  mt-2 mt-lg-0 justify-start">
            <li className="nav-item">
              <Link className="homelink m-2"  to="/profile" >
                PROFILE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="homelink width=auto m-2"  to="/create">
                CREATE TEXTS
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

          </div>
        </div>
      </nav>
    </div>
  )
};

export default NavBar; 