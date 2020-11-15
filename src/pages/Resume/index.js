import React from "react";
import "./index.css";
import pdf from "../../assets/WebDev.pdf";

function Resume() {
	return (
		<div className="container resume-container">
			<embed src={pdf}></embed>
		</div>
	);
}

export default Resume;
