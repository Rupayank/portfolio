import React from "react";
import { Link } from "react-router-dom";
// import logo from "../Images/Rk.svg";

const Navbar = () => {
	return (
		<>
			{/* <nav className="nav">
				<div className="nav-center">
					<div className="nav-header">
						<img src={logo} className="nav-logo" alt="Rupayan" width="300px" />
						<button className="nav-btn">
							<i className="fas fa-bars"></i>
						</button>
					</div>
					<ul className="nav-links">
						<li>
							<a href="index.html">home</a>
						</li>
						<li>
							<a href="about.html">about</a>
						</li>
						<li>
							<a href="projects.html">projects</a>
						</li>
						<li>
							<a href="contact.html">contact</a>
						</li>
					</ul>
				</div>
			</nav> */}
			<nav className='navbar'>
				<div className='navbar-container container'>
					<input type='checkbox' name='' id='' />
					<div className='hamburger-lines'>
						<span className='line line1'></span>
						<span className='line line2'></span>
						<span className='line line3'></span>
					</div>
					<ul className='menu-items'>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<a href='#about'>About</a>
						</li>
						<li>
							<a href='#Projects'>Projects</a>
						</li>
						<li>
							<a href='#contact'>Contact</a>
						</li>
						<li>
							<Link to='/login'>Login</Link>
						</li>
					</ul>
					{/* <img src={logo} className="logo" alt="Rupayan" width="300px" /> */}
					<h1 className='logo'>RK</h1>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
