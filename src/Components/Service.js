import React, { useState, useEffect } from "react";
import axios from "axios";

const Service = () => {
	const [domains, setDomains] = useState([]);
	const getDomains = async () => {
		const res = await axios.get("http://localhost:3340/domain");
		setDomains(res.data.response);
	};
	useEffect(() => {
		getDomains();
	}, []);
	return (
		<>
			{domains.length >= 1 ? (
				<section className='section bg-grey'>
					<div className='section-title'>
						<h2>My Domains</h2>
						<div className='underline'></div>
					</div>

					<div className='services-center section-center'>
						{domains.map((domain) => {
							const { _id, name, description } = domain;
							return (
								<>
									<article key={_id} className='service'>
										<i className='fas fa-code service-icon'></i>
										<h4>{name}</h4>
										<div className='underline'></div>
										<p>{description}</p>
									</article>
								</>
							);
						})}
					</div>
				</section>
			) : (
				<section className='section bg-grey'>
					<div className='section-title'>
						<h3>Server error 500</h3>
					</div>
				</section>
			)}
		</>
	);
};

export default Service;
