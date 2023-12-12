import React from "react";
import Navbar from "./component/navbar";
import Jumbotron from "./component/jumbotron"
import { Card } from './component/cards'
import Footer from './component/footer'
import placeholder from '../img/placeholder.jpg'

//create your first component

const Home = () => {
	return (
		<div className="home">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="card-container">
					<div className="row">
						<Card
							cardtitle="Card Title"
							cardimg={placeholder}
							cardtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
							cardbutton="Button"
						/>

						<Card
							cardtitle="Card Title"
							cardimg={placeholder}
							cardtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
							cardbutton="Button"
						/>

						<Card
							cardtitle="Card Title"
							cardimg={placeholder}
							cardtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
							cardbutton="Button"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;