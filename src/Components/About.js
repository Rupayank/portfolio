import React from "react";

const About = () => {
	return (
		<>
			<section className="section about">
				<div className="section-center about-center">
					<article className="about-img">
						<img
							src="./images/about-img.jpeg"
							className="hero-photo"
							alt="about img"
						/>
					</article>

					<article className="about-info">
						<div className="section-title about-title">
							<h2>about</h2>
							<div className="underline"></div>
						</div>

						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
							quae, eum maiores est enim earum fugiat aspernatur. Fuga qui iste
							amet reiciendis possimus rerum omnis recusandae molestias error
							consequuntur, doloribus inventore reprehenderit officiis. Dolore
							aut, repellendus eius fugiat numquam cumque.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
							quae, eum maiores est enim earum fugiat aspernatur. Fuga qui iste
							amet reiciendis possimus rerum omnis recusandae molestias error
							consequuntur, doloribus inventore reprehenderit officiis. Dolore
							aut, repellendus eius fugiat numquam cumque.
						</p>
						<a href="about.html" className="btn">
							about me
						</a>
					</article>
				</div>
			</section>
		</>
	);
};

export default About;
