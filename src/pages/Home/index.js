import React from "react";
import "./index.css";
import jumbo from "../../assets/jumbotron-example.png";

function Home() {
	return (
		<div>
			<img
				src={jumbo}
				className="img-fluid"
				onclick=""
				alt="Responsive image"
			></img>
			<div className="jumbo-overlap">
				<img className="self-pic" src="#"></img>
				<h3>
					Sample text to get the ball rolling. Should appear right of
					the selfie
				</h3>
			</div>
			<div className="media-links">
				<a href="#">
					<img src="#">GitHub</img>
				</a>
				<a href="#">
					<img src="#">LinkedIn</img>
				</a>
			</div>
			<div className="skills">
				<img className="skill-image" src="#"></img>
				<p>Html</p>
				<img className="skill-image" src="#"></img>
				<p>Html</p>
				<img className="skill-image" src="#"></img>
				<p>Html</p>
				<img className="skill-image" src="#"></img>
				<p>Html</p>
			</div>
			<div className="project-list">
				<img className="proj-list" src="#">
					<a href="#">Deployed Link</a>
					<a href="#">GitHub Link</a>
				</img>
				<img className="proj-list" src="#">
					<a href="#">Deployed Link</a>
					<a href="#">GitHub Link</a>
				</img>
				<img className="proj-list" src="#">
					<a href="#">Deployed Link</a>
					<a href="#">GitHub Link</a>
				</img>
				<img className="proj-list" src="#">
					<a href="#">Deployed Link</a>
					<a href="#">GitHub Link</a>
				</img>
			</div>
			<div className="footer">Footer</div>
		</div>
	);
}

export default Home;
