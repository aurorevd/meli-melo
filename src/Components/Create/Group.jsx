import { NavLink } from 'react-router-dom'
import '../Home/Style.css'

const Group = (props) => {
    return (

        <NavLink class="list-style-none text-decoration-none" to={`/group+(${props.info.id})`}>
            <li class="list-style-none text-decoration-none" >
                <button
                id="close"
                    onClick={() => props.delete(props.info.id)} >
                    x
                </button>
                    <h5>{props.info.groupName}{""}
                    </h5>
            </li>
        </NavLink>
    )
}

export default Group

