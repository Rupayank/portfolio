import React from "react";
import dp from "../Images/ME.jpg";
import { SocialIcon } from "react-social-icons";
const MainHead = () => {
	return (
		<>
			<header className="hero">
				<div className="section-center hero-center">
					<article className="hero-info">
						<div className="underline"></div>
						<h1>Rupayan Karanjai</h1>
						<h4>Full Stack web and Android Application Developer</h4>
						<a href="contact.html" className="btn hero-btn">
							Hire me
						</a>
						<ul className="social-icons hero-icons">
							<li>
								<SocialIcon url="https://www.linkedin.com/in/rupayan-karanjai-25612268/" />
							</li>
							<li>
								<SocialIcon url="https://github.com/Rupayank" />
							</li>
							<li>
								<SocialIcon url="https://www.facebook.com/rupayan.karanjai/" />
							</li>
						</ul>
					</article>
					<article className="hero-img">
						<img src={dp} className="hero-photo" alt="Rupayan Karanjai" />
					</article>
				</div>
			</header>
		</>
	);
};

export default MainHead;
