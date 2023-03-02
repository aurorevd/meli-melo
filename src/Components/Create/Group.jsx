import { NavLink } from 'react-router-dom'
import '../Home/Style.css'

const Group = (props) => {
    return (

        <NavLink to="/group">
            <li class='rounded border-black w-100'>
                <button
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

