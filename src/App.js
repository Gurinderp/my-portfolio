import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
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
					<Link to="https://docs.google.com/document/d/1Uru0NtNcy8BVNJEw6YPwmI3LvvrHwxdgUxDz7XHPb9I/edit?usp=sharing"></Link>
				</Route>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
