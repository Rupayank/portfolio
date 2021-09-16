import React from "react";

const LatestWork = () => {
	return (
		<>
			<section className="section projects">
				<div className="section-title">
					<h2>latest works</h2>
					<div className="underline"></div>
					<p className="projects-text">
						This Section gives a brief glimpse of mini projects and internship
						projects done by me in the Last One Year.
					</p>
				</div>
				<div className="section-center projects-center">
					<a href="projects.html" className="project-1">
						<article className="project">
							<img
								src="./images/project-1.jpeg"
								alt=""
								className="project-img"
							/>
							<div className="project-info">
								<h4>Process Management System</h4>
								<p>GIZ- Vatan Textiles Pvt. Ltd.</p>
							</div>
						</article>
					</a>
					<a href="https://terrorism-trend-analysis.herokuapp.com/" className="project-2">
						<article className="project">
							<img
								src="./images/project-2.jpeg"
								alt=""
								className="project-img"
							/>
							<div className="project-info">
								<h4>Predictive Analysis Tool</h4>
								<p>Forsk Technologies Pvt. Ltd.</p>
							</div>
						</article>
					</a>
					<a href="projects.html" className="project-3">
						<article className="project">
							<img
								src="./images/project-3.jpeg"
								alt=""
								className="project-img"
							/>
							<div className="project-info">
								<h4>Web Development Intern</h4>
								<p>Applex.in</p>
							</div>
						</article>
					</a>

					{/* <!-- end of single project --><!-- single project --> */}
					<a href="projects.html" className="project-4">
						<article className="project">
							<img
								src="./images/project-4.jpeg"
								alt="single project"
								className="project-img"
							/>
							<div className="project-info">
								<h4>project title</h4>
								<p>client name</p>
							</div>
						</article>
					</a>
					{/* <!-- end of single project --> */}
				</div>
			</section>
		</>
	);
};

export default LatestWork;
