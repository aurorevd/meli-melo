
import RandomText from "../PostFunctions/RandomText";
import LeftBar from "./LeftBar"
import NavBar from "./NavBar"
import './Style.css'
function HomePage() {
  
  return (
    
      <div className="relative">
        
      <NavBar/>
      <div class="flex-nowrap">
      <LeftBar/>
      
      <div className="ramdom">
         <RandomText/>
        </div>
        </div>
      </div>
  )
}

export default HomePage;
