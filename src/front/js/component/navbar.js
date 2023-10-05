import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import {GiHamburgerMenu } from 'react-icons/gi';



export const Navbar = () => {

	const navigate = useNavigate()

	return (
		<nav className="navbar navbar-expand-lg py-0">
			<div className="container-fluid  mt-0" id="navbarHome">
				<a className="navbar-brand" href="#">Navbar</a>
				<span className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" >
						<GiHamburgerMenu className="reactIcon" size="30px" />
					</span>
				</span>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
					<a className="nav-link active" aria-current="page" href="/">Home</a>
					</li>
					<li className="nav-item">
					<a className="nav-link" href="/userpage">User Page</a>
					</li>
					<li className="nav-item">
					<a className="nav-link" href="/new-item">Upload Item</a>
					</li>
					<li className="nav-item">
					<a className="nav-link" href="/login">Login</a>
					</li>
					<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Dropdown
					</a>
					<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
						<li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><hr className="dropdown-divider"/></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
					</li>
				</ul>
				<form className="d-flex">
					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
					<button className="btn btn-outline-success" type="submit">Search</button>
				</form>
				</div>
			</div>
		</nav>
	);
};
