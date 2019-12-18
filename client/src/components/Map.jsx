import React, { Component } from "react";
import { loadAllShops } from "./../services/shops";
// import api from "../../api";
// import '../../index.scss';
import mapboxgl from "mapbox-gl/dist/mapbox-gl"; // NEW
import "mapbox-gl/dist/mapbox-gl.css"; // Import of Mapbox CSS
mapboxgl.accessToken =
  "pk.eyJ1IjoibGdsZzAxMDEiLCJhIjoiY2s0YTc2bzkzMDEzNTNxcDhkNXlkcHEwcyJ9.69gWhkPB4Gb7_2E9-EzvsQ";

export default class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: "",
      lat: "",
      shops: null
    };
    this.getCurrentCoordinates = this.getCurrentCoordinates.bind(this);
    this.initMap = this.initMap.bind(this);
    this.mapRef = React.createRef();
    this.map = null;
    this.marker = null;
  }
  initMap(lng, lat) {
    console.log("lng", lng, "lat", lat);
    this.map = new mapboxgl.Map({
      container: this.mapRef.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [lng, lat],
      zoom: 8
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.marker = new mapboxgl.Marker({ color: "#662d91" })
      .setLngLat([lng, lat])
      .addTo(this.map);
    for (let i = 0; i < this.state.shops.length; i++) {
      let popup = new mapboxgl.Popup()
      .setHTML(
        `<a class="linkClass" href="http://localhost:3001/stores/${this.state.shops[i]._id}"<b>${this.state.shops[i].shopName}</b> <br>
        </a>
      `)
      let lng = this.state.shops[i].coordinates[0];
      let lat = this.state.shops[i].coordinates[1];
      console.log("WHAT IS THE COORDINATES", this.state.shops[i].coordinates);
      console.log("lng", lng, "lat", lat);

      new mapboxgl.Marker({ color: "#ffcc05" })
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(this.map);
    }
  }

  getCurrentCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          lng: position.coords.longitude,
          lat: position.coords.latitude
        });
        this.initMap(this.state.lng, this.state.lat);
      });
    }
  };
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div className="Map">
        <div className="map-header">
          <h2>Find Shops nearby</h2>
        </div>
        <div className="map-container">
          <div className="mapbox" ref={this.mapRef} style={{ height: 400 }} />
        </div>
        <h3>Click on the marker and visit them!</h3>
      </div>
    );
  }
  componentDidMount() {
    loadAllShops().then(shops => {
      console.log("SHOPS", shops);

      this.setState({
        shops: shops
      });
      this.getCurrentCoordinates();
    });
  }
}
