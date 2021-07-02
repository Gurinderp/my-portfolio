import React from "react";
import "./index.css";
import express from "../../assets/express.jpg";
import mysql from "../../assets/mysql.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import projone from "../../assets/idprojsample.png";
import projtwo from "../../assets/buonbrpic.png";
import dayplanner from "../../assets/dayplanner.png";
import vanDex from "../../assets/vanDex.png";
import jquery from "../../assets/jquery.png";
import heroku from "../../assets/heroku-logo.png";
import bootstrap from "../../assets/bootstraplogo.png";
import webpack from "../../assets/webpacklogo.png";
import python from "../../assets/pythonlogo.png";
import git from "../../assets/gitlogo.png";
import github from "../../assets/githublogo.png";
import restapi from "../../assets/restapilogo.png";

function Home() {
	return (
		<div className="container">
			<div className="heading">
				<div className="heading-left">
					<div className="heading-name">
						<p>Gurinderpreet Singh</p>
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
					<p className="heading-title">Full Stack Developer</p>
					<div className="heading-hello">
						<p>console.log("Hello World!")</p>
					</div>
				</div>
			</div>
			<div className="homepage-links">
				<button>
					<a href="#projectList">PROJECTS</a>
				</button>
				<button>
					<a href="#skills">SKILLS</a>
				</button>
			</div>
			<div className="project-list" id="projectList">
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
										>
											Deployed
											<img
												src="https://img.icons8.com/flat_round/50/000000/arrow--v1.png"
												alt="deployed"
											/>
										</a>
										<a
											href="https://github.com/Gurinderp/brochure-site"
											target="_blank"
											rel="noopener noreferrer"
										>
											GitHub
											<img
												src="https://img.icons8.com/clouds/50/000000/github.png"
												alt="github"
											/>
										</a>
									</div>
								</div>
								<div className="card-right">
									<div className="tech-descrip">
										<p className="project-title">
											Brochure Example Site
										</p>
										<u>Built Using</u>
										<p>HTML, CSS, JavaScript, and React</p>
									</div>
									<div className="proj-descrip">
										<p>
											This project was designed as a
											travel brochure website. The project
											uses India as a foundation, and its
											design was inspired by the Flag of
											India.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="projects">
							<div className="projects-card">
								<div className="card-left">
									<img
										src={projtwo}
										alt="second project"
										className="proj-card"
									/>
									<div className="deployed-links">
										<a
											href="https://butteronbread.herokuapp.com/"
											target="_blank"
											rel="noopener noreferrer"
										>
											Deployed
											<img
												src="https://img.icons8.com/flat_round/50/000000/arrow--v1.png"
												alt="deployed"
											/>
										</a>
										<a
											href="https://github.com/Gurinderp/butteronbread"
											target="_blank"
											rel="noopener noreferrer"
										>
											GitHub
											<img
												src="https://img.icons8.com/clouds/50/000000/github.png"
												alt="github"
											/>
										</a>
									</div>
								</div>
								<div className="card-right">
									<div className="tech-descrip">
										<p className="project-title">
											Butter On Bread
										</p>
										<u>Built Using</u>
										<p>HTML, CSS, JavaScript, and React.</p>
									</div>
									<div className="proj-descrip">
										<p>
											Designed as a sample product site,
											this project focuses on "butter on
											bread".
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="proj-row">
						<div className="projects">
							<div className="projects-card">
								<div className="card-left">
									<img
										src={dayplanner}
										alt="third project"
										className="proj-card"
									/>
									<div className="deployed-links">
										<a
											href="https://gurinderp.github.io/dayPlanner/"
											target="_blank"
											rel="noopener noreferrer"
										>
											Deployed
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
											GitHub
											<img
												src="https://img.icons8.com/clouds/50/000000/github.png"
												alt="github"
											/>
										</a>
									</div>
								</div>
								<div className="card-right">
									<div className="tech-descrip">
										<p className="project-title">
											Day Planner
										</p>
										<u>Built Using</u>
										<p>
											HTML, CSS, JavaScript, and Moment JS
										</p>
									</div>
									<div className="proj-descrip">
										<p>
											A simple day planner used to keep
											track of tasks. The project uses
											local time to determine which tasks
											should be complete, should be
											completed soon, and which can be
											done later.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="projects">
							<div className="projects-card">
								<div className="card-left">
									<img
										src={vanDex}
										alt="fourth project"
										className="proj-card"
									/>
									<div className="deployed-links">
										<a
											href="https://vanilla-dex.herokuapp.com/"
											target="_blank"
											rel="noopener noreferrer"
										>
											Deployed
											<img
												src="https://img.icons8.com/flat_round/50/000000/arrow--v1.png"
												alt="deployed"
											/>
										</a>
										<a
											href="https://github.com/Gurinderp/vanillaDex"
											target="_blank"
											rel="noopener noreferrer"
										>
											GitHub
											<img
												src="https://img.icons8.com/clouds/50/000000/github.png"
												alt="github"
											/>
										</a>
									</div>
								</div>
								<div className="card-right">
									<div className="tech-descrip">
										<p className="project-title">
											Vanilla Dex
										</p>
										<u className="builtusing-text">
											Built Using
										</u>
										<p>
											HTML, CSS/SASS, JavaScript, EJS,
											Node.js, Express, Heroku and MongoDB
										</p>
									</div>
									<div className="proj-descrip">
										<p>
											A Full Stack project which utilizes
											the EJS view engine. A PokeDex made
											using the MVC paradigm. The theme
											follows the colors of the first
											PokeDex shown in the original
											series.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="skills" id="skills">
				<div className="skill-wording">
					<p>Technical Knowledge</p>
				</div>
				<div className="skill-image">
					<div className="row">
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
						<div className="skill-container">
							<img
								src="https://img.icons8.com/nolan/96/react-native.png"
								alt="React"
							/>
							<p>React</p>
						</div>
					</div>
					<div className="row">
						<div className="skill-container">
							<img src={jquery} alt="JQuery" />
							<p>JQuery</p>
						</div>
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
								src="https://img.icons8.com/color/96/000000/nodejs.png"
								alt="Node.JS"
							/>
							<p>NodeJS</p>
						</div>
					</div>
					<div className="row">
						<div className="skill-container">
							<img src={mysql} alt="MySQL" />
							<p>MySQL</p>
						</div>
						<div className="skill-container">
							<img src={heroku} alt="Heroku" />
							<p>Heroku</p>
						</div>
						<div className="skill-container">
							<img src={bootstrap} alt="Bootstrap" />
							<p>Bootstrap</p>
						</div>
						<div className="skill-container">
							<img src={webpack} alt="Webpack" />
							<p>Webpack</p>
						</div>
					</div>
					<div className="row">
						<div className="skill-container">
							<img src={python} alt="MySQL" />
							<p>Python</p>
						</div>
						<div className="skill-container">
							<img src={git} alt="Heroku" />
							<p>Git</p>
						</div>
						<div className="skill-container">
							<img src={github} alt="Bootstrap" />
							<p>GitHub</p>
						</div>
						<div className="skill-container">
							<img src={restapi} alt="Webpack" />
							<p>Rest API</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
