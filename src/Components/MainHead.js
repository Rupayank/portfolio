import React, { Component } from "react";
import Typical from "react-typical";
import dp from "../Images/ME.jpg";
import { SocialIcon } from "react-social-icons";
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Service";
import Latest from "./LatestWork";
import Contact from "./Contact";
import MainFoot from "./MainFoot";
import { useState } from "react";

const MainHead = () => {
	const [latest, setLatest] = useState(false);
	const [domain, setDomain] = useState(false);
	return (
		<>
			<Navbar />
			<header className='hero'>
				<div className='section-center hero-center'>
					<article className='hero-info'>
						<div className='underline'></div>
						<h1>Rupayan Karanjai</h1>
						<h4 className='fw-bold'>
							{" "}
							<Typical
								loop={Infinity}
								steps={[
									"Full Stack web Developer",
									1000,
									"Android Developer",
									1000,
									"Ethical Hacker",
									1000,
								]}
							/>
						</h4>
						<a href='contact.html' className='btns hero-btn'>
							Hire me
						</a>
						<ul className='social-icons hero-icons'>
							<li>
								<SocialIcon url='https://www.linkedin.com/in/rupayan-karanjai-25612268/' />
							</li>
							<li>
								<SocialIcon url='https://github.com/Rupayank' />
							</li>
							<li>
								<SocialIcon url='https://www.facebook.com/rupayan.karanjai/' />
							</li>
						</ul>
					</article>
					<article className='hero-img'>
						<img src={dp} className='hero-photo' alt='Rupayan Karanjai' />
					</article>
				</div>
			</header>
			<About />
			<div className='bg-light'>
				<div className='row p-3'>
					<button
						id='domain-btn'
						className='container col-2 btn btn-warning'
						onClick={() => setDomain(!domain)}
					>
						My Domains
					</button>
				</div>
				{domain && <Services />}
				<div className='row'>
					<button
						className='container col-2 btn btn-warning'
						onClick={() => setLatest(!latest)}
					>
						Latest Work
					</button>
					{latest && <Latest />}
				</div>
			</div>

			<Contact />
			{/* <Skill /> */}
			{/* <Timeline /> */}
			<MainFoot />
		</>
	);
};

export default MainHead;
