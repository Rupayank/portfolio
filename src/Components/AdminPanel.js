import React, { useState, useEffect } from "react";
import axios from "axios";
import "../admin.css";

function AdminPanel() {
	// getters
	const [domainList, setDomainList] = useState([]);
	const [workList, setWorkList] = useState([]);
	const getWork = async () => {
		const res = await axios.get("http://localhost:3340/work");
		setWorkList(res.data.response);
		console.log(workList);
	};
	const getDomain = async () => {
		const res = await axios.get("http://localhost:3340/domain");
		setDomainList(res.data.response);
		console.log(domainList);
	};
	useEffect(() => {
		getWork();
		getDomain();
	}, []);

	// Setters
	const [domain, setDomain] = useState({
		name: "",
		description: "",
	});
	const [work, setWork] = useState({
		projectName: "",
		companyName: "",
		url: "",
	});

	// submitHandlers
	const handleDomainSubmit = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:3340/domain", { domain: domain })
			.then((res) => {
				console.log(res);
				alert("successful insert");
			})
			.catch((err) => {
				console.log(err);
			});

		setDomain({
			name: "",
			description: "",
		});
	};
	const handleWorkSubmit = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:3340/work", { work: work })
			.then((res) => {
				console.log(res);
				alert("successful insert");
			})
			.catch((err) => {
				console.log(err);
			});

		setWork({
			projectName: "",
			companyName: "",
			url: "",
		});
	};

	// Event handler
	function handleChange(event) {
		const { name, value } = event.target;

		setWork((prv) => {
			return {
				...prv,
				[name]: value,
			};
		});
		setDomain((prv) => {
			return {
				...prv,
				[name]: value,
			};
		});
	}
	return (
		<div classNameName=''>
			{/* Domains */}
			<div className='container'>
				<form id='contact' onSubmit={handleDomainSubmit}>
					<h3>Domains</h3>
					<fieldset>
						<input
							placeholder='Domain name'
							onChange={handleChange}
							value={domain.name}
							name='name'
							type='text'
							tabIndex='1'
							required
							autoFocus
						/>
					</fieldset>
					<fieldset>
						<input
							onChange={handleChange}
							value={domain.description}
							name='description'
							placeholder='Description'
							type='text'
							tabIndex='2'
							required
						/>
					</fieldset>
					<fieldset>
						<button
							name='submit'
							type='submit'
							id='contact-submit'
							data-submit='...Sending'
						>
							Submit
						</button>
					</fieldset>
				</form>
			</div>
			<table className='container table table-dark'>
				<thead>
					<tr>
						<th scope='col'>#</th>
						<th scope='col'>Domain</th>
						<th scope='col'>Description</th>
						<th scope='col' colSpan='2'>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{/* <th scope='row'>1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td> */}
					{domainList.map((domain, index) => {
						const { name, description } = domain;
						return (
							<>
								<tr>
									<th scope='row'>{index + 1}</th>
									<td>{name}</td>
									<td>{description}</td>

									<td colSpan='2'>
										<button type='button' class='btn btn-warning m-1'>
											Update
										</button>
										<button type='button' class='btn btn-danger'>
											Delete
										</button>
									</td>
								</tr>
							</>
						);
					})}
				</tbody>
			</table>

			{/* Latest work */}
			<div className='container'>
				<form id='contact' onSubmit={handleWorkSubmit}>
					<h3>Latest work</h3>
					<fieldset>
						<input
							placeholder='Project name'
							name='projectName'
							onChange={handleChange}
							value={work.projectName}
							type='text'
							tabIndex='1'
							required
							autoFocus
						/>
					</fieldset>
					<fieldset>
						<input
							placeholder='Company Name'
							name='companyName'
							onChange={handleChange}
							value={work.companyName}
							type='text'
							tabIndex='2'
							required
						/>
					</fieldset>
					<fieldset>
						<input
							placeholder='URL'
							type='text'
							tabIndex='2'
							required
							name='url'
							onChange={handleChange}
							value={work.url}
						/>
					</fieldset>
					<fieldset>
						<button
							name='submit'
							type='submit'
							id='contact-submit'
							data-submit='...Sending'
						>
							Submit
						</button>
					</fieldset>
				</form>
			</div>
		</div>
	);
}

export default AdminPanel;
