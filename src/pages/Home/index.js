import React from "react";
import "./index.css";
import self from "../../assets/self.png";
import express from "../../assets/express.jpg";
import mysql from "../../assets/mysql.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import projone from "../../assets/idprojsample.png";
import projtwo from "../../assets/idprojsample.png";
import dayplanner from "../../assets/dayplanner.png";
import fitness from "../../assets/ftnstrkr.png";
import jquery from "../../assets/jquery.png";

function Home() {
	return (
		<div className="container">
			<div className="heading">
				<div className="heading-left">
					<div className="heading-name">
						<p>Gurinderpreet<br />Singh</p>
					</div>
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
				<div className="heading-right">
					<p className="heading-title">Full Stack <br /> Developer</p>
					<p className="heading-hello">Hello world!</p>
				</div>	
			</div>
			<div className="project-list">
				<div className="proj-text">Projects</div>
				<div className="proj-list">
					<div className="proj-row">
						<div className="projects">
							<div className="projects-card">
								<div className="card-left">
								<img
									src={projone}
									alt="first project"
									className="proj-card"
								/>
								<div className="deployed-links">
									<a
										href="https://gbrochure-site.herokuapp.com/"
										target="_blank"
										rel="noopener noreferrer"
									>Deployed
										<img
											src="https://img.icons8.com/flat_round/50/000000/arrow--v1.png"
											alt="deployed"
										/>
									</a>
									<a
										href="https://github.com/Gurinderp/brochure-site"
										target="_blank"
										rel="noopener noreferrer"
									>GitHub
										<img
											src="https://img.icons8.com/clouds/50/000000/github.png"
											alt="github"
										/>
									</a>
								</div>
								</div>
								<div className="card-right">
									<div className="tech-descrip">
										<u>Built Using</u>
										<p>HTML, CSS, JavaScript, and React</p>
									</div>
									<div className="proj-descrip">
										<p>This project was designed as a travel brochure website. The project uses India as a foundation, and its design was inspired by the Flag of India.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="projects">
							<div className="projects-card">
								<div className="card-left">
								<img src={projtwo} alt="second project" className="proj-card"/>
								<div className="deployed-links">
									<a
										href="https://gurinderp.github.io/bootcamp-group-project-2/"
										target="_blank"
										rel="noopener noreferrer"
									>Deployed
										<img
											src="https://img.icons8.com/flat_round/50/000000/arrow--v1.png"
											alt="deployed"
										/>
									</a>
									<a
										href="https://github.com/Gurinderp/bootcamp-group-project-2"
										target="_blank"
										rel="noopener noreferrer"
									>GitHub
										<img
											src="https://img.icons8.com/clouds/50/000000/github.png"
											alt="github"
										/>
									</a>
								</div>
								</div>
								<div className="card-right">
									<div className="tech-descrip">
										<u>Built Using</u>
										<p>HTML, CSS, JavaScript, and React</p>
									</div>
									<div className="proj-descrip">
										<p>This project was designed as a travel brochure website. The project uses India as a foundation, and its design was inspired by the Flag of India.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="proj-row">
						<div className="projects">
							<div className="projects-card">
								<div className="card-left">
								<img src={dayplanner} alt="third project" className="proj-card"/>
								<div className="deployed-links">
									<a href="https://gurinderp.github.io/dayPlanner/"
										target="_blank"
										rel="noopener noreferrer">Deployed
										<img
											src="https://img.icons8.com/flat_round/50/000000/arrow--v1.png"
											alt="deployed"
											/>
									</a>
									<a
										href="https://github.com/Gurinderp/dayPlanner"
										target="_blank"
										rel="noopener noreferrer"
										>GitHub
										<img
											src="https://img.icons8.com/clouds/50/000000/github.png"
											alt="github"
											/>
									</a>
								</div>
								</div>
								<div className="card-right">
									<div className="tech-descrip">
										<u>Built Using</u>
										<p>HTML, CSS, JavaScript, and React</p>
									</div>
									<div className="proj-descrip">
										<p>This project was designed as a travel brochure website. The project uses India as a foundation, and its design was inspired by the Flag of India.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="projects">
							<div className="projects-card">
								<div className="card-left">
									<img src={fitness} alt="fourth project" className="proj-card"/>
									<div className="deployed-links">
									<a href="https://ftnesstracker.herokuapp.com/"
										target="_blank"
										rel="noopener noreferrer">Deployed
										<img
											src="https://img.icons8.com/flat_round/50/000000/arrow--v1.png"
											alt="deployed"
											/>
									</a>
									<a
										href="https://github.com/Gurinderp/fitness-tracker"
										target="_blank"
										rel="noopener noreferrer"
										>GitHub
										<img
											src="https://img.icons8.com/clouds/50/000000/github.png"
											alt="github"
											/>
									</a>
									</div>
								</div>
								<div className="card-right">
									<div className="tech-descrip">
										<u>Built Using</u>
										<p>HTML, CSS, JavaScript, and React</p>
									</div>
									<div className="proj-descrip">
										<p>This project was designed as a travel brochure website. The project uses India as a foundation, and its design was inspired by the Flag of India.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
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


			
		</div>
	);
}

export default Home;
