import React from "react";
import "./index.css";
import jumbo from "../../assets/jumbotron-example.png";

function Home() {
	return (
		<div>
			<img src={jumbo} className="img-fluid" alt="Responsive image" />
			<div className="jumbo-overlap">
				<img className="self-pic" src="#" />
				<h3>
					Sample text to get the ball rolling. Should appear right of
					the selfie
				</h3>
			</div>
			<div className="media-links">
				<a href="#">
					<img src="#" />
					<p>GitHub</p>
				</a>
				<a href="#">
					<img src="#" />
					<p>LinkedIn</p>
				</a>
			</div>
			<div className="skills">
				<img className="skill-image" src="#" />
				<p>Html</p>
				<img className="skill-image" src="#" />
				<p>Html</p>
				<img className="skill-image" src="#" />
				<p>Html</p>
				<img className="skill-image" src="#" />
				<p>Html</p>
			</div>
			<div className="project-list">
				<img className="proj-list" src="#" />
				<a href="#">Deployed Link</a>
				<a href="#">GitHub Link</a>
				<img className="proj-list" src="#" />
				<a href="#">Deployed Link</a>
				<a href="#">GitHub Link</a>
				<img className="proj-list" src="#" />
				<a href="#">Deployed Link</a>
				<a href="#">GitHub Link</a>
				<img className="proj-list" src="#" />
				<a href="#">Deployed Link</a>
				<a href="#">GitHub Link</a>
			</div>
			<div className="footer">Footer</div>
		</div>
	);
}

export default Home;
