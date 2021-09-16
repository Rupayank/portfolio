import React from "react";
import { SocialIcon } from "react-social-icons";

const MainFoot = () => {
	return (
		<>
			<footer className="footer">
				{/* <!-- social icons --> */}
				<ul className="social-icons">
					<li>
						<SocialIcon
							url="https://www.linkedin.com/in/rupayan-karanjai-25612268/"
							bgColor="yellow"
						/>
					</li>
					<li>
						<SocialIcon url="https://github.com/Rupayank" bgColor="yellow" />
					</li>
					<li>
						<SocialIcon
							url="https://www.facebook.com/rupayan.karanjai/"
							bgColor="yellow"
						/>
					</li>
					{/* <li>
						<a href="https://www.twitter.com" className="social-icon">
							<i className="fab fa-facebook"></i>
						</a>
					</li>
					<li>
						<a href="https://www.twitter.com" className="social-icon">
							<i className="fab fa-linkedin"></i>
						</a>
					</li>
					<li>
						<a href="https://www.twitter.com" className="social-icon">
							<i className="fab fa-squarespace"></i>
						</a>
					</li>
					<li>
						<a href="https://www.twitter.com" className="social-icon">
							<i className="fab fa-behance"></i>
						</a>
					</li>
					<li>
						<a href="https://www.twitter.com" className="social-icon">
							<i className="fab fa-instagram"></i>
						</a>
					</li> */}
				</ul>

				<p>
					&copy; <span></span> Rupayan Karanjai. all rights reserved
				</p>
			</footer>
		</>
	);
};

export default MainFoot;
