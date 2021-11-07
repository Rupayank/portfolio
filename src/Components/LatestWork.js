import React, { useState, useEffect } from "react";
import giz from "../Images/giz.png";
import terror from "../Images/terror.png";
import insurrd from "../Images/insurrd.png";
import axios from "axios";

const LatestWork = () => {
	const [works, setWorks] = useState([]);
	const getData = async () => {
		const res = await axios.get("http://localhost:3340/work");
		setWorks(res.data.response);
		console.log(works);
	};
	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			{works.length > 0 ? console.log(works) : console.log("None")}
			<section className='section projects'>
				<div className='section-title'>
					<h2>latest works</h2>
					<div className='underline'></div>
					<p className='projects-text'>
						This Section gives a brief glimpse of mini projects and internship
						projects done by me in the Last One Year.
					</p>
				</div>
				<div className='section-center projects-center'>
					{works.map((work) => {
						const { id, projectName, companyName, url } = work;
						return (
							<>
								<a key={id} href={url} className='project-1'>
									<article className='project'>
										<img src={giz} alt='' className='project-img' />
										<div className='project-info'>
											<h4>{projectName}</h4>
											<p>{companyName}</p>
										</div>
									</article>
								</a>
							</>
						);
					})}
					{/* <a href='projects.html' className='project-1'>
						<article className='project'>
							<img src={giz} alt='' className='project-img' />
							<div className='project-info'>
								<h4>Process Management System</h4>
								<p>GIZ- Vatan Textiles Pvt. Ltd.</p>
							</div>
						</article>
					</a>
					<a
						href='https://terrorism-trend-analysis.herokuapp.com/'
						className='project-2'
					>
						<article className='project'>
							<img src={terror} alt='' className='project-img' />
							<div className='project-info'>
								<h4>Predictive Analysis Tool</h4>
								<p>Forsk Technologies Pvt. Ltd.</p>
							</div>
						</article>
					</a>
					<a href='projects.html' className='project-3'>
						<article className='project'>
							<img src={insurrd} alt='' className='project-img' />
							<div className='project-info'>
								<h4>Web Development Intern</h4>
								<p>Applex.in</p>
							</div>
						</article>
					</a> */}

					{/* <a href='projects.html' className='project-4'>
						<article className='project'>
							<img
								src='./images/project-4.jpeg'
								alt='single project'
								className='project-img'
							/>
							<div className='project-info'>
								<h4>Trainee</h4>
								<p>AFour Technologies PVT. LTD.</p>
							</div>
						</article>
					</a> */}
				</div>
			</section>
		</>
	);
};

export default LatestWork;
