import RandomText from "../PostFunctions/RandomText";
import NavBar from "../Home/NavBar";
import "../Home/Style.css";
import Logo2 from "../../assets/meli.png";
import { useState, useEffect, useRef } from "react";
import Logo from "../../assets/2.png";

function Linkgroup() {
    const [clicked, setClicked] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const logoRef = useRef(null);

    const handleClick = () => {
        if (!clicked) {
            setClicked(true);
            setShuffle(true);
        }
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
        transform: `rotate(${clicked ? "2160deg" : "0"}) scale(${clicked ? "0.7" : "1"})`,
        transformOrigin: "center",
        transition: "transform 2s",
        textShadow: " 2px 2px 4px #000000",
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
        filter: clicked ? "none !important" : "blur(5px) !important",
        transition: "opacity 1s ease-in-out 1s, filter 2s", // add filter to transition property
    };

    useEffect(() => {
        // Stop shuffle after two rotations of the logo
        const logoEl = logoRef.current;
        const handleTransitionEnd = () => {
            if (clicked) {
                setClicked(false);
                setShuffle(false);
            }
        };
        logoEl.addEventListener("transitionend", handleTransitionEnd);
        return () => logoEl.removeEventListener("transitionend", handleTransitionEnd);
    }, [clicked]);

    return (
        <div className="relative">
            <NavBar />
            <div className="flex flex-column align-items-center">
                <div style={logoStyle} onClick={handleClick} ref={logoRef}>
                    <div style={logo1Style}></div>
                    <div style={logo2Style}></div>
                </div>
                <RandomText shuffle={shuffle} />
                <Linkgroup />
            </div>
        </div>
    );
}

export default Linkgroup;
