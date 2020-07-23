import React from "react";
import "./index.css";
import pdf from "../../assets/resume.pdf";

function Resume() {
	return (
		<div className="container">
			<embed src={pdf}></embed>
		</div>
	);
}

export default Resume;
