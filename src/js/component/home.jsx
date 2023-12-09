import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron"
import { Card } from './cards'
import Footer from './footer'

//create your first component
const Home = () => {
	return (
		<div className="home">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Card />
			</div>
			<Footer />
		</div>
	);
};

export default Home;