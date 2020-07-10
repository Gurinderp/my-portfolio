import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Nav />
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/projects">
					<Projects />
				</Route>
				<Route path="/resume">
					<Resume />
				</Route>
			</Router>
		</div>
	);
}

export default App;
