import React from "react";
import "./index.css";
import self from "../../assets/self.png";
import express from "../../assets/express.jpg";
import mysql from "../../assets/mysql.png";

function Home() {
	return (
		<div className="container">
			<div className="heading">
				<div>
					<img className="self-pic" src={self} alt="self-pic" />
					<div className="media-links">
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
				<h3 className="heading-text">
					<p>Hello World!</p>
					<p>
						My Name is Gurinderpreet Singh, AKA Gurinder, and I am a
						Full Stack Developer with a love for coding!
					</p>
				</h3>
			</div>

			<div className="skills">
				<div className="skill-wording">
					<p>Technical Knowledge</p>
				</div>
				<div className="skill-image">
					<div className="row-one">
						<div className="skill-container">
							<img
								src="https://img.icons8.com/officel/96/000000/html.png"
								alt="HTML"
							/>
							<p>HTML</p>
						</div>
						<div className="skill-container">
							<img
								src="https://img.icons8.com/officel/96/000000/css.png"
								alt="CSS"
							/>
							<p>CSS</p>
						</div>
						<div className="skill-container">
							<img
								src="https://img.icons8.com/color/96/000000/javascript.png"
								alt="JavaScript"
							/>
							<p>JavaScript</p>
						</div>
					</div>
					<div className="mern-row">
						<div className="skill-container">
							<img
								src="https://img.icons8.com/color/96/000000/mongodb.png"
								alt="MongoDB"
							/>
							<p>MongoDB</p>
						</div>
						<div className="skill-container">
							<img src={express} alt="Express" />
							<p>Express</p>
						</div>
						<div className="skill-container">
							<img
								src="https://img.icons8.com/nolan/96/react-native.png"
								alt="React"
							/>
							<p>React</p>
						</div>
						<div className="skill-container">
							<img
								src="https://img.icons8.com/color/96/000000/nodejs.png"
								alt="Node.JS"
							/>
							<p>NodeJS</p>
						</div>
					</div>
					<div className="row-three">
						<div className="skill-container">
							<img src={mysql} alt="MySQL" />
							<p>MySQL</p>
						</div>
						<div className="skill-container">
							<img
								src="https://img.icons8.com/color/96/000000/angularjs.png"
								alt="Angular"
							/>
							<p>Angular</p>
						</div>
					</div>
				</div>
			</div>
			<div className="project-list">
				<div className="proj-text">Projects</div>
				<div className="proj-list">
					<div className="projects">
						<img src={self} alt="first project" />
						<a href="#">Deployed Link</a>
						<a href="#">GitHub Link</a>
					</div>
					<div className="projects">
						<img src={self} alt="second project" />
						<a href="#">Deployed Link</a>
						<a href="#">GitHub Link</a>
					</div>
					<div className="projects">
						<img src={self} alt="third project" />
						<a href="#">Deployed Link</a>
						<a href="#">GitHub Link</a>
					</div>
					<div className="projects">
						<img src={self} alt="fourth project" />
						<a href="#">Deployed Link</a>
						<a href="#">GitHub Link</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
