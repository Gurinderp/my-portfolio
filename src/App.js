import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./pages/Footer";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Nav />
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/resume">
					<Resume />
				</Route>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
