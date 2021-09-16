import React from "react";

const Service = () => {
	return (
		<>
			<section className="section bg-grey">
				<div className="section-title">
					<h2>My Domains</h2>
					<div className="underline"></div>
				</div>

				<div className="services-center section-center">
					<article className="service">
						<i className="fas fa-code service-icon"></i>
						<h4>Web development</h4>
						<div className="underline"></div>
						<p>
							Full Stack Web development using MERN web development framework.
						</p>
					</article>

					<article className="service">
						<i className="fas fa-code service-icon"></i>
						<h4>VAPT</h4>
						<div className="underline"></div>
						<p>
							Vulnerability assessment and penetration testing for web application security.
						</p>
					</article>

					<article className="service">
						<i className="fab fa-sketch service-icon"></i>
						<h4>Android Application Development</h4>
						<div className="underline"></div>
						<p>Develop android applications using Android Studio.</p>
					</article>
				</div>
			</section>
		</>
	);
};

export default Service;
