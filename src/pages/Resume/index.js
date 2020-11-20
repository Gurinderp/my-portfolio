import React from "react";
import "./index.css";
import pdf from "../../assets/WebDev.pdf";

function Resume() {
	return (
		<div className="container resume-container">
			<div className="resume-selection-btns">
				<button className="resume-skills-btn">Skills</button>
				<button className="resume-projects-btn">Projects</button>
				<button className="resume-education-btn">Education</button>
				<button className="resume-download-btn">Download</button>
			</div>
			<div className="resume-skills-section">
				<p>Skills</p>
			</div>
			<div className="hide resume-projects-section">
				<p>Projects</p>
			</div>
			<div className="hide resume-education-section">
				<p>Education</p>
			</div>
			<embed src={pdf} className="hide resume-download-section"></embed>
		</div>
	);
}

export default Resume;
