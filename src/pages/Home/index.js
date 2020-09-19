import React from "react";
import "./index.css";
import self from "../../assets/self.png";
import express from "../../assets/express.jpg";
import mysql from "../../assets/mysql.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import projone from "../../assets/projone.png";
import projtwo from "../../assets/bgp2.png";
import dayplanner from "../../assets/dayplanner.png";
import fitness from "../../assets/ftnstrkr.png";
import jquery from "../../assets/jquery.png";

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
						My Name is Gurinderpreet Singh, and I am a Full Stack
						Developer with a love for coding!
					</p>
				</h3>
			</div>
			<div className="aboutme-section">
				<p className="aboutme-text">
					I began learning how to code with HTML and CSS in early
					2018. I later decided to take it one step further and
					enrolled in a coding bootcamp at UC Davis Continuing and
					Professional Education near the end of 2019. From there I
					learned skills and technologies such as JavaScript, JQuery,
					Node.JS and many more!
				</p>
			</div>

			<div className="skills">
				<div className="skill-wording">
					<p>Technical Knowledge</p>
				</div>
				<div className="skill-image">
					<div className="row-one">
						<div className="skill-container">
							<img src={html} alt="HTML" />
							<p>HTML</p>
						</div>
						<div className="skill-container">
							<img src={css} alt="CSS" />

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
						<div className="skill-container">
							<img src={jquery} alt="JQuery" />
							<p>JQuery</p>
						</div>
					</div>
				</div>
			</div>
			<div className="project-list">
				<div className="proj-text">Projects</div>
				<div className="proj-list">
					<div className="proj-row">
						<div className="projects">
							<div className="projects-card">
								<img
									src={projone}
									alt="first project"
									className="proj-card"
								/>
								<div className="deployed-links">
									<a
										href="https://gurinderp.github.io/Bootcamp-group-project-1/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src="https://img.icons8.com/flat_round/50/000000/arrow--v1.png"
											alt="deployed"
										/>
									</a>
									<a
										href="https://github.com/Gurinderp/Bootcamp-group-project-1"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src="https://img.icons8.com/clouds/50/000000/github.png"
											alt="github"
										/>
									</a>
								</div>
							</div>
						</div>
						<div className="projects">
							<div className="projects-card">
								<img src={projtwo} alt="second project" />
								<div className="deployed-links">
									<a
										href="https://gurinderp.github.io/bootcamp-group-project-2/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src="https://img.icons8.com/flat_round/50/000000/arrow--v1.png"
											alt="deployed"
										/>
									</a>
									<a
										href="https://github.com/Gurinderp/bootcamp-group-project-2"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src="https://img.icons8.com/clouds/50/000000/github.png"
											alt="github"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="proj-row">
						<div className="projects">
							<div className="projects-card">
								<img src={dayplanner} alt="third project" />
								<div className="deployed-links">
									<a href="https://gurinderp.github.io/dayPlanner/">
										<img
											src="https://img.icons8.com/flat_round/50/000000/arrow--v1.png"
											alt="deployed"
										/>
									</a>
									<a
										href="https://github.com/Gurinderp/dayPlanner"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src="https://img.icons8.com/clouds/50/000000/github.png"
											alt="github"
										/>
									</a>
								</div>
							</div>
						</div>
						<div className="projects">
							<div className="projects-card">
								<img src={fitness} alt="fourth project" />
								<div className="deployed-links">
									<a href="https://ftnesstracker.herokuapp.com/">
										<img
											src="https://img.icons8.com/flat_round/50/000000/arrow--v1.png"
											alt="deployed"
										/>
									</a>
									<a
										href="https://github.com/Gurinderp/fitness-tracker"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src="https://img.icons8.com/clouds/50/000000/github.png"
											alt="github"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
