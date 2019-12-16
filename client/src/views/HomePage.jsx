import React, { Component } from 'react';
import './HomePage.scss';
import { Link } from 'react-router-dom';
import Footer from './../components/Footer';

export default function HomePage() {
	return (
		<div className="homeContainer">
			<div className="headerContainer">
				<h1>THRIFT POINT</h1>
				<div className="linksContainer">
					<Link className="buttonLink" to="/sign-in">
						Sign In
					</Link>

					<Link className="buttonLink" to="/sign-up">
						Sign Up
					</Link>
				</div>
			</div>
			<div className="stickerContainer">
				<div className="community">
					<Link className="homeLinkC" to="/community">
						C o m m u n i t y
					</Link>
				</div>

				<div className="linksAndStores">
					<div className="stores">
						<Link className="homeLinkS" to="/stores">
							S t o r e s
						</Link>
					</div>
					{/* 
					<div className="linksContainer">
						<Link className="buttonLink" to="/sign-in">
							Sign In
						</Link>

						<Link className="buttonLink" to="/sign-up">
							Sign Up
						</Link>
					</div> */}
				</div>
			</div>

			<Footer />
		</div>
	);
}
