import RandomText from "../PostFunctions/RandomText";
import NavBar from "./NavBar";
import "./Style.css";
import Logo2 from "../../assets/meli.png";
import { useState, useEffect } from "react";
import Logo from "../../assets/2.png";
import { Link } from "react-router-dom";

function HomePage() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  const logoStyle = {
    marginBottom: "50px",
    width: "350px",
    height: "120px",
    textDecoration: "none",
    border: "none !important",
    boxShadow: "none !important",
    display: "block",
    position: "relative",
    transition: "width 1s, height 1s, background-image 1s, transform 2s",
    transform: `rotate(${clicked ? "2160deg" : "0"})`,
    transformOrigin: "center",
  };

  const logo1Style = {
    position: "absolute",
    top: 0,
    left: 0,
    opacity: clicked ? 0 : 1,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Logo})`,
    backgroundSize: "cover",
    transition: "opacity 1s ease-in-out 1s", // add transition property to fade out
  };

  const logo2Style = {
    position: "absolute",
    top: 0,
    left: 0,
    opacity: clicked ? 1 : 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Logo2})`,
    backgroundSize: "cover",
    filter: clicked ? "none !important" : "blur(3px)!important",
    transition: "opacity 1s ease-in-out 1s", // add transition property to fade in with delay
  };

  const [shuffle, setShuffle] = useState(false);

  useEffect(() => {
    // Start shuffle after the logo rotates
    if (clicked) {
      setTimeout(() => {
        setShuffle(true); // start shuffle
      }, 2000); // delay the shuffle start for 2 seconds to match the logo rotation transition
    }
  }, [clicked]);

  useEffect(() => {
    // Stop shuffle after the logo rotation is complete
    if (shuffle && !clicked) {
      setTimeout(() => {
        setShuffle(false);
      }, 2000);
    }
  }, [shuffle, clicked]);

  return (
    <div className="relative">
      <NavBar />
      <div className="flex flex-column align-items-center">
        <div style={logoStyle} onClick={handleClick}>
          <div style={logo1Style}></div>
          <div style={logo2Style}></div>
        </div>
        <RandomText shuffle={shuffle} />
      </div>
    </div>
  );
}

export default HomePage;
