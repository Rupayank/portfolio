import React from "react";
import { Link } from "react-router-dom";
import "../login.css";
const Login = () => {
	return (
		<>
			<div className='login-wrap'>
				<div className='login-html'>
					<input
						id='tab-1'
						type='radio'
						name='tab'
						className='sign-in'
						checked
					/>
					<label for='tab-1' className='tab'>
						Sign In
					</label>
					<input id='tab-2' type='radio' name='tab' className='sign-up' />
					<label for='tab-2' className='tab'>
						Go back
					</label>
					<div className='login-form'>
						<div className='sign-in-htm'>
							<div className='group'>
								<label for='user' className='label'>
									Username
								</label>
								<input id='user' type='text' className='input' />
							</div>
							<div className='group'>
								<label for='pass' className='label'>
									Password
								</label>
								<input
									id='pass'
									type='password'
									className='input'
									data-type='password'
								/>
							</div>
							<div className='group'>
								<input id='check' type='checkbox' className='check' checked />
								<label for='check'>
									<span className='icon'></span> Keep me Signed in
								</label>
							</div>
							<div className='group'>
								<Link to='/admin' className='button'>
									Sign In
								</Link>
								{/* <input type='submit' className='button' value='Sign In' /> */}
							</div>
							<div className='foot-lnk'>
								<a href='#forgot'>Forgot Password?</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Login;
