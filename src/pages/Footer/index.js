import React from "react";
import "./index.css";

function Footer() {
	return (
		<div className="footer-container">
			<div className="bot-sect">
				<p className="footer-title">About Me</p>
				<br />
				<p>
					I am a Full Stack Developer experimenting with different
					themes and technologies to improve and increase my skillset.
				</p>
				<br />
				<p>©Gurinderpreet Singh 2020</p>
			</div>
			<div className="bot-sect">
				<p className="footer-title">About This Website</p>
				<br />
				<p>
					This website was made using React. It showcases my skills, abilities, and some projects. Contact is available using the following methods.
				</p>
			</div>
			<div className="bot-sect">
				<p className="footer-title">Contact Methods:</p>
				<br />
				<ul>
					<li>Phone: (916) 767-6512</li>
					<li>Email: sgurinderpreet@gmail.com</li>
					<li>LinkedIn: www.linkedin.com/in/gurinderpreet-singh</li>
				</ul>
			</div>
		</div>
	);
}
export default Footer;