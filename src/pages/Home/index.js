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
			/>
			<div>Home</div>
		</div>
	);
}

export default Home;
