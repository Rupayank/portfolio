import React, { useState, useEffect } from "react";
import giz from "../Images/giz.png";
// import terror from "../Images/terror.png";
// import insurrd from "../Images/insurrd.png";
import axios from "axios";

const LatestWork = () => {
	const [works, setWorks] = useState([]);
	const getData = async () => {
		const res = await axios.get("http://localhost:3340/work");
		setWorks(res.data.response);
	};

	useEffect((e) => {
		getData();
	}, []);

	return (
		<>
			<section className='section projects'>
				<div className='section-title'>
					<h2>latest works</h2>
					<div className='underline'></div>
					<p className='projects-text'>
						This Section gives a brief glimpse of mini projects and internship
						projects done by me in the Last One Year.
					</p>
				</div>

				<div className='row' style={{ justifyContent: "space-evenly" }}>
					{works.map((work, index) => {
						const { _id, projectName, companyName, url } = work;
						// let pro = `project-${index}`;
						return (
							<>
								<div
									className='card'
									id='work-card'
									style={{
										width: "18rem",
										height: "18rem",
									}}
									key={_id}
								>
									<img src={giz} className='card-img-top' alt='' />
									<div className='card-body'>
										<h5 className='card-title'>{projectName}</h5>
										<p className='card-text'>{companyName}</p>
										<a href={url} className='btn btn-primary'>
											Link
										</a>
									</div>
								</div>
								{/* <a key={id} href={url} className={pro}> */}
								{/* <article className='project'> */}
								{/* <img src={giz} alt='' className='project-img' /> */}
								{/* <div className='project-info'> */}
								{/* <h4>{projectName}</h4> */}
								{/* <p>{companyName}</p> */}
								{/* </div> */}
								{/* </article> */}
								{/* </a> */}
							</>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default LatestWork;
