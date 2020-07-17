import React from "react";
import "./index.css";

function Contact() {
	return (
		<div className="container">
			<div className="contact-info">
				<div>Cell Phone: (916) 767-6512</div>
				<div>Email Address: sgurinderpreet@gmail.com</div>
			</div>
			<div className="submission">
				<form action="mailto:9167676512@tmomail.net">
					<label for="fname">First name:</label>
					<br />
					<input type="text" id="fname" name="fname" />
					<br />
					<label for="lname">Last name:</label>
					<br />
					<input type="text" id="lname" name="lname" />
					<br />
					<label for="message">Message</label>
					<br />
					<input type="text" id="message" name="message" />
					<br />
					<input type="submit" id="submit" value="Submit"></input>
				</form>
			</div>
		</div>
	);
}

export default Contact;
