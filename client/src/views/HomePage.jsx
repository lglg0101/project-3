import React, { Component } from 'react';
import './HomePage.scss';
import { Link } from 'react-router-dom';
import Footer from './../components/Footer';
import MapView from './../components/Map';

export default function HomePage() {
	return (
		<div className="d-flex homeContainer">
			<div className="d-flex headerContainer">
				<h1>THRIFT POINT</h1>

				<div className="d-flex linksContainer">
					<Link className="d-flex myButton" to="/sign-in">
						SIGN IN
					</Link>
					<Link className="d-flex mybutton2" to="/sign-up">
						SIGN UP
					</Link>
				</div>
			</div>

			<div className="d-flex flex-row stickerContainer">
				<div className="d-flex community">
					<Link className="d-flex homeLinkC" to="/community">
						COMMUNITY
					</Link>
				</div>
				<div className="stores">
					<Link className="homeLinkS" to="/stores">
						STORES
					</Link>
				</div>
			</div>
			<div>
				
			</div>
				<Footer />
		</div>
	);
}
