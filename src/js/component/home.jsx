import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron"
import {Card} from './cards'

//create your first component
const Home = () => {
	return (
		<div className="home-container">
			<Navbar />
			<Jumbotron />
			<Card />
		</div>
	);
};

export default Home;