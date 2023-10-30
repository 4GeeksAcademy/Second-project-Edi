import React from "react";
import { useNavigate } from "react-router-dom";

const Dropdown = (props) =>{
    const navigate = useNavigate()

    return (
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.name}
        </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" onClick={()=>navigate(`${props.link}`)}>{props.item1}</a></li>
        <li><a className="dropdown-item" onClick={()=>navigate(`${props.link2}`)}>{props.item2}</a></li>
        <li><a className="dropdown-item" onClick={()=>navigate(`${props.link3}`)}>{props.item3}</a></li>
    </ul>
    </li>
    )
}
export default Dropdown