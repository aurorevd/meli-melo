
import RandomText from "../PostFunctions/RandomText";
import NavBar from "./NavBar"
import './Style.css'
import Logo2 from "../../assets/meli.png"
import { useState} from 'react';
import Logo from "../../assets/2.png"
import { Link } from "react-router-dom";


function HomePage() {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  };

  const logoStyle = {
    marginBottom:"50px",
    width: "350px",
    height: "120px",
    backgroundImage: `url(${hover ? Logo2 : Logo})`,
    backgroundSize: "cover",
    textDecoration: "none",
    border: "none !important",
    boxShadow: "none !important",
    
  };
  
  return (
    <div className="relative">
      <NavBar/>
      <div className="flex flex-column align-items-center">
      <Link href="" style={{ ...logoStyle, border: 'none !important' }}  onMouseEnter={handleHover} className="border-0 text-decoration-none object-fit-cover shadow-none" to="/" >
        </Link>
        <RandomText/>
      </div>
    </div>
  )
}

export default HomePage;
