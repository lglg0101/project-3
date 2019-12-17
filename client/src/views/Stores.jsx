import React, { Component } from 'react';
import './HomePage.scss';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import MapView from '../components/Map';
import './Stores.scss';


export default function Stores() {
    return (
        <div className="d-flex storesContainer">
            <div className="d-flex linksContainer">
                <Navbar />
            </div>
            <div className="d-flex storesheader">
                <h1>THESE ARE THE THRIFT STORES AROUND YOU!</h1>
                <p>
                    If you would like to be added to our stores database, sign up and
                    enter your shop details!
                </p>
            </div>
            <div>
                <MapView />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
