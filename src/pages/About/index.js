import React from "react";
import "./index.css";
import self from "../../assets/self.png";

function About() {
	return (
		<div className="about-container container">
			<div className="aboutme-top">
				<div className="selfpic">
					<img src={self} alt="self-pic" className="my-pic" />
				</div>
				<div className="topright-about">
					<p>Hello World!</p>
					<br />
					<p>My name is Gurinderpreet Singh</p>
					<div className="media-links aboutpage-media">
						<a
							href="https://github.com/Gurinderp"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://img.icons8.com/clouds/50/000000/github.png"
								alt="github"
							/>
							<p>GitHub</p>
						</a>

						<a
							href="https://www.linkedin.com/in/gurinderpreet-singh/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://img.icons8.com/clouds/50/000000/linkedin.png"
								alt="linkedin"
							/>
							<p>LinkedIn</p>
						</a>
					</div>
				</div>
			</div>
			<div className="aboutme-bottom">
				<p>
					I began coding with HTML and CSS back in early 2018. I liked
					coding as a hobby, but I never thought I could gain enough
					skill to turn it into a career. That all changed during 2019
					when I enrolled in a boot camp at UC Davis for Full Stack
					web development.
				</p>
				<p>
					Since then, I have been developing websites with React and
					made a few applications with the MERN stack. I've been
					experimenting with various technologies on my own since the
					end of the boot camp, and I have been practicing new
					languages such as Python or Typescript to master the Django
					stack and Angular.
				</p>
			</div>
		</div>
	);
}

export default About;
