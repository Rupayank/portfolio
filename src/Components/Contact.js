import React from "react";

const Contact = () => {
	return (
		<>
			<section className="connect">
				<video
					controls
					autoplay
					muted
					loop
					className="video-container"
					poster="./images/project-1.jpeg"
				>
					<source src="./videos/connect.mp4" type="video/mp4" />
					Sorry, your browser does not support embedded videos
				</video>
				<div className="video-banner">
					{/* <!-- section title --> */}
					<div className="section-title">
						<h2>let's get in touch</h2>
						<div className="underline"></div>
					</div>
					{/* <!--end of section title --> */}
					<p className="video-text">
						If you want to recruit/hire me or want to enquire more about me feel
						free to contact by clicking the button below.
					</p>
					<a href="contact.html" className="btn">
						contact me
					</a>
				</div>
			</section>
		</>
	);
};

export default Contact;
