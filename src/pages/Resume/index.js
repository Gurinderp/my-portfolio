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
			<div className="resume-summary-section resume-section-containers">
				<div>
					<p className="resume-section-title">Summary</p>
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
			<div className="resume-skills-section resume-section-containers">
				<div className="resume-skills-languages">
					<p className="resume-section-title">Knowledge</p>
					<p>Languages: HTML, CSS, JavaScript, Python</p>
				</div>
				<div className="resume-skills-tools">
					<p>
						Tools: jQuery, Bootstrap, Git, GitHub, Node.js, Express,
						MySQL, Sequelize, MongoDB, Mongoose, Handlebars.js,
						Postman, Heroku, &amp; React.
					</p>
				</div>
			</div>
			<div className="resume-education-section resume-section-containers">
				<p className="resume-section-title">Education</p>
				<div>
					<p className="education-schoolname">
						University of California, Davis
					</p>
					<p className="education-degree">
						Web Development Boot Camp - 2019-2020
					</p>
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
					<p className="education-schoolname crc">
						Cosumnes River College
					</p>
					<p className="education-degree">
						Associate in Science, Computer Science - In Progress
					</p>
					<p>Expected Graduation: December 2021</p>
				</div>
			</div>
			<div className="resume-download-section">
				<p className="resume-section-title">Download Below</p>
				<embed src={pdf}></embed>
			</div>
		</div>
	);
}

export default Resume;
