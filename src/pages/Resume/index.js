import React from "react";
import "./index.css";
import pdf from "../../assets/WebDev.pdf";

function Resume() {
	return (
		<div className="container resume-container">
			{/*
			<div className="resume-selection-btns">
				<button className="resume-skills-btn">Skills</button>
				<button className="resume-projects-btn">Projects</button>
				<button className="resume-education-btn">Education</button>
				<button className="resume-download-btn">Download</button>
			</div>
			*/}
			<div className="resume-summary-section">
				<div>
					<p>Summary</p>
					<p>
						Certified Full Stack Web Developer specializing in React
						Development. Achieved at the University of California,
						Davis Extended Learning boot camp. Driven to succeed
						with a life-long dedication to learning. Adaptable and
						constantly honing developmental skills to become
						well-rounded and comprehensive. Currently in pursuit of
						a Computer Science degree.
					</p>
				</div>
			</div>
			<div className="hide resume-skills-section">
				<div className="resume-skills-languages">
					<p>HTML</p>
					<p>CSS</p>
					<p>JavaScript</p>
					<p>Python</p>
				</div>
				<div className="resume-skills-tools">
					<p>Bootstrap</p>
					<p>jQuery</p>
					<p>Git</p>
					<p>GitHub</p>
					<p>Node.JS</p>
					<p>Express</p>
					<p>MySQL</p>
					<p>Sequelize</p>
					<p>MongoDB</p>
					<p>Mongoose</p>
					<p>Handlebars.js</p>
					<p>Postman</p>
					<p>Heroku</p>
					<p>React</p>
				</div>
			</div>
			<div className="hide resume-education-section">
				<p>Education</p>
				<div>
					<p>University of California, Davis</p>
					<p>Web Development Boot Camp - 2019-2020</p>
					<p>
						A 24-week intensive program focused on building
						technical programming skills in HTML5, CSS3, Javascript,
						JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express,
						Handelbars.js &amp; ReactJS. The program provided career
						ready skills for both front-end and back-end
						development.
					</p>
				</div>
				<div>
					<p>Cosumnes River College</p>
					<p>Associate in Science, Computer Science - In Progress</p>
					<p>Expected Graduation: December 2021</p>
				</div>
			</div>
			<div className="hide resume-download-section">
				<embed src={pdf}></embed>
			</div>
		</div>
	);
}

export default Resume;
