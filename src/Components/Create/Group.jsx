import { NavLink, Link } from 'react-router-dom'
//import RandomText from '../PostFunctions/RandomText'

import '../Home/Style.css'


const Group = (props) => {
    /* const MylinkBouton = () => {
         console.log("MylinkBouton")
         const navigate = useNavigate();
         let url = "/Linkgroup";
 
         const handleClick = () => {
             navigate.push('/Linkgroup');
         }
     }*/

    return (

        <NavLink class="list-style-none text-decoration-none" to={`/group+(${props.info.id})`}>
            <li class="list-style-none text-decoration-none closebutton"  >
                <button className='closebt'
                    id="close"
                    onClick={() => props.delete(props.info.id)} >
                    x
                </button>
                <Link to="/Linkgroup ">Group of</Link>
                <h6>{props.info.groupName}{""}
                    {/*<Link to="/ ">Group</Link>*/}
                   
                </h6>

                {/*<button className='mylink' handleClick={this.handleClick}>{props.info.groupName}{""}
                    Go to your group
    </button>*/}

            </li>


        </NavLink>
    )
}

export default Group

