import React from "react";
import "./index.css";
import self from "../../assets/self.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

function Home() {
	return (
		<div className="container">
			<div className="heading">
				<img className="self-pic" src={self} />
				<h3 className="heading-text">
					<p>Hello World!</p>
					<p>
						My Name is Gurinderpreet Singh, AKA Gurinder, and I am a
						Full Stack Developer with a love for coding!
					</p>
				</h3>
			</div>

			<div className="media-links">
				<a href="#">
					<img src={github} />
					<p>GitHub</p>
				</a>
				<a href="#">
					<img src={linkedin} />
					<p>LinkedIn</p>
				</a>
			</div>
			<div className="skills">
				<div className="skill-wording">
					<p>Technical Knowledge</p>
				</div>
				<div className="skill-image">
					<div className="row-one">
						<div className="skill-container">
							<img src={self} />
							<p>HTML</p>
						</div>
						<div className="skill-container">
							<img src={self} />
							<p>CSS</p>
						</div>
						<div className="skill-container">
							<img src={self} />
							<p>JavaScript</p>
						</div>
					</div>
					<div className="mern-row">
						<div className="skill-container">
							<img src={self} />
							<p>MongoDB</p>
						</div>
						<div className="skill-container">
							<img src={self} />
							<p>Express</p>
						</div>
						<div className="skill-container">
							<img src={self} />
							<p>React</p>
						</div>
						<div className="skill-container">
							<img src={self} />
							<p>NodeJS</p>
						</div>
					</div>
					<div className="row-three">
						<div className="skill-container">
							<img src={self} />
							<p>MySQL</p>
						</div>
						<div className="skill-container">
							<img src={self} />
							<p>Angular</p>
						</div>
					</div>
				</div>
			</div>
			<div className="project-list">
				<div className="proj-text">Projects</div>
				<div className="proj-list">
					<img src="#" />
					<a href="#">Deployed Link</a>
					<a href="#">GitHub Link</a>
					<img src="#" />
					<a href="#">Deployed Link</a>
					<a href="#">GitHub Link</a>
					<img src="#" />
					<a href="#">Deployed Link</a>
					<a href="#">GitHub Link</a>
					<img src="#" />
					<a href="#">Deployed Link</a>
					<a href="#">GitHub Link</a>
				</div>
			</div>
			<div className="footer">Footer</div>
		</div>
	);
}

export default Home;
