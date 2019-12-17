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
				<div className="d-flexlinksContainer">
					<Link className="buttonLink" to="/sign-in">
						Sign In
					</Link>
					<Link className="d-flex buttonLink" to="/sign-up">
						Sign Up
					</Link>
				</div>
			</div>

			<div className="d-flex flex-row stickerContainer">
				<div className="d-flex community">
					<Link className="d-flex homeLinkC" to="/community">
						C o m m u n i t y
					</Link>
				</div>
				<div className="stores">
					<Link className="homeLinkS" to="/stores">
						S t o r e s
					</Link>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}
