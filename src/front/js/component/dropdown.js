import React from "react";

const Dropdown = (props) =>{
    return (
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.name}
        </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="#">{props.item1}</a></li>
        <li><a className="dropdown-item" href="#">{props.item2}</a></li>
        <li><a className="dropdown-item" href="#">{props.item3}</a></li>
    </ul>
    </li>
    )
}
export default Dropdown